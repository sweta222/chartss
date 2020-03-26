const drawBar = arg => {
  const bars = d3.scaleOrdinal().range(arg.bars);

  arg.parentGroup
    .selectAll('bar')
    .data(arg.data)
    .enter()
    .append('rect')
    .attr('fill', arg.colorbar)
    .attr('x', arg.barDistance)
    .attr('height', arg.yScale3.bandwidth)
    .attr('y', d => arg.yScale3(d[arg.AttrName]))
    .attr('width', d => arg.xScale3(d[arg.AttrName2]));

  arg.svg
    .append('g')
    .append('text')
    .text(arg.heading)
    .style('font-size', arg.headingsize)
    .attr('x', arg.headingXC)
    .attr('y', arg.headingYC)
    .style('fill', arg.headingcolor);
};
