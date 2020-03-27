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
    default:
      break;
  }
};
