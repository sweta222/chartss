const drawPie = arg => {
  const color = d3.scaleOrdinal().range(arg.color);
  const g = arg.parentGroup
    .selectAll('arc')
    .data(arg.piee)
    .enter()
    .append('g');

  g.append('path')
    .attr('d', arg.arcs)
    .attr('fill', arg.colorx);

  g.append('text')
    .attr('transform', d => 'translate(' + arg.arcLabel.centroid(d) + ')')
    .style('font-size', arg.pieFontsize)
    .text(arg.browsers)
    .attr('text-anchor', arg.pieTextanchor);

  arg.svg
    .append('text')
    .attr('transform', 'translate(400, 200)')
    .text(arg.Heading)
    .attr('font-family', arg.HeadingStyle)
    .attr('x', arg.HeadingStylex)
    .attr('y', arg.HeadingStyley)
    .attr('font-size', arg.HeadingSize)
    .attr('fill', arg.HeadingColor);

  arg.parentGroup.attr(
    'transform',
    'translate(' + arg.radius + ',' + arg.radius + ')'
  );

  const legendGrp = arg.svg
    .selectAll('.legend')
    .data(arg.piee)
    .enter()
    .append('g')
    .attr(
      'transform',
      (d, i) => 'translate(' + (arg.svgwidth - 300) + ',' + (i * 30 + 20) + ')'
    )
    .attr('class', 'legend');

  legendGrp
    .append('rect')
    .attr('width', arg.pieLegWidth)
    .attr('height', arg.pieLegHeight)
    .attr('fill', arg.legendFill);

  legendGrp
    .append('text')
    .text(arg.legendText)
    .style('font-size', arg.legendTextsize)
    .attr('y', arg.legTextYpost)
    .attr('x', arg.legTextXpost);
};
