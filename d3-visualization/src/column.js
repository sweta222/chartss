const drawBar = (
  xScale,
  yScale,
  parentGroup,
  data,
  xScaleAttrName,
  yScaleAttrName,
  barMaxHeight,
  barWidth,
  fillBarcolor,
  svg,
  heading,
  headingsize,
  headingXC,
  headingYC,
  headingcolor
) => {
  const rects = parentGroup.selectAll('rect').data(data);

  rects
    .enter()
    .append('rect')
    .attr('width', barWidth)
    .attr('height', d => barMaxHeight - yScale(d[yScaleAttrName]))
    .attr('fill', fillBarcolor)
    .attr('x', d => xScale(d[xScaleAttrName]))
    .attr('y', d => yScale(d[yScaleAttrName]));

  svg
    .append('g')
    .append('text')
    .text(heading)
    .style('font-size', headingsize)
    .attr('x', headingXC)
    .attr('y', headingYC)
    .style('fill', headingcolor);
};
