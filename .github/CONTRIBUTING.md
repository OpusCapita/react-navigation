# Contributing

## Release process (only for collaborators at npmjs.com)

### Usage:

```
git commit --allow-empty -m "[release:<RELEASE_BRANCH_NANE>:<RELEASE_VERSION>:<NEXT_DEVELOPMENT_VERSION>]"
git push origin release
```

### Where:

* `<RELEASE_BRANCH_NANE>` - branch for producing release.
* `<RELEASE_VERSION>` - release version.
* `<NEXT_DEVELOPMENT_VERSION>` - next development version.

### Example:

```
git commit --allow-empty -m "[release:master:1.0.0:1.0.1]"
git push origin release
```
