# PHP.earth theme

This is the main theme for the PHP.earth sites.

## Installation

```bash
git clone git://github.com/phpearth/github-pages-theme
cd github-pages-theme
make up
```

## Makefile

Provided [Makefile](Makefile) includes several helper commands:

* `npm`

  To run the npm command using Docker: `make npm a="run-script build"`

* `yarn`

  To run the yarn command using Docker: `make yarn a="build"`

* `up`

  To bring up Jekyll pages using Docker: `make up`

## License

This repository is licensed under the [MIT license](LICENSE).
