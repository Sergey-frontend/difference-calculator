### Hexlet tests and linter status:
[![Actions Status](https://github.com/Sergey-frontend/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/Sergey-frontend/frontend-project-46/actions)
[![Check tests and linter status](https://github.com/Sergey-frontend/frontend-project-46/actions/workflows/project-check.yml/badge.svg)](https://github.com/Sergey-frontend/frontend-project-46/actions/workflows/project-check.yml)
<a href="https://codeclimate.com/github/Sergey-frontend/frontend-project-46/maintainability"><img src="https://api.codeclimate.com/v1/badges/0e505028450adff7c00f/maintainability" /></a>
<a href="https://codeclimate.com/github/Sergey-frontend/frontend-project-46/test_coverage"><img src="https://api.codeclimate.com/v1/badges/0e505028450adff7c00f/test_coverage" /></a>
## Difference calculator
### Description
Difference Calculator is a command-line utility that helps you compare and identify the differences between two data structures. Whether you're working with YAML, JSON, or INI files, this tool allows you to easily analyze and understand the variations between them.
### Features
- Support for multiple input formats: YAML, JSON, INI
- Three output formats to choose from: plain text, stylish, and JSON
- Intuitive and user-friendly command-line interface
- Fast and efficient comparison algorithm

### Usage example:
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
### How to use
Node 16.x version at least
``` bash
# Clone this repository
git clone git@github.com:Sergey-frontend/difference-calculator.git

# Go to dowloaded directory
cd difference-calculator

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
[![asciicast](https://asciinema.org/a/hdQ3c5gAVBrHlz7dkvlUtAUTM.svg)](https://asciinema.org/a/hdQ3c5gAVBrHlz7dkvlUtAUTM)
