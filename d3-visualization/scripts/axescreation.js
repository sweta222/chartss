const drawLinearAxis = (
  domainMin,
  domainMax,
  rangeMin,
  rangeMax,
  parentGroup,
  yaxisTextsize,
) => {
  const scale = d3
    .scaleLinear()
    .domain([domainMin, domainMax])
    .range([rangeMin, rangeMax]);

  const group = parentGroup.append('g');

  const axis = d3.axisLeft(scale);

  group
    .call(axis)
    .selectAll('text')
    .style('font-size', yaxisTextsize);

  return scale;
};

const drawBandAxis = (domainArr, rangeMin, rangeMax, parentGroup, height, xaxisTextsize) => {
  const scale = d3
    .scaleBand()
    .domain(domainArr)
    .range([rangeMin, rangeMax])
    .paddingInner(0.6)
    .paddingOuter(0.6);

  const group = parentGroup
    .append('g')
    .attr('transform', `translate(0, ${height})`);

  const axis = d3.axisBottom(scale);
  group
    .call(axis)
    .selectAll('text')
    .attr('transform', 'rotate(-7)')
    .attr('text-anchor', 'middle')
    .style('font-size', xaxisTextsize);

  return scale;
};
