### Hexlet tests and linter status:
[![Actions Status](https://github.com/Sergey-frontend/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/Sergey-frontend/frontend-project-46/actions)
[![Check tests and linter status](https://github.com/Sergey-frontend/frontend-project-46/actions/workflows/node.yml/badge.svg)](https://github.com/Sergey-frontend/frontend-project-46/actions/workflows/node.yml)
<a href="https://codeclimate.com/github/Sergey-frontend/frontend-project-46/maintainability"><img src="https://api.codeclimate.com/v1/badges/0e505028450adff7c00f/maintainability" /></a>
<a href="https://codeclimate.com/github/Sergey-frontend/frontend-project-46/test_coverage"><img src="https://api.codeclimate.com/v1/badges/0e505028450adff7c00f/test_coverage" /></a>
## Difference calculator
### Description
This is utility that determines the difference between two data structures.

#### Utility features:
 - Support for different input formats: yaml, json, ini
 - Report generation in the form of plain text, stylish and json

#### Usage example:
```bash
# format plain
gendiff --format plain path/to/file.yml another/path/file.json

Property 'common.follow' was added with value: false
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group2' was removed

# format stylish
gendiff path/to/file.yml another/path/file.json

{
  + follow: false
    setting1: Value 1
  - setting2: 200
  - setting3: true
  + setting3: {
        key: value
    }
  + setting4: blah blah
  + setting5: {
        key5: value5
    }
}

# format json
gendiff --format json path/to/file.yml another/path/file.json

[{"key":"common","type":"nested","children":[{"key":"follow","value":false,"type":"added","meta":{}}]
```
### How to install
#### System requirements:
Node 16.x version at least
``` bash
# Clone this repository
git clone git@github.com:Sergey-frontend/frontend-project-46.git
# Go to dowloaded directory
cd frontend-project-46
# Install dependencies
npm ci
# Link package.json to "./bin" directory
npm link
# Use utility
gendiff <filepath1> <filepath2>
# Or get more info
gendiff --help
```

### Gendif launch example with different format and nested stuctures:
#### Stylish format:
<a href="https://asciinema.org/a/Jg1Ktcj8VjD5qtsOfIGwcBIjZ" target="_blank"><img src="https://asciinema.org/a/Jg1Ktcj8VjD5qtsOfIGwcBIjZ.svg" /></a>
#### Plain format:
<a href="https://asciinema.org/a/LJQbJpz8nT2Bqwmhafi0exmur" target="_blank"><img src="https://asciinema.org/a/LJQbJpz8nT2Bqwmhafi0exmur.svg" /></a>
#### JSON format
<a href="https://asciinema.org/a/k5fnUQA0jLpIRTnowwTCt0205" target="_blank"><img src="https://asciinema.org/a/k5fnUQA0jLpIRTnowwTCt0205.svg" /></a>
