
# Great Circle Distance

## Setup

Assuming you have Node 0.10.x+ (and thus, NPM) installed, simply clone this repo
locally and fetch dependencies + precompile ES6/7 to ES5 via `npm install`.

## Usage

To execute the CLI, run `npm start`. The script accepts a file path
argument (like `npm start users.txt`), but if none is provided, it will
default to `./customers.txt` (relative to the current working directory).
Options may be passed in with the style `--option=x`.

## Options

* _coordinates_
  * __description:__ comma-separated latitude/longitude pair
  * __example:__ 0.9, -0.44
  * __default:__ 0.930927180905, -0.109244654
* _distance_
  * __description:__ maximum distance from location in kilometers (km)
  * __example:__ 355
  * __default:__ 100
