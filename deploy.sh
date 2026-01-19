s#!/bin/bash
branch=${1:-"master"}
remote=${2:-"https://github.com/rmiessle/fraktur.git"}
echo "Deploying $branch to gh-pages $remote"
git checkout $branch
cd htck
# Update all dependencies
npm cache clean
npm install
bower install
# Build app
grunt build --force
cd ..

# Create dist zip file
cd htck
cp -R dist htck-fraktur
zip -r htck-fraktur.zip htck-fraktur/
mv htck-fraktur.zip dist/
rm -rf htck-fraktur
cd ..

######

echo "Creating temporary deployment folder"
rm -rf /tmp/fraktur-ghost
mkdir /tmp/fraktur-ghost
cp -R htck/dist/* /tmp/fraktur-ghost/
cp -R htck/app/images /tmp/fraktur-ghost/
cd /tmp/fraktur-ghost
echo "Initing ghost git"
git init
echo "Add remote $remote"
git remote add origin $remote
git checkout -b gh-pages
rm .gitignore
git add .
git commit -am "Deploying $branch to gh-pages"
git push --force origin gh-pages

######
