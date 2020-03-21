//method1
// Chart.defaults.global.defaultFontFamily = 'Lato';
// Chart.defaults.global.defaultFontSize = 27;
// Chart.defaults.global.defaultFontColor = '#777';

// //bar chart creation
// let drawBar = document.getElementById("barchart").getContext("2d");
// let barChart = new Chart(drawBar, {
//     type: 'bar',
//     responsive: 'false',
//     data: {
//       labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
//       datasets: [{
//         label: 'density of planets (kg/m3)',
//         data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638],
//         backgroundColor: 'orange'
//       }]
//     },
//     options: {
//       title: {
//         display: true,
//         text: 'planets data',
//         fontSize: 30
//       }
//     }
// });

//method2
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 27;
Chart.defaults.global.defaultFontColor = '#777';

let data = {
  Mercury: 5427,
  Venus: 5243,
  Earth: 5514,
  Mars: 3933,
  Jupiter: 1326,
  Saturn: 687,
  Uranus: 1271,
  Neptune: 1638
};

const drawBar = document.getElementById('barchart');

let barChart = new Chart(drawBar, {
  type: 'bar',
  data: {
    labels: Object.keys(data),
    datasets: [
      {
        label: 'density of planets (kg/m3)',
        backgroundColor: 'orange',
        data: Object.values(data)
      }
    ]
  }
});
