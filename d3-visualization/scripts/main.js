const draw = (selectorName, data) => {

  const margin = { top: 20, right: 20, bottom: 60, left: 120 };
  const graphWidth = data.width - margin.left - margin.right;
  const graphHeight = data.height - margin.top - margin.bottom;
  const svg = d3
    .select(selectorName)
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
    d3.max(data.datasets, d => d.labely),
    graphHeight,
    0,
    graph,
    data.yTextsize
  );
  const xScale = drawBandAxis(
    data.datasets.map(d => d.labelx),
    0,
    graphWidth,
    graph,
    graphHeight,
    data.xTextsize
  );
  switch (data.type) {
    case 'bar':
      drawBar(
        xScale,
        yScale,
        graph,
        data.datasets,
        'labelx',
        'labely',
        graphHeight,
        xScale.bandwidth,
        data.barColor,
      );
    break;
    case 'line':
      drawLine(xScale, yScale, data.datasets, 'labelx', 'labely', graph, data.linestrokecolor, data.lineArea, data.strokeWidth);
    default:
    break;
  }
}
