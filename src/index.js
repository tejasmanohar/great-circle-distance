
/**
 * Module dependencies
 */

import minimist from 'minimist'
import { read, filter } from './input'
import { radians, distance } from './math'

/**
 * Runner
 */

(args => filter({
  data: read(args._[0] || 'customers.txt'),
  fn: ({ latitude, longitude }) => distance(
    [latitude, longitude].map(radians),
    parseArray(args.coordinates) || [0.930927180905, -0.109244654]
  ) < (args.distance || 100),
  cb: console.log
}))(minimist(process.argv.slice(2)))

function parseArray(str) {
  if (!str) return
  return str.split(',')
}
