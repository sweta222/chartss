d3.json('data/barchartdata.json').then(data => {
  const margin = { top: 20, right: 20, bottom: 60, left: 120 };
  const graphWidth = 860 - margin.left - margin.right;
  const graphHeight = 560 - margin.top - margin.bottom;
  const svg = d3
    .select('.canvas')
    .append('svg')
    .attr('width', graphWidth + margin.left + margin.right)
    .attr('height', graphHeight + margin.top + margin.bottom);

  //append group into svg
  const graph = svg
    .append('g')
    .attr('width', graphWidth)
    .attr('height', graphHeight)
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  const yScale = drawLinearAxis(
    0,
    d3.max(data, d => d.tons),
    graphHeight,
    0,
    graph
  );
  const xScale = drawBandAxis(
    data.map(d => d.name),
    0,
    graphWidth,
    graph,
    graphHeight
  );

  drawBar(
    xScale,
    yScale,
    graph,
    data,
    'name',
    'tons',
    graphHeight,
    xScale.bandwidth
  );
});

d3.json('data/linechartdata.json').then(data => {
  const margin = { top: 20, right: 20, bottom: 60, left: 120 };
  const graphWidth = 860 - margin.left - margin.right;
  const graphHeight = 560 - margin.top - margin.bottom;
  const svg = d3
    .select('.canvas')
    .append('svg')
    .attr('width', graphWidth + margin.left + margin.right)
    .attr('height', graphHeight + margin.top + margin.bottom);

  //append group into svg
  const graph = svg
    .append('g')
    .attr('width', graphWidth)
    .attr('height', graphHeight)
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  const yScale = drawLinearAxis(
    0,
    d3.max(data, d => d.distance),
    graphHeight,
    0,
    graph
  );
  const xScale = drawBandAxis(
    data.map(d => d.year),
    0,
    graphWidth,
    graph,
    graphHeight
  );

  drawLine(xScale, yScale, data, 'year', 'distance', graph);
});
