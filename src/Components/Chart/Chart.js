import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {

   const ValueArray = props.dataPoints.map(dataPoint => dataPoint.value);
	const Max = Math.max(...ValueArray)
 
 return (
 	<div className = 'chart'> 

     {props.dataPoints.map(dataPoint => <ChartBar value = {dataPoint.value} maxValue = {Max} label = {dataPoint.label} key = {dataPoint.label} /> )}
 	</div>
 	)
}

export default Chart;