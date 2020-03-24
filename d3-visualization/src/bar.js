const drawbarchart = (
  parentGroup,
  height,
  xScale3,
  yScale3,
  data,
  AttrName,
  AttrName2,
  xAxisTicksize,
  yAxisTicksize,
  xTextAnchor,
  xTransform,
  barDistance,
  colorbar,
  svg,
  heading,
  headingsize,
  headingXC,
  headingYC,
  headingcolor
) => {
  parentGroup
    .append('g')
    .attr('transform', 'translate(0,' + height + ')') //linearscale on bottom as x-axis
    .call(d3.axisBottom(xScale3))
    .selectAll('text')
    .style('font-size', xAxisTicksize);

  parentGroup
    .append('g')
    .call(d3.axisLeft(yScale3))
    .selectAll('text')
    .style('font-size', yAxisTicksize)
    .attr('text-anchor', xTextAnchor)
    .attr('transform', xTransform);

  parentGroup
    .selectAll('bar')
    .data(data)
    .enter()
    .append('rect')
    .attr('fill', colorbar)
    .attr('x', barDistance)
    .attr('height', yScale3.bandwidth)
    .attr('y', d => yScale3(d[AttrName]))
    .attr('width', d => xScale3(d[AttrName2]));

  svg
    .append('g')
    .append('text')
    .text(heading)
    .style('font-size', headingsize)
    .attr('x', headingXC)
    .attr('y', headingYC)
    .style('fill', headingcolor);
};
