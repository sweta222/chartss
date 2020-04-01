import * as d3 from 'd3';
const drawBandAxis = arg => {
  const scale = d3
    .scaleBand()
    .domain(arg.domainArr)
    .range([arg.rangeMin, arg.rangeMax])
    .paddingInner(arg.paddingI)
    .paddingOuter(arg.paddingO);

  const group = arg.parentGroup.append('g');

  if (arg.type === 'column' || arg.type === 'line') {
    const axis = d3.axisBottom(scale);
    group
      .attr('transform', `translate(0, ${arg.height})`)
      .call(axis)
      .selectAll('text')
      .attr('transform', arg.transRotation)
      .attr('text-anchor', arg.textAnchorpost)
      .style('font-size', arg.xaxisTextsize);
  } else {
    const axis = d3.axisLeft(scale);
    group
      .call(axis)
      .selectAll('text')
      .attr('transform', arg.transRotation)
      .attr('text-anchor', arg.textAnchorpost)
      .style('font-size', arg.yaxisTextsize);
  }

  return scale;
};
export default drawBandAxis;
