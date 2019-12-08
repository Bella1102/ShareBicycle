import React, { Component } from 'react';
import { Card } from 'antd';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import chartTheme from './chartTheme';



class BarChart extends Component{

    UNSAFE_componentWillMount(){
        echarts.registerTheme('barChartTheme', chartTheme);
    }

    getOption1 = () => {
        let option = {
            title: { text: 'User Ride Order' },
            tooltip: { trigger: 'axis' },
            xAxis: { data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] },
            yAxis: { type: 'value' },
            series:[
                {
                    name: 'Order Quantity',
                    type: 'bar',
                    data: [1000, 2000, 1500, 3000, 2000, 1200, 800]
                }
            ]
        }
        return option;
    }

    getOption2 = () => {
        let option = {
            title: { text: 'User Ride Order' },
            legend:{ data: ['OFO', 'Mobike', 'Blue'] },
            tooltip: { trigger: 'axis' },
            xAxis: { data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] },
            yAxis: { type: 'value' },
            series: [
                {
                    name: 'OFO',
                    type: 'bar',
                    data: [2000, 3000, 5500, 7000, 8000, 12000, 20000]
                }, {
                    name: 'Mobike',
                    type: 'bar',
                    data: [1500, 3000, 4500, 6000, 8000, 10000, 15000]
                }, {
                    name: 'Blue',
                    type: 'bar',
                    data: [1000, 2000, 2500, 4000, 6000, 7000, 8000]
                }
            ]
        }
        return option;
    }

    render(){
        return (
            <div>
                <Card title="bar chart 1">
                    <ReactEcharts option={this.getOption1()} theme="barChartTheme" style={{height: 500}}/>
                </Card>
                <Card title="bar chart 2" style={{marginTop:10}}>
                    <ReactEcharts option={this.getOption2()} theme="barChartTheme" style={{height: 500}} />
                </Card>
            </div>
        );
    }
}

export default BarChart;