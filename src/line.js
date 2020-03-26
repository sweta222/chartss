const drawLine = arg => {
  const line = d3
    .line()
    .x(function(d) {
      return arg.xScale(d[arg.xScaleAttrName]);
    })
    .y(function(d) {
      return arg.yScale(d[arg.yScaleAttrName]);
    });

  //path element
  const path = arg.parentGroup.append('path');

  path
    .data([arg.data])
    .attr('fill', arg.fillBeneathline)
    .attr('stroke', arg.strokeColor)
    .attr('stroke-width', arg.fillStrokeWidth)
    .attr('class', 'line')
    .attr('d', line);
};
