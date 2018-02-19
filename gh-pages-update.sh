#!/bin/sh

rm -rf .gh-pages-tmp lib  &&
mkdir .gh-pages-tmp &&
node node_modules/webpack/bin/webpack.js --config ./webpack.docs.config.js &&
cp -R lib/* .gh-pages-tmp &&
mkdir .gh-pages-tmp/static && cp -r ./static/* .gh-pages-tmp/static &&
cp -R www/index.html .gh-pages-tmp &&

git checkout gh-pages &&
git ls-files | grep -v -e "\(^\.gitignore$\|^\.gitattributes$\|^\.gh-pages-tmp$\)" | xargs rm -rf &&
rm -rf ./styles &&
mv .gh-pages-tmp/* . &&
rm -rf .gh-pages-tmp &&
git add . &&

git config user.email "$GH_EMAIL" > /dev/null 2>&1 &&
git config user.name "$GH_NAME" > /dev/null 2>&1 &&

git commit -m "Deploy to GitHub pages [ci skip]" &&
git push --force origin gh-pages &&
git checkout master
