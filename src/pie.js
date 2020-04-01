import * as d3 from 'd3';
const drawPie = arg => {
  const piee = d3.pie()(arg.userData.datasets.map(d => d.labely));
  const colorx = (d, i) => arg.userData.piecolors[i];
  const arcs = d3
    .arc()
    .outerRadius(
      Math.min(
        arg.width + arg.userData.left + arg.userData.right,
        arg.height + arg.userData.top + arg.userData.bottom
      ) /
        2 -
        10
    )
    .innerRadius(arg.userData.innerRadius);

  const arcLabel = d3
    .arc()
    .outerRadius(
      Math.min(
        arg.width + arg.userData.left + arg.userData.right,
        arg.height + arg.userData.top + arg.userData.bottom
      ) /
        2 -
        40
    )
    .innerRadius(
      Math.min(
        arg.width + arg.userData.left + arg.userData.right,
        arg.height + arg.userData.top + arg.userData.bottom
      ) /
        2 -
        40
    );
  const browsers = (d, i) => arg.userData.datasets[i].labelx;
  const radius =
    Math.min(
      arg.width + arg.userData.left + arg.userData.right,
      arg.height + arg.userData.top + arg.userData.bottom
    ) / 2;
  const svgwidth = arg.width + arg.userData.left + arg.userData.right;
  const legendText = (d, i) => arg.userData.datasets[i].labelx;
  const g = arg.parentGroup
    .selectAll('arc')
    .data(piee)
    .enter()
    .append('g');

  g.append('path')
    .attr('d', arcs)
    .attr('fill', colorx);

  g.append('text')
    .attr('transform', d => 'translate(' + arcLabel.centroid(d) + ')')
    .style('font-size', arg.userData.pieFontsize)
    .text(browsers)
    .attr('text-anchor', arg.userData.xTextAnchor);

  arg.svg
    .append('text')
    .attr('transform', 'translate(400, 200)')
    .text(arg.userData.Heading)
    .attr('font-family', arg.userData.HeadingStyle)
    .attr('x', arg.userData.HeadingStyleXval)
    .attr('y', arg.userData.HeadingStyleYval)
    .attr('font-size', arg.userData.HeadingSize)
    .attr('fill', arg.userData.HeadingColor);

  arg.parentGroup.attr('transform', 'translate(' + radius + ',' + radius + ')');

  const legendGrp = arg.svg
    .selectAll('.legend')
    .data(piee)
    .enter()
    .append('g')
    .attr(
      'transform',
      (d, i) => 'translate(' + (svgwidth - 300) + ',' + (i * 30 + 20) + ')'
    );

  legendGrp
    .append('rect')
    .attr('width', arg.userData.LegendWidth)
    .attr('height', arg.userData.LegendHeight)
    .attr('fill', colorx);

  legendGrp
    .append('text')
    .text(legendText)
    .style('font-size', arg.userData.LegendTextSize)
    .attr('y', arg.userData.LegTextYpost)
    .attr('x', arg.userData.LegTextXpost);
};
export default drawPie;
