
/**
 * Module dependencies
 */

import Lazy from 'lazy'

/**
 * Returns filtered data
 * @param {Object} data - input- stream, string, etc.
 * @param {Object()} fn - function used for filtering
 * @param {Object()} cb - callback function
 */
export default function({ data, fn, cb }) {
  new Lazy(data)
    .lines
    .map(JSON.parse)
    .filter(fn)
    .map(c => ({ id: c.user_id, name: c.name }))
    .join(cb)
}
