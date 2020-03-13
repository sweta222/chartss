Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 27;
Chart.defaults.global.defaultFontColor = '#777';

//bar chart creation
let drawBar = document.getElementById("barchart").getContext("2d");
let barChart = new Chart(drawBar, {
    type: 'bar',
    responsive: 'false',
    data: {
      labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
      datasets: [{
        label: 'density of planets (kg/m3)',
        data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638],
        backgroundColor: 'orange'
      }]
    },
    options: {
      title: {
        display: true,
        text: 'planets data',
        fontSize: 30
      }
    }
});

//line chart creation 
let drawLine = document.getElementById("linechart").getContext('2d');
let lineChart = new Chart(drawLine, {
  type: 'line',
  responsive: 'false',
  data: {
    labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
    datasets: [{
      label: 'car speed (mph)',
      data: [0, 59, 75, 20, 20, 55, 40],
      backgroundColor: 'grey'
    }]
  },
  options: {
    title: {
      display: true,
      text: 'speed data',
      fontSize: 30
    }
  }
});