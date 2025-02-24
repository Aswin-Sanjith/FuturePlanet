#!/bin/bash
set -e

# Check if PR_NUMBER is set
if [ -z "$PR_NUMBER" ]; then
  echo "PR_NUMBER is not set. Exiting."
  exit 1
fi

# Get owner and repo from GITHUB_REPOSITORY (format: owner/repo)
IFS='/' read -r owner repo <<< "$GITHUB_REPOSITORY"

# Fetch PR details using GitHub API
pr_json=$(curl -s -H "Authorization: token $GITHUB_TOKEN" "https://api.github.com/repos/$owner/$repo/pulls/$PR_NUMBER")
branch_name=$(echo "$pr_json" | jq -r '.head.ref')
pr_title=$(echo "$pr_json" | jq -r '.title')
pr_body=$(echo "$pr_json" | jq -r '.body')

# Helper: extract a section from the PR body
function extract_section() {
  local header="$1"
  # Use awk to capture text following the header until the next header or end of file.
  awk "/$header/{flag=1; next} /^###/{flag=0} flag" <<< "$pr_body" | sed 's/^[ \t]*//'
}

technical_changes=$(extract_section "### Technical Changes")
non_technical_changes=$(extract_section "### Non-Technical Changes")

# Fetch changed files for the PR
files_json=$(curl -s -H "Authorization: token $GITHUB_TOKEN" "https://api.github.com/repos/$owner/$repo/pulls/$PR_NUMBER/files")
file_list=$(echo "$files_json" | jq -r '.[].filename' | sed 's/^/- /')

# Format the release notes entry in Markdown
entry="\n## PR #${PR_NUMBER} [${branch_name}]\n\n**Title:** ${pr_title}\n\n**Changed Files:**\n${file_list}\n\n**Technical Changes:**\n${technical_changes}\n\n**Non-Technical Changes:**\n${non_technical_changes}\n\n*Merged on $(date)*\n---\n"

# Append the entry to RELEASE_NOTES.md (create the file if it doesn't exist)
echo -e "$entry" >> RELEASE_NOTES.md

echo "Release notes updated successfully."
