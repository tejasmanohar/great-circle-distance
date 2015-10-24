
/**
 * Module dependencies
 */

import { read, filter } from './input'
import { radians, distance } from './math'

/**
 * Runner
 */

(args => filter({
  data: read(args[0] || 'customers.txt'),
  fn: ({ latitude, longitude }) => distance(
    [latitude, longitude].map(radians),
    [0.930927180905, -0.109244654]
  ) < (args[1] || 100),
  cb: ::console.log
}))(process.argv.splice(2))
