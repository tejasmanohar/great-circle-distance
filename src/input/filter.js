
/**
 * Module dependencies
 */

const lazy = new require('lazy')

/**
 * Returns filtered data
 * @param {Object} stream - Node readable data stream
 * @param {Object()} fn - function used for filtering
 */
export default function({ stream, fn, cb }) {
  lazy(stream)
    .lines
    .map(c => JSON.parse(c))
    .filter(c => fn(c))
    .map(c => ({ id: c.user_id, name: c.name }))
    .join(cb)
}
