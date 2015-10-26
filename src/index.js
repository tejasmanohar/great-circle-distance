
/**
 * Module dependencies
 */

import minimist from 'minimist'
import radians from 'degrees-radians'
import distance from './math/distance'
import { read, filter } from './input'

/**
 * Runner
 */

(args => filter({
  data: read(args._[0] || 'customers.txt'),
  fn: ({ latitude, longitude }) => distance(
    [latitude, longitude].map(Number).map(radians),
    parseArray(args.coordinates) || [0.930927180905, -0.109244654]
  ) < (args.distance || 100),
  cb: customers => console.log(customers.sort((a, b) => a.user_id - b.user_id))
}))(minimist(process.argv.slice(2)))

/**
 * Parse comma-separated values into Array
 * @param {string} str - comma-separated values (i.e. '1,2,3')
 */
function parseArray(str) {
  if (!str) return
  return str.split(',')
}
