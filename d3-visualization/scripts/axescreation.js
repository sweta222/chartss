const drawLinearAxis = (
  domainMin,
  domainMax,
  rangeMin,
  rangeMax,
  parentGroup
) => {
  const scale = d3
    .scaleLinear()
    .domain([domainMin, domainMax])
    .range([rangeMin, rangeMax]); //for inverting the x-axis from top post to bottom

  const group = parentGroup.append('g');

  const axis = d3.axisLeft(scale);

  group
    .call(axis)
    .selectAll('text')
    .style('font-size', '20px');

  return scale;
};

const drawBandAxis = (domainArr, rangeMin, rangeMax, parentGroup, height) => {
  const scale = d3
    .scaleBand()
    .domain(domainArr)
    .range([rangeMin, rangeMax])
    .paddingInner(0.7)
    .paddingOuter(0.7);

  const group = parentGroup
    .append('g')
    .attr('transform', `translate(0, ${height})`);

  const axis = d3.axisBottom(scale);
  group
    .call(axis)
    .selectAll('text')
    .attr('transform', 'rotate(-7)')
    .attr('text-anchor', 'middle')
    .style('font-size', '20px');

  return scale;
};
