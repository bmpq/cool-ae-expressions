// put this into the null layer's 'selected' slider control 

cursorLayer = thisComp.layer("CURSOR");
cursorPos = cursorLayer.toWorld(cursorLayer.anchorPoint);
cursorPos -= thisLayer.toWorld(thisLayer.anchorPoint);

cellWidth = effect("cell_size")("Point")[0];
cellHeight = effect("cell_size")("Point")[1];

cursorPos[0] -= cellWidth / 2;
cursorPos[1] -= cellHeight / 2;

numColumns = effect("num_columns")("Slider");

// cursor out of bounds, prevent next row selection
if (cursorPos[0] > cellWidth * numColumns - cellWidth || cursorPos[0] < -cellWidth)
{
	idx = -1;
}
else
{
	row = Math.ceil(cursorPos[1] / cellHeight);
	col = Math.ceil(cursorPos[0] / cellWidth);

	idx = row * numColumns + col;
}