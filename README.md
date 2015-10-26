
# Great Circle Distance

This program reads a list of customers provided in JSON and outputs customers
within 100 km of a set coordinate pair sorted by user id (ascending).

## Setup

Assuming you have Node 0.10.x+ (and thus, NPM) installed, simply clone this repo
locally and fetch dependencies + precompile ES6/7 to ES5 via `npm install` in
the root of the project directory.

## Usage

To execute the CLI, run `npm start` in the root of the project directory.
The script accepts a file path argument (like `npm start users.txt`),
but if none is provided, it will default to `./customers.txt`
(relative to the current working directory). Options may be provided
with the style `--option=x`.

## Options

* _coordinates_
  * __description:__ comma-separated latitude/longitude pair (degrees)
  * __example:__ 30, 24
  * __default:__ 53.3381985, -6.2592576
* _distance_
  * __description:__ maximum distance from location in kilometers (km)
  * __example:__ 355
  * __default:__ 100
