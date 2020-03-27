const drawColumn = arg => {
  //const colors = d3.scaleOrdinal().range(arg.userData.barColor);

  const rects = arg.parentGroup.selectAll('rect').data(arg.userData.datasets);

  const fillBarcolor = (d, i) => arg.userData.barColor[i];

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

  rects
    .enter()
    .append('rect')
    .attr('width', xScale.bandwidth)
    .attr('height', d => arg.height - yScale(d[arg.yScaleAttrName]))
    .attr('fill', fillBarcolor)
    .attr('x', d => xScale(d[arg.xScaleAttrName]))
    .attr('y', d => yScale(d[arg.yScaleAttrName]));

  arg.svg
    .append('g')
    .append('text')
    .text(arg.userData.Heading)
    .style('font-size', arg.userData.HeadingSize)
    .attr('x', arg.userData.HeadingStyleXval)
    .attr('y', arg.userData.HeadingStyleYval)
    .style('fill', arg.userData.HeadingColor);
};
