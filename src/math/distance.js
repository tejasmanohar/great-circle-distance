
/**
 * Calculate central angle between two cordinates
 * @param {Object[]} c1 - 1st [lat, lon] pair
 * @param {Object[]} c2 - 2nd [lat, lon] pair
 */
function centralAngle(c1, c2) {
  return Math.sin((c2[0] - c1[0]) / 2) ** 2 +
         Math.cos(c1[0]) * Math.cos(c2[0]) *
         Math.sin((c2[1] - c1[1]) / 2) ** 2
}

/**
 * Calculate distance between two coordinates
 * ...
 */
export default function(c1, c2) {
  const angle = centralAngle(c1, c2)
  return 6371 * 2 * Math.atan2(Math.sqrt(angle), Math.sqrt(1 - angle))
}
