const drawPie = (
  parentGroup,
  piee,
  arcs,
  colorx,
  arcLabel,
  browsers,
  svg,
  radius,
  svgwidth,
  legendFill,
  legendText,
  pieTextanchor,
  Heading,
  pieFontsize,
  HeadingStyle,
  HeadingStylex,
  HeadingStyley,
  HeadingSize,
  HeadingColor,
  pieLegWidth,
  pieLegHeight,
  legendTextsize,
  legTextYpost,
  legTextXpost
) => {
  const g = parentGroup
    .selectAll('arc')
    .data(piee)
    .enter()
    .append('g');

  g.append('path')
    .attr('d', arcs)
    .attr('fill', colorx);

  g.append('text')
    .attr('transform', d => 'translate(' + arcLabel.centroid(d) + ')')
    .style('font-size', pieFontsize)
    .text(browsers)
    .attr('text-anchor', pieTextanchor);

  svg
    .append('text')
    .attr('transform', 'translate(400, 200)')
    .text(Heading)
    .attr('font-family', HeadingStyle)
    .attr('x', HeadingStylex)
    .attr('y', HeadingStyley)
    .attr('font-size', HeadingSize)
    .attr('fill', HeadingColor);

  parentGroup.attr('transform', 'translate(' + radius + ',' + radius + ')');

  const legendGrp = svg
    .selectAll('.legend')
    .data(piee)
    .enter()
    .append('g')
    .attr(
      'transform',
      (d, i) => 'translate(' + (svgwidth - 300) + ',' + (i * 30 + 20) + ')'
    )
    .attr('class', 'legend');

  legendGrp
    .append('rect')
    .attr('width', pieLegWidth)
    .attr('height', pieLegHeight)
    .attr('fill', legendFill);

  legendGrp
    .append('text')
    .text(legendText)
    .style('font-size', legendTextsize)
    .attr('y', legTextYpost)
    .attr('x', legTextXpost);
};
