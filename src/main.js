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
      drawColumn({
        colors: data.barColor,
        xScale: drawBandAxis({
          domainArr: data.datasets.map(d => d.labelx),
          rangeMin: 0,
          rangeMax: graphWidth,
          parentGroup: graph,
          height: graphHeight,
          xaxisTextsize: data.xTextsize,
          transRotation: data.xTransform,
          textAnchorpost: data.xTextAnchor,
          paddingI: data.innerPadding,
          paddingO: data.outerPadding,
          type: data.type,
          yaxisTextsize: data.yTextsize
        }),
        yScale: drawLinearAxis({
          domainMin: 0,
          domainMax: d3.max(data.datasets, d => d.labely),
          rangeMin: graphHeight,
          rangeMax: 0,
          parentGroup: graph,
          yaxisTextsize: data.yTextsize,
          type: data.type,
          height: graphHeight,
          xaxisTextsize: data.xTextsize
        }),
        parentGroup: graph,
        data: data.datasets,
        xScaleAttrName: 'labelx',
        yScaleAttrName: 'labely',
        barMaxHeight: graphHeight,
        fillBarcolor: (d, i) => data.barColor[i],
        svg: svg,
        heading: data.Heading,
        headingsize: data.HeadingSize,
        headingXC: data.HeadingStyleXval,
        headingYC: data.HeadingStyleYval,
        headingcolor: data.HeadingColor
      });
      break;
    case 'line':
      drawLine({
        xScale: drawBandAxis({
          domainArr: data.datasets.map(d => d.labelx),
          rangeMin: 0,
          rangeMax: graphWidth,
          parentGroup: graph,
          height: graphHeight,
          xaxisTextsize: data.xTextsize,
          transRotation: data.xTransform,
          textAnchorpost: data.xTextAnchor,
          paddingI: data.innerPadding,
          paddingO: data.outerPadding,
          type: data.type,
          yaxisTextsize: data.yTextsize
        }),
        yScale: drawLinearAxis({
          domainMin: 0,
          domainMax: d3.max(data.datasets, d => d.labely),
          rangeMin: graphHeight,
          rangeMax: 0,
          parentGroup: graph,
          yaxisTextsize: data.yTextsize,
          type: data.type,
          height: graphHeight,
          xaxisTextsize: data.xTextsize
        }),
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
      drawPie({
        color: data.piecolors,
        parentGroup: graph,
        piee: d3.pie()(data.datasets.map(d => d.labely)),
        arcs: d3
          .arc()
          .outerRadius(
            Math.min(
              graphWidth + margin.left + margin.right,
              graphHeight + margin.top + margin.bottom
            ) /
              2 -
              10
          )
          .innerRadius(data.innerRadius),
        colorx: (d, i) => data.piecolors[i],
        arcLabel: d3
          .arc()
          .outerRadius(
            Math.min(
              graphWidth + margin.left + margin.right,
              graphHeight + margin.top + margin.bottom
            ) /
              2 -
              40
          )
          .innerRadius(
            Math.min(
              graphWidth + margin.left + margin.right,
              graphHeight + margin.top + margin.bottom
            ) /
              2 -
              40
          ),
        browsers: (d, i) => data.datasets[i].labelx,
        svg: svg,
        radius:
          Math.min(
            graphWidth + margin.left + margin.right,
            graphHeight + margin.top + margin.bottom
          ) / 2,
        svgwidth: graphWidth + margin.left + margin.right,
        legendFill: (d, i) => data.piecolors[i],
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
      drawBar({
        bars: data.barColor,
        parentGroup: graph,
        xScale3: drawLinearAxis({
          domainMin: 0,
          domainMax: d3.max(data.datasets, d => d.labely),
          rangeMin: 0,
          rangeMax: graphWidth,
          parentGroup: graph,
          yaxisTextsize: data.yTextsize,
          type: data.type,
          height: graphHeight,
          xaxisTextsize: data.xTextsize
        }),
        yScale3: drawBandAxis({
          domainArr: data.datasets.map(d => d.labelx),
          rangeMin: graphHeight,
          rangeMax: 0,
          parentGroup: graph,
          height: graphHeight,
          xaxisTextsize: data.xTextsize,
          transRotation: data.xTransform,
          textAnchorpost: data.xTextAnchor,
          paddingI: data.innerPadding,
          paddingO: data.outerPadding,
          type: data.type,
          yaxisTextsize: data.yTextsize
        }),
        data: data.datasets.sort((a, b) => d3.ascending(a.labely - b.labely)),
        AttrName: 'labelx',
        AttrName2: 'labely',
        barDistance: data.barDist,
        colorbar: (d, i) => data.barColor[i],
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
