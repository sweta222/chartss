function createBasic(a) {

const margin = { top: 20, right: 20, bottom: 60, left: 120 };
const graphWidth = 860 - margin.left - margin.right;
const graphHeight = 560 - margin.top - margin.bottom;

//append svg to the canvas
const svg = d3.select('.canvas')
  .append('svg')
   .attr('width', graphWidth + margin.left + margin.right)
   .attr('height', graphHeight + margin.top + margin.bottom);


//append group into svg
const graph = svg
  .append('g')
    .attr('width', graphWidth)
    .attr('height', graphHeight)
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

//appending x and y-axis-groups to the graph
const xAxisGroup = graph.append('g')
  .attr('transform', `translate(0, ${graphHeight})`);
  
const yAxisGroup = graph.append('g');
}
//export function createBasic(){ graphHeight, graphWidth };

 function drawAxes(p) {
    //create x and y-axis
    const xAxis = d3.axisBottom(x)
    const yAxis = d3.axisLeft(y)
      .ticks(4)
      .tickFormat(d => d  +  'tons' );

//call the axes
    xAxisGroup.call(xAxis);
    yAxisGroup.call(yAxis);

//styling axes texts
    xAxisGroup.selectAll('text')
     .attr('transform', 'rotate(-7)')
     .attr('text-anchor', 'middle')
     .style('font-size', '20px');

    yAxisGroup.selectAll('text')
     .style('font-size', '20px');
 }
 //export { drawAxes };