// counts up every marker the playhead passes
// add this script to the 'Source Text' property of a text layer to visualise
// i used this for animating a combo meter, much simpler to control

// throws an error if there are no markers on the layer
n = marker.nearestKey(time).index;
if (marker.key(n).time > time)
    n--;

// add a 'Slider Control' to the layer to control the offset
n += Math.floor(effect("Slider Control")("Slider")) // delete this line if you don't need an offset

n