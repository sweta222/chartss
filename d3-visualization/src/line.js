const drawLine = (
  xScale,
  yScale,
  data,
  xScaleAttrName,
  yScaleAttrName,
  parentGroup,
  strokeColor,
  fillBeneathline,
  fillStrokeWidth
) => {
  const line = d3
    .line()
    .x(function(d) {
      return xScale(d[xScaleAttrName]);
    })
    .y(function(d) {
      return yScale(d[yScaleAttrName]);
    });

  //path element
  const path = parentGroup.append('path');

  path
    .data([data])
    .attr('fill', fillBeneathline)
    .attr('stroke', strokeColor)
    .attr('stroke-width', fillStrokeWidth)
    .attr('class', 'line')
    .attr('d', line);
};
