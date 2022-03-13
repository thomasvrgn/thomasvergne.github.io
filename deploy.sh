#!/usr/bin/env sh

# abort on errors
set -e

# build
pnpm build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'thomas.is-a.dev' > CNAME

git init
git checkout gh-pages
git add -A
git commit -m 'deploy'
git push -f https://github.com/thomasvergne/thomasvergne.github.io/

cd -