
/**
 * Module dependencies
 */

import filter from './input/filter'
import { createReadStream } from 'fs'
import { radians } from './math/angle'
import getDistance from './math/distance'

/**
 * Runner
 */

(args => filter({
  stream: createReadStream(args[0] || 'customers.txt'),
  fn: c => getDistance(
    [c.latitude, c.longitude].map(radians),
    [0.930927180905, -0.109244654]
  ) < (args[1] || 100),
  cb: res => console.log(res)
}))(process.argv.splice(2))
