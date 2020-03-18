draw('.canvas', 
{"type": "bar",

width:860,
height:500,
linestrokecolor: 'teal',
lineArea: 'yellow',
strokeWidth: 2,
barColor: 'grey',
yTextsize: '20px',
xTextsize: '20px',
xTransform: 'rotate(-7)',
xTextAnchor: 'middle',
innerPadding: 0.5,
outerPadding: 0.5,

"datasets":[
    {
    "labelx": "compost",
    "labely": 200
    },
    {
    "labelx": "paper and card",
    "labely": 600
    },
    {
    "labelx": "glass",
    "labely": 300
    },
    {
    "labelx": "co-mingled material",
    "labely": 900
    }
]

}
);