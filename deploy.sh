#!/bin/bash
set -e # exit with nonzero exit code if anything fails

GH_BRANCH=$(git rev-parse --abbrev-ref HEAD)

# clear and re-create the dist directory
rm -rf dist || exit 0;
mkdir dist;

npm run lint
# npm test
npm run build
npm run coverage
./node_modules/.bin/coveralls < ./coverage/lcov.info

if [ $GH_BRANCH = "master" ]; then
    cd dist
    git init

    git config user.name "Travis CI"
    git config user.email "noomorph@gmail.com"
    git add .
    git commit -m "Deploy to GitHub Pages"

    # Force push from the current repo's master branch to the remote
    # repo's gh-pages branch. (All previous history on the gh-pages branch
    # will be lost, since we are overwriting it.) We redirect any output to
    # /dev/null to hide any sensitive credential data that might otherwise be exposed.
    git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
fi
