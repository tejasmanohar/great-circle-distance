
/**
 * Module dependencies
 */

const lazy = require('lazy')

/**
 * Returns filtered data
 * @param {Object} data - input of stream, string, etc.
 * @param {Object()} fn - function used for filtering
 * @param {Object()} cb - callback function
 */
export default function({ data, fn, cb }) {
  new lazy(data)
    .lines
    .map(o => JSON.parse(o))
    .filter(c => fn(c))
    .map(c => ({ id: c.user_id, name: c.name }))
    .join(cb)
}
