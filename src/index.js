
/**
 * Module dependencies
 */

import fs from 'fs'
import filter from './input/filter'
import getDistance from './math/distance'
import { radians } from './math/angle'

/**
 * Runner
 */

(args => filter({
  stream: fs.createReadStream(args[0] || 'customers.txt'),
  fn: c => !!(getDistance(
    [c.latitude, c.longitude].map(radians),
    args[1] || [0.930927180905, -0.109244654]
  ) > (args[2] || 100)),
  cb: res => console.log(res)
}))(process.argv.splice(2))
