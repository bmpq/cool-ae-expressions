// an approxiamtion for the spacing of hexagons on a grid
// so they can stay at a constant distance edge to edge when rotated
// very specific use case, doubt i will use this ever again
// it's not the exact formula, im not a math guy, it looks good enough visually though

const sqrt3 = 1.73205080757;

rot = ((content("Polystar Path 1").rotation + 30) % 60 / 60 - .5) * 2;

result = rot * rot * sqrt3 * 9