const marginx = { top: 40, right: 40, bottom: 60, left: 120 };
const graphWidthx = 800 - marginx.left - marginx.right;
const graphHeightx = 500 - marginx.top - marginx.bottom;

//append svg to the body/canvas
const svgLine = d3.select('.canvas')
  .append('svg')
   .attr('width', graphWidthx + marginx.left + marginx.right)
   .attr('height', graphHeightx + marginx.top + marginx.bottom);

//append group to svg
const graphLine = svgLine
    .append('g')
     .attr('width', graphWidthx)
     .attr('height', graphHeightx)
     .attr('transform', `translate(${marginx.left}, ${marginx.top})`);

//create axes groups
const xAxisGroupLine = graphLine.append('g')
  .attr('class', 'x-axis')
  .attr('transform', "translate(0, " + graphHeightx + ")");

const yAxisGroupLine = graphLine.append('g')
  .attr('class', 'y-axis');

d3.json('linechartdata.json').then(data => {
  
   const y = d3.scaleLinear()
    .domain([0,d3.max(data, d => d.distance)])
    .range([graphHeightx,0]);//for inverting the x-axis from top post to bottom

   const x = d3.scaleBand()
    .domain(data.map(d => d.year))
    .range([0,graphWidthx]);

  //d3 line path generator
  const line = d3.line()
    .x(function(d) { return x(d.year);})
    .y(function(d){ return y(d.distance);});

  //path element
  const path = graphLine.append('path');

  path.data([data])
    .attr('fill', 'none')
    .attr('stroke', 'blue')
    .attr('stroke-width', 2)
    .attr('class', 'line')
    .attr('d', line);

  //create axes
  const xAxisLine = d3.axisBottom(x)
  const yAxisLine = d3.axisLeft(y)
    .ticks(4);

  //call axes group
  xAxisGroupLine.call(xAxisLine);
  yAxisGroupLine.call(yAxisLine);

//styling axes texts
  xAxisGroupLine.selectAll('text')
    .attr('font-size', '20px')
    .attr('transform', 'rotate(-7)')
    .attr('text-anchor', 'middle');
  yAxisGroupLine.selectAll('text')
    .attr('font-size', '20px');

  })