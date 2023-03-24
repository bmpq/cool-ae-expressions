// rudimentary function with consistent randomness based on the seed
// the built-in AE 'random()' with 'seedRandom()' is not consistent between different layers with the same seed

function sinrand(seed) {
  var x = Math.sin(seed) * 10000;
  return x - Math.floor(x); // returns 0..1
}

sinrand(100)