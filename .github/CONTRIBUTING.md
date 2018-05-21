# Contributing guide

We love contributors and people willing to help.

## How can you help?

* Report issues
* Fix typos
* Add new features
* Improve existing features

## Contributing procedure

Below describes the procedure for contributing to this repository in particular
and some extra information about it.

* Fork this repository over GitHub
* Create a separate branch, for instance `patch-1`, so you will not need to
  rebase your fork if your master branch is merged

  ```bash
  git clone git@github.com:your_username/github-pages-theme
  cd github-pages-theme
  git checkout -b patch-1
  ```
* Make changes, commit them and push to your fork

  ```bash
  git add .
  git commit -m "Fix typo in the FAQ"
  git push origin patch-1
  ```
* Open a pull request

## Images

Some images are also located in a [separate repository](https://github.com/phpearth/assets).

## GitHub issues labels

Labels are used to organize issues and pull requests into manageable categories.
The following labels are used:

* **duplicate** - Attached when the same issue or pull request already exists.
* **enhancement** - New feature.
* **invalid** - Attached when
* **question** - Attached for questions or discussions.
* **wontfix** - Attached when decided that issue will not be fixed.
