
/**
 * Module dependencies
 */

import filter from './input/filter'
import { createReadStream } from 'fs'
import { radians } from './math/angle'
import distance from './math/distance'

/**
 * Runner
 */

(args => filter({
  stream: createReadStream(args[0] || 'customers.txt'),
  fn: ({ latitude, longitude }) => distance(
    [latitude, longitude].map(radians),
    [0.930927180905, -0.109244654]
  ) < (args[1] || 100),
  cb: ::console.log
}))(process.argv.splice(2))
