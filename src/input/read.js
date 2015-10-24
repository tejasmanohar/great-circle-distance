
/**
 * Module dependencies
 */

import errno from 'errno'
import { createReadStream } from 'fs'

/**
 * Create readable stream
 * @param {string} path - file path relative to `process.cwd()`
 */
export default function(path) {
  return createReadStream(path).on('error', e => {
    throw errno.code[e.code].description
  })
}
