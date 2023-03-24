// gives a rotation for the layer to always face the 'null-lookat' layer
// in top-down 2D
// put this expression in the 'Rotation' property

l = thisComp.layer("null-lookat");

xA = l.toWorld(l.anchorPoint)[0];
yA = l.toWorld(l.anchorPoint)[1];

xB = toWorld(anchorPoint)[0];
yB = toWorld(anchorPoint)[1];

angle = Math.atan2(xB - xA, yB - yA) * 180 / Math.PI;
angle = 180 - angle;