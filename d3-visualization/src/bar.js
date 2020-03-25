const drawbarchart = arg => {
  arg.parentGroup
    .append('g')
    .attr('transform', 'translate(0,' + arg.height + ')') //linearscale on bottom as x-axis
    .call(d3.axisBottom(arg.xScale3))
    .selectAll('text')
    .style('font-size', arg.xAxisTicksize);

  arg.parentGroup
    .append('g')
    .call(d3.axisLeft(arg.yScale3))
    .selectAll('text')
    .style('font-size', arg.yAxisTicksize)
    .attr('text-anchor', arg.xTextAnchor)
    .attr('transform', arg.xTransform);

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
