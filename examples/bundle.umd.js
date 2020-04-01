(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('d3')) :
  typeof define === 'function' && define.amd ? define(['d3'], factory) :
  (global = global || self, global.spinner = factory(global.d3$1));
}(this, (function (d3$1) { 'use strict';

  const drawLinearAxis = arg => {
    const scale = d3$1.scaleLinear()
      .domain([arg.domainMin, arg.domainMax])
      .range([arg.rangeMin, arg.rangeMax]);

    const group = arg.parentGroup.append('g');

    if (arg.type === 'column' || arg.type === 'line') {
      const axis = d3$1.axisLeft(scale);
      group
        .call(axis)
        .selectAll('text')
        .style('font-size', arg.yaxisTextsize);
    } else {
      const axis = d3$1.axisBottom(scale);
      //invert x-axis to bottom
      group
        .attr('transform', `translate(0, ${arg.height})`)
        .call(axis)
        .selectAll('text')
        .style('font-size', arg.xaxisTextsize);
    }

    return scale;
  };

  const drawBandAxis = arg => {
    const scale = d3$1.scaleBand()
      .domain(arg.domainArr)
      .range([arg.rangeMin, arg.rangeMax])
      .paddingInner(arg.paddingI)
      .paddingOuter(arg.paddingO);

    const group = arg.parentGroup.append('g');

    if (arg.type === 'column' || arg.type === 'line') {
      const axis = d3$1.axisBottom(scale);
      group
        .attr('transform', `translate(0, ${arg.height})`)
        .call(axis)
        .selectAll('text')
        .attr('transform', arg.transRotation)
        .attr('text-anchor', arg.textAnchorpost)
        .style('font-size', arg.xaxisTextsize);
    } else {
      const axis = d3$1.axisLeft(scale);
      group
        .call(axis)
        .selectAll('text')
        .attr('transform', arg.transRotation)
        .attr('text-anchor', arg.textAnchorpost)
        .style('font-size', arg.yaxisTextsize);
    }

    return scale;
  };

  const drawBar = arg => {
    const fillBarColor = (d, i) => arg.userData.barColor[i];
    const xScale = drawLinearAxis({
      domainMin: 0,
      domainMax: d3$1.max(arg.userData.datasets, d => d.labely),
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
      domainMax: d3$1.max(arg.userData.datasets, d => d.labely),
      rangeMin: arg.height,
      rangeMax: 0,
      parentGroup: arg.parentGroup,
      yaxisTextsize: arg.userData.yTextsize,
      type: arg.userData.type,
      height: arg.height,
      xaxisTextsize: arg.userData.xTextsize
    });
    const line = d3$1.line()
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
      domainMax: d3$1.max(arg.userData.datasets, d => d.labely),
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

  const drawPie = arg => {
    const piee = d3$1.pie()(arg.userData.datasets.map(d => d.labely));
    const colorx = (d, i) => arg.userData.piecolors[i];
    const arcs = d3$1.arc()
      .outerRadius(
        Math.min(
          arg.width + arg.userData.left + arg.userData.right,
          arg.height + arg.userData.top + arg.userData.bottom
        ) /
          2 -
          10
      )
      .innerRadius(arg.userData.innerRadius);

    const arcLabel = d3$1.arc()
      .outerRadius(
        Math.min(
          arg.width + arg.userData.left + arg.userData.right,
          arg.height + arg.userData.top + arg.userData.bottom
        ) /
          2 -
          40
      )
      .innerRadius(
        Math.min(
          arg.width + arg.userData.left + arg.userData.right,
          arg.height + arg.userData.top + arg.userData.bottom
        ) /
          2 -
          40
      );
    const browsers = (d, i) => arg.userData.datasets[i].labelx;
    const radius =
      Math.min(
        arg.width + arg.userData.left + arg.userData.right,
        arg.height + arg.userData.top + arg.userData.bottom
      ) / 2;
    const svgwidth = arg.width + arg.userData.left + arg.userData.right;
    const legendText = (d, i) => arg.userData.datasets[i].labelx;
    const g = arg.parentGroup
      .selectAll('arc')
      .data(piee)
      .enter()
      .append('g');

    g.append('path')
      .attr('d', arcs)
      .attr('fill', colorx);

    g.append('text')
      .attr('transform', d => 'translate(' + arcLabel.centroid(d) + ')')
      .style('font-size', arg.userData.pieFontsize)
      .text(browsers)
      .attr('text-anchor', arg.userData.xTextAnchor);

    arg.svg
      .append('text')
      .attr('transform', 'translate(400, 200)')
      .text(arg.userData.Heading)
      .attr('font-family', arg.userData.HeadingStyle)
      .attr('x', arg.userData.HeadingStyleXval)
      .attr('y', arg.userData.HeadingStyleYval)
      .attr('font-size', arg.userData.HeadingSize)
      .attr('fill', arg.userData.HeadingColor);

    arg.parentGroup.attr('transform', 'translate(' + radius + ',' + radius + ')');

    const legendGrp = arg.svg
      .selectAll('.legend')
      .data(piee)
      .enter()
      .append('g')
      .attr(
        'transform',
        (d, i) => 'translate(' + (svgwidth - 300) + ',' + (i * 30 + 20) + ')'
      );

    legendGrp
      .append('rect')
      .attr('width', arg.userData.LegendWidth)
      .attr('height', arg.userData.LegendHeight)
      .attr('fill', colorx);

    legendGrp
      .append('text')
      .text(legendText)
      .style('font-size', arg.userData.LegendTextSize)
      .attr('y', arg.userData.LegTextYpost)
      .attr('x', arg.userData.LegTextXpost);
  };

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
          userData: data,
          parentGroup: graph,
          height: graphHeight,
          width: graphWidth,
          xScaleAttrName: 'labelx',
          yScaleAttrName: 'labely',
          svg: svg
        });
        break;
      case 'line':
        drawLine({
          userData: data,
          parentGroup: graph,
          height: graphHeight,
          width: graphWidth,
          xScaleAttrName: 'labelx',
          yScaleAttrName: 'labely'
        });
        break;
      case 'pie':
        drawPie({
          userData: data,
          parentGroup: graph,
          width: graphWidth,
          height: graphHeight,
          svg: svg
        });
        break;
      case 'bar':
        drawBar({
          userData: data,
          parentGroup: graph,
          width: graphWidth,
          height: graphHeight,
          AttrName: 'labelx',
          AttrName2: 'labely',
          svg: svg
        });
    }
  };

  return draw;

})));
