// repeats the keyframe animation of a property this expression is in
// when triggered by the playhead passing a marker on the layer
// your keyframes should start on frame 0 of the comp

// throws an error if there are no markers on the layer
i = marker.nearestKey(time).index;
if (time < marker.key(i).time)
    i--;

m = marker.key(i);
t = time - m.time;

valueAtTime(t)