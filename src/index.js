import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import Dygraph from 'dygraphs';

var ng = new Dygraph(document.getElementById("graphdiv"),"sample-data.json", {
labels:["Date","Tampines Ave10 (Stn 40)"],
title: 'Pressure Transient(s)',
ylabel: "Pressure (meters)",
xlabel:"Time",
gridLineWidth:0.1,
connectSeparatedPoints:true,
axes:{x:{"axisLabelFontSize":9}},
});

ReactDOM.render( ng,document.getElementById('graphdiv')
// var reactDygraphs = require("react-dygraphs")
);
