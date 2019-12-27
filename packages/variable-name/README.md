@jasonhk/variable-name
======================

A utility package consists functions that used to retrieve the name of variables.

[![npm-version-badge]][npm-package] [![npm-download-badge]][npm-package] [![npm-license-badge]][github-license] [![travis-build-badge]][travis-build] [![codecov-coverage-badge]][codecov-coverage]

## Installation

### Node.js

```bash
$ npm install @jasonhk/variable-name
```

## Usage

### Load the Library

#### CommonJS

```javascript
const { getVariableName, getVariableNames } = require("@jasonhk/variable-name");
```

#### ES2015 Modules

```javascript
import { getVariableName, getVariableNames } from "@jasonhk/variable-name";
```

### Using the Library

Get the name of a variable:

```javascript
const variable = 1337;

// Should return "variable"
getVariableName({ variable });
```

Get the names of a list of variables:

```javascript
const object = { property: 1337 };
const { property } = object;

// Should return ["object", "property"]
getVariableNames(
    [
        { object },
        { property },
    ]);
```

## License

Copyright &copy; 2019 [Jason Kwok][author-website].<br>
Licensed under the [MIT License][github-license].

[author-website]: https://jasonhk.net "Author's Website"

[github-license]: https://github.com/JasonHK/node-utilities/blob/master/packages/variable-name/LICENSE "Package's License File"

[npm-package]: https://www.npmjs.com/package/@jasonhk/variable-name "Package's NPM Registry Entry"
[npm-download-badge]: https://img.shields.io/npm/dt/@jasonhk/variable-name?style=flat-square "Package's Total Downloads"
[npm-license-badge]: https://img.shields.io/npm/l/@jasonhk/variable-name?style=flat-square "Package's License"
[npm-version-badge]: https://img.shields.io/npm/v/@jasonhk/variable-name?style=flat-square "Package's Version"

[travis-build]: https://travis-ci.com/JasonHK/node-utilities "Repository's Travis CI Page"
[travis-build-badge]: https://img.shields.io/travis/com/JasonHK/node-utilities?style=flat-square "Repository's Build Status"

[codecov-coverage]: https://codecov.io/gh/JasonHK/node-utilities "Repository's Codecov Page"
[codecov-coverage-badge]: https://img.shields.io/codecov/c/github/JasonHK/node-utilities?style=flat-square "Repository's Code Coverage"
