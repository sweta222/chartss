const drawLine = arg => {
  const xScale = drawBandAxis({
    domainArr: arg.userData.datasets.map(d => d.labelx),
    rangeMin: 0,
    rangeMax: arg.width,
    parentGroup: arg.parentGroup,
    height: arg.height,
    xaxisTextsize: arg.userData.xTextsize,
    transRotation: arg.userData.xTransform,
    textAnchorpost: arg.userData.xTextAnchor,
    paddingI: arg.userData.innerPadding,
    paddingO: arg.userData.outerPadding,
    type: arg.userData.type,
    yaxisTextsize: arg.userData.yTextsize
  });
  const yScale = drawLinearAxis({
    domainMin: 0,
    domainMax: d3.max(arg.userData.datasets, d => d.labely),
    rangeMin: arg.height,
    rangeMax: 0,
    parentGroup: arg.parentGroup,
    yaxisTextsize: arg.userData.yTextsize,
    type: arg.userData.type,
    height: arg.height,
    xaxisTextsize: arg.userData.xTextsize
  });
  const line = d3
    .line()
    .x(function(d) {
      return xScale(d[arg.xScaleAttrName]);
    })
    .y(function(d) {
      return yScale(d[arg.yScaleAttrName]);
    });

  //path element
  const path = arg.parentGroup.append('path');

  path
    .data([arg.userData.datasets])
    .attr('fill', arg.userData.lineArea)
    .attr('stroke', arg.userData.linestrokecolor)
    .attr('stroke-width', arg.userData.strokeWidth)
    .attr('class', 'line')
    .attr('d', line);
};
