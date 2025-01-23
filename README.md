### Hexlet tests and linter status:
[![Actions Status](https://github.com/AnyaZharikova/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/AnyaZharikova/frontend-project-46/actions)
[![check project](https://github.com/AnyaZharikova/frontend-project-46/actions/workflows/check.yml/badge.svg)](https://github.com/AnyaZharikova/frontend-project-46/actions/workflows/check.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/84e4abd728e90d26e72b/maintainability)](https://codeclimate.com/github/AnyaZharikova/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/84e4abd728e90d26e72b/test_coverage)](https://codeclimate.com/github/AnyaZharikova/frontend-project-46/test_coverage)

# Diff Finder
## Description  
Diff Finder is a CLI application for finding differences between two configuration files.  
Accepted file format:  
* JSON  
* YAML (including `.yml` and `.yaml`)  

The application provides output in multiple formats:  
* stylish  
* plain  
* JSON  

## Development  
### Requirements  
To install and run the app, [NodeJS](https://nodejs.org/) (v14.18.0 or higher) is required.
### Installation  
1. Clone the repository to your computer.
2. Navigate to the project directory.
3. Install the dependencies using the following command:
``` bash
    make install  
```

After successfully installing the dependencies, you can use the following command:
``` bash
    gendiff [options] <filepath1> <filepath2>
```
Avaliable options:  
`-f, --format [type]` - specify the output format (default `stylish`)  
`-h, --help` - display help information

### Demonstration  
#### Comparing two flat JSON files  
[![asciicast](https://asciinema.org/a/8KUcC4BBsy5Vfr08t9AkbKblE.svg)](https://asciinema.org/a/8KUcC4BBsy5Vfr08t9AkbKblE)  
#### Comparing two flat YAML files
[![asciicast](https://asciinema.org/a/MCyD4P4vvpgbhX64nt07kzUQ4.svg)](https://asciinema.org/a/MCyD4P4vvpgbhX64nt07kzUQ4)  
#### Comparing files (JSON or YAML) with result in different formats  
##### Stylish format:  
[![asciicast](https://asciinema.org/a/zrOaJs6dmR1EiuugOrLGT7MXe.svg)](https://asciinema.org/a/zrOaJs6dmR1EiuugOrLGT7MXe)  

##### Plain format:  
[![asciicast](https://asciinema.org/a/ZHLZkJEA1ST9VJDT2vGN6CUG1.svg)](https://asciinema.org/a/ZHLZkJEA1ST9VJDT2vGN6CUG1)  

##### JSON format:  
[![asciicast](https://asciinema.org/a/o9R4NVrRo0xuvAMr7qmBEGE7Z.svg)](https://asciinema.org/a/o9R4NVrRo0xuvAMr7qmBEGE7Z) 
