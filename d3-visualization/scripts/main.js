const draw = (selectorName, data) => {
  const margin = {
    top: data.top,
    right: data.right,
    bottom: data.bottom,
    left: data.left
  };
  const graphWidth = data.width - margin.left - margin.right;
  const graphHeight = data.height - margin.top - margin.bottom;
  const radius =
    Math.min(
      graphWidth + margin.left + margin.right,
      graphHeight + margin.top + margin.bottom
    ) / 2;

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

  const colors = d3.scaleOrdinal().range(data.barColor);

  const color = d3.scaleOrdinal().range(data.piecolors);

  const pie = d3.pie()(data.datasets.map(d => d.labely));

  const arc = d3
    .arc()
    .outerRadius(radius - 10)
    .innerRadius(data.innerRadius);

  const labelArc = d3
    .arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40);

  switch (data.type) {
    case 'bar':
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
        data.xTextsize,
        data.xTransform,
        data.xTextAnchor,
        data.innerPadding,
        data.outerPadding
      );
      drawBar(
        xScale,
        yScale,
        graph,
        data.datasets,
        'labelx',
        'labely',
        graphHeight,
        xScale.bandwidth,
        (d, i) => colors(i),
        svg,
        data.Heading,
        data.HeadingSize,
        data.LegXpost,
        data.LegYpost
      );
      break;
    case 'line':
      const yScale2 = drawLinearAxis(
        0,
        d3.max(data.datasets, d => d.labely),
        graphHeight,
        0,
        graph,
        data.yTextsize
      );
      const xScale2 = drawBandAxis(
        data.datasets.map(d => d.labelx),
        0,
        graphWidth,
        graph,
        graphHeight,
        data.xTextsize,
        data.xTransform,
        data.xTextAnchor,
        data.innerPadding,
        data.outerPadding
      );
      drawLine(
        xScale2,
        yScale2,
        data.datasets,
        'labelx',
        'labely',
        graph,
        data.linestrokecolor,
        data.lineArea,
        data.strokeWidth
      );
      break;
    case 'pie':
      drawPie(
        graph,
        pie,
        arc,
        (d, i) => color(i),
        labelArc,
        (d, i) => data.datasets[i].labelx,
        svg,
        radius,
        graphWidth + margin.left + margin.right,
        (d, i) => color(i),
        (d, i) => data.datasets[i].labelx,
        data.xTextAnchor,
        data.Heading,
        data.pieFontsize,
        data.HeadingStyle,
        data.HeadingStyleXval,
        data.HeadingStyleYval,
        data.HeadingSize,
        data.HeadingColor,
        data.LegendWidth,
        data.LegendHeight,
        data.LegendTextSize,
        data.LegYpost,
        data.LegXpost
      );
    default:
      break;
  }
};
