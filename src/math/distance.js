
/**
 * Returns central angle between two cordinates
 * @param {Object[]} cord1 - 1st [lat, lon] pair
 * @param {Object[]} cord2 - 2nd [lat, lon] pair
 */
function getCentralAngle(cord1, cord2) {
  return Math.sin(cord2[0] - cord1[0] / 2) ** 2 +
         Math.cos(cord1[0]) * Math.cos(cord2[0]) *
         Math.sin(cord2[1] - cord1[0] / 2) ** 2
}

/**
 * Returns distance between two coordinates
 * @param {Object[]} cord1 - 1st [lat, lon] pair
 * @param {Object[]} cord2 - 2nd [lat, lon] pair
 */
export default function(cord1, cord2) {
  const angle = getCentralAngle(cord1, cord2)
  return 6371 * 2 * Math.atan2(Math.sqrt(angle), Math.sqrt(1 - angle))
}
