const draw = (selectorName, data) => {
  const margin = {
    top: data.top,
    right: data.right,
    bottom: data.bottom,
    left: data.left
  };
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

  switch (data.type) {
    case 'column':
      const colors = d3.scaleOrdinal().range(data.barColor);

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
      drawBar({
        xScale: xScale,
        yScale: yScale,
        parentGroup: graph,
        data: data.datasets,
        xScaleAttrName: 'labelx',
        yScaleAttrName: 'labely',
        barMaxHeight: graphHeight,
        barWidth: xScale.bandwidth,
        fillBarcolor: (d, i) => colors(i),
        svg: svg,
        heading: data.Heading,
        headingsize: data.HeadingSize,
        headingXC: data.HeadingStyleXval,
        headingYC: data.HeadingStyleYval,
        headingcolor: data.HeadingColor
      });
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
      drawLine({
        xScale: xScale2,
        yScale: yScale2,
        data: data.datasets,
        xScaleAttrName: 'labelx',
        yScaleAttrName: 'labely',
        parentGroup: graph,
        strokeColor: data.linestrokecolor,
        fillBeneathline: data.lineArea,
        fillStrokeWidth: data.strokeWidth
      });
      break;
    case 'pie':
      const radius =
        Math.min(
          graphWidth + margin.left + margin.right,
          graphHeight + margin.top + margin.bottom
        ) / 2;
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

      drawPie({
        parentGroup: graph,
        piee: pie,
        arcs: arc,
        colorx: (d, i) => color(i),
        arcLabel: labelArc,
        browsers: (d, i) => data.datasets[i].labelx,
        svg: svg,
        radius: radius,
        svgwidth: graphWidth + margin.left + margin.right,
        legendFill: (d, i) => color(i),
        legendText: (d, i) => data.datasets[i].labelx,
        pieTextanchor: data.xTextAnchor,
        Heading: data.Heading,
        pieFontsize: data.pieFontsize,
        HeadingStyle: data.HeadingStyle,
        HeadingStylex: data.HeadingStyleXval,
        HeadingStyley: data.HeadingStyleYval,
        HeadingSize: data.HeadingSize,
        HeadingColor: data.HeadingColor,
        pieLegWidth: data.LegendWidth,
        pieLegHeight: data.LegendHeight,
        legendTextsize: data.LegendTextSize,
        legTextYpost: data.LegTextYpost,
        legTextXpost: data.LegTextXpost
      });
      break;
    case 'bar':
      const xScale3 = d3
        .scaleLinear()
        .range([0, graphWidth])
        .domain([0, d3.max(data.datasets, d => d.labely)]);

      const yScale3 = d3
        .scaleBand()
        .range([graphHeight, 0])
        .domain(data.datasets.map(d => d.labelx))
        .paddingInner(data.innerPadding)
        .paddingOuter(data.outerPadding);

      const datas = data.datasets.sort((a, b) =>
        d3.ascending(a.labely - b.labely)
      );
      const bars = d3.scaleOrdinal().range(data.barColor);
      drawbarchart({
        parentGroup: graph,
        height: graphHeight,
        xScale3: xScale3,
        yScale3: yScale3,
        data: datas,
        AttrName: 'labelx',
        AttrName2: 'labely',
        xAxisTicksize: data.xTextsize,
        yAxisTicksize: data.yTextsize,
        xTextAnchor: data.xTextAnchor,
        xTransform: data.xTransform,
        barDistance: data.barDist,
        colorbar: (d, i) => bars(i),
        svg: svg,
        heading: data.Heading,
        headingsize: data.HeadingSize,
        headingXC: data.HeadingStyleXval,
        headingYC: data.HeadingStyleYval,
        headingcolor: data.HeadingColor
      });
    default:
      break;
  }
};
