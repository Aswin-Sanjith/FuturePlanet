#!/bin/bash

# This script helps create better PR descriptions with structured documentation
# Usage: .github/scripts/generate_release_notes.sh [PR_TITLE]

PR_TITLE="${1:-"Feature/Fix: Brief description"}"

cat << EOF > pr_template.md
# ${PR_TITLE}

## Changes
<!-- Describe the functional/business changes in non-technical terms -->

## Technical Details
<!-- Provide technical implementation details for developers -->

## Testing
<!-- How was this change tested? -->

## Screenshots/Examples
<!-- If applicable, add screenshots or examples -->

## Modules Affected
<!-- List the modules/features affected by this change -->
- [ ] LMS
- [ ] Forms
- [ ] Folder
- [ ] Other: ________________

## Type of Change
<!-- Mark the type of change -->
- [ ] Bug fix
- [ ] New feature
- [ ] Enhancement of existing feature
- [ ] Breaking change
- [ ] Documentation update

EOF

echo "PR template generated as pr_template.md"
echo "Use this to create well-documented PRs that will feed into automated release notes"
