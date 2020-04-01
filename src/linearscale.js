import * as d3 from 'd3';
const drawLinearAxis = arg => {
  const scale = d3
    .scaleLinear()
    .domain([arg.domainMin, arg.domainMax])
    .range([arg.rangeMin, arg.rangeMax]);

  const group = arg.parentGroup.append('g');

  if (arg.type === 'column' || arg.type === 'line') {
    const axis = d3.axisLeft(scale);
    group
      .call(axis)
      .selectAll('text')
      .style('font-size', arg.yaxisTextsize);
  } else {
    const axis = d3.axisBottom(scale);
    //invert x-axis to bottom
    group
      .attr('transform', `translate(0, ${arg.height})`)
      .call(axis)
      .selectAll('text')
      .style('font-size', arg.xaxisTextsize);
  }

  return scale;
};
export default drawLinearAxis;
