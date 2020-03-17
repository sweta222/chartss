var z = fetch('data/barchartdata.json').then(resp => {
  return resp.json();
})
.then(data => {
  //console.log(data.value[0].name);
  //console.log(data);
  return data;
});
//console.log(z);
const draw = (z) => {
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
    d3.max(data.value, d => d.tons),
    graphHeight,
    0,
    graph
  );
  const xScale = drawBandAxis(
    data.value.map(d => d.name),
    0,
    graphWidth,
    graph,
    graphHeight
  );
switch (data.type) {
  case 'bar':
    drawBar(
      xScale,
      yScale,
      graph,
      data.value,
      'name',
      'tons',
      graphHeight,
      xScale.bandwidth
    );
    break;
  case 'line':
    drawLine(xScale, yScale, data.value, 'name', 'tons', graph);
  default:
    break;
}
});
}
//});
  // drawBar(
  //   xScale,
  //   yScale,
  //   graph,
  //   data.value,
  //   'name',
  //   'tons',
  //   graphHeight,
  //   xScale.bandwidth
  // );

// var cars = [
//   {
//     "type":"bar",
//     "name": "compost",
//     "tons": 200
//   },
//   {
//     "type":"bar",
//     "name": "paper and card",
//     "tons": 600
//   },
//   {
//     "type":"bar",
//     "name": "glass",
//     "tons": 300
//   },
//   {
//     "type":"bar",
//     "name": "co-mingled material",
//     "tons": 900
//   }
// ];
// var jsoncars = JSON.stringify(cars);
// //console.log(jsoncars);
// var z = JSON.parse(jsoncars, function(key, value){
//   if(key === "type"){
//     return value;
//     console.log(value);
//   }
//   else{
//     return false;
//   }
// });
//console.log(z);
/*d3.json('data/linechartdata.json').then(data => {
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
});*/
