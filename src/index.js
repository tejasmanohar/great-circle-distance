
/**
 * Module dependencies
 */

import fs from 'fs'
import filter from './input/filter'
import getDistance from './math/distance'

/**
 * Runner
 */

(args => filter({
  stream: fs.createReadStream(args[0] || 'customers.txt'),
  fn: c => !!(getDistance(
    [c.latitude, c.longitude],
    args[1] || [53.3381985, -6.2592576]
  ) > (args[2] || 100)),
  cb: res => console.log(res)
}))(process.argv.splice(2))
