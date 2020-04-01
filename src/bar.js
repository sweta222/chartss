import * as d3 from 'd3';
import drawLinearAxis from './linearscale';
import drawBandAxis from './bandscale';
const drawBar = arg => {
  const fillBarColor = (d, i) => arg.userData.barColor[i];
  const xScale = drawLinearAxis({
    domainMin: 0,
    domainMax: d3.max(arg.userData.datasets, d => d.labely),
    rangeMin: 0,
    rangeMax: arg.width,
    parentGroup: arg.parentGroup,
    yaxisTextsize: arg.userData.yTextsize,
    type: arg.userData.type,
    height: arg.height,
    xaxisTextsize: arg.userData.xTextsize
  });
  const yScale = drawBandAxis({
    domainArr: arg.userData.datasets.map(d => d.labelx),
    rangeMin: arg.height,
    rangeMax: 0,
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

  arg.parentGroup
    .selectAll('bar')
    .data(arg.userData.datasets)
    .enter()
    .append('rect')
    .attr('fill', fillBarColor)
    .attr('x', arg.userData.barDist)
    .attr('height', yScale.bandwidth)
    .attr('y', d => yScale(d[arg.AttrName]))
    .attr('width', d => xScale(d[arg.AttrName2]));

  arg.svg
    .append('g')
    .append('text')
    .text(arg.userData.Heading)
    .style('font-size', arg.userData.HeadingSize)
    .attr('x', arg.userData.HeadingStyleXval)
    .attr('y', arg.userData.HeadingStyleYval)
    .style('fill', arg.userData.HeadingColor);
};
export default drawBar;
