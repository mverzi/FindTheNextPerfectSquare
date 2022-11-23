/**
 * This function finds the next perfect square, given the input is a perfect square
 * @param {integer} sq 
 * @returns The next perfect square if sq is a perfect square, -1 otherwise
 */
function findNextSquare(sq) {
    return (Math.sqrt(sq) % 1 === 0) ? (Math.sqrt(sq) + 1) ** 2 : -1
  }