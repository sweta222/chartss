myBundle('.barchart', {
  type: 'bar',

  top: 20,
  right: 20,
  bottom: 60,
  left: 120,
  width: 860,
  height: 500,
  linestrokecolor: 'teal',
  lineArea: 'yellow',
  strokeWidth: 2,
  barColor: ['orange', 'pink', 'green', 'red'],
  yTextsize: '20px',
  xTextsize: '20px',
  xTransform: 'rotate(-7)',
  xTextAnchor: 'end',
  innerPadding: 0.3,
  outerPadding: 0.3,
  Heading: 'Browser statistics',
  HeadingSize: '30px',
  HeadingStyleXval: 350,
  HeadingStyleYval: 20,
  HeadingColor: 'red',
  barDist: 1,

  datasets: [
    {
      labelx: 'chrome',
      labely: 73.7
    },
    {
      labelx: 'I/E',
      labely: 4.9
    },
    {
      labelx: 'firefox',
      labely: 30.4
    },
    {
      labelx: 'safari',
      labely: 3.6
    }
  ]
});

myBundle('.columnchart', {
  type: 'column',

  top: 20,
  right: 20,
  bottom: 60,
  left: 120,
  width: 860,
  height: 500,
  barColor: ['orange', 'pink', 'green', 'red'],
  yTextsize: '20px',
  xTextsize: '20px',
  xTransform: 'rotate(-7)',
  xTextAnchor: 'end',
  innerPadding: 0.3,
  outerPadding: 0.3,
  Heading: 'Browser statistics',
  HeadingSize: '30px',
  HeadingStyleXval: 450,
  HeadingStyleYval: 20,
  HeadingColor: 'red',

  datasets: [
    {
      labelx: 'chrome',
      labely: 73.7
    },
    {
      labelx: 'I/E',
      labely: 4.9
    },
    {
      labelx: 'firefox',
      labely: 30.4
    },
    {
      labelx: 'safari',
      labely: 3.6
    }
  ]
});

myBundle('.linechart', {
  type: 'line',

  top: 20,
  right: 20,
  bottom: 60,
  left: 120,
  width: 760,
  height: 600,
  linestrokecolor: 'teal',
  lineArea: 'yellow',
  strokeWidth: 2,
  yTextsize: '20px',
  xTextsize: '20px',
  xTransform: 'rotate(-7)',
  xTextAnchor: 'middle',
  innerPadding: 0.5,
  outerPadding: 0.5,

  datasets: [
    {
      labelx: 'chrome',
      labely: 73.7
    },
    {
      labelx: 'I/E',
      labely: 4.9
    },
    {
      labelx: 'firefox',
      labely: 30.4
    },
    {
      labelx: 'safari',
      labely: 3.6
    }
  ]
});

myBundle('.piechart', {
  type: 'pie',

  top: 20,
  right: 20,
  bottom: 60,
  left: 120,
  width: 860,
  height: 500,
  xTextAnchor: 'middle',
  piecolors: ['#4daf4a', '#377eb8', '#ff7f00', '#984ea3'],
  innerRadius: 0,
  Heading: 'Browsers statistics',
  pieFontsize: '20px',
  HeadingStyle: 'sans-serif',
  HeadingStyleXval: 150,
  HeadingStyleYval: 2,
  HeadingSize: '30px',
  HeadingColor: 'red',
  LegendWidth: 20,
  LegendHeight: 20,
  LegendTextSize: '22px',
  LegTextYpost: 18,
  LegTextXpost: 18,

  datasets: [
    {
      labelx: 'chrome',
      labely: 73.7
    },
    {
      labelx: 'I/E',
      labely: 4.9
    },
    {
      labelx: 'firefox',
      labely: 30.4
    },
    {
      labelx: 'safari',
      labely: 3.6
    }
  ]
});
