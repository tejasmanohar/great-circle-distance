
/**
 * Module dependencies
 */

const lazy = new require('lazy')

/**
 * Returns filtered data
 * @param {Object} stream - Node readable data stream
 * @param {Object()} fn - function used for filtering
 * @param {Object()} cb - callback function
 */
export default function({ stream, fn, cb }) {
  lazy(stream)
    .lines
    .map(o => JSON.parse(o))
    .filter(c => fn(c))
    .map(c => ({ id: c.user_id, name: c.name }))
    .join(cb)
}
