const drawBar = arg => {
  const rects = arg.parentGroup.selectAll('rect').data(arg.data);

  rects
    .enter()
    .append('rect')
    .attr('width', arg.barWidth)
    .attr('height', d => arg.barMaxHeight - arg.yScale(d[arg.yScaleAttrName]))
    .attr('fill', arg.fillBarcolor)
    .attr('x', d => arg.xScale(d[arg.xScaleAttrName]))
    .attr('y', d => arg.yScale(d[arg.yScaleAttrName]));

  arg.svg
    .append('g')
    .append('text')
    .text(arg.heading)
    .style('font-size', arg.headingsize)
    .attr('x', arg.headingXC)
    .attr('y', arg.headingYC)
    .style('fill', arg.headingcolor);
};
