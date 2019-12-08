import React, { Component } from 'react';
import { Card } from 'antd';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import chartTheme from './chartTheme';



class LineChart extends Component {

    UNSAFE_componentWillMount() {
        echarts.registerTheme('lineChartTheme', chartTheme);
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
                    type: 'line',
                    data: [1000, 2000, 1500, 3000, 2000, 1200, 800]
                }
            ]
        }
        return option;
    }
    
    getOption2 = () => {
        let option = {
            title: { text: 'User Ride Order' },
            tooltip: { trigger: 'axis' },
            legend: { data:['OFO Order Quantit', 'Mobike Order Quantity'] },
            xAxis: { data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] },
            yAxis: { type: 'value' },
            series: [
                {
                    name: 'OFO Order Quantity',
                    type: 'line',
                    data: [ 1200, 3000, 4500, 6000, 8000, 12000, 20000 ]
                },
                {
                    name: 'Mobike Order Quantity',
                    type: 'line',
                    data: [ 1000, 2000, 5500, 6000,  8000, 10000, 12000 ]
                }
            ]
        }
        return option;
    }

    getOption3 = () => {
        let option = {
            title: { text: 'User Ride Order' },
            tooltip: { trigger: 'axis' },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ]
            },
            yAxis: { type: 'value' },
            series: [
                {
                    name: 'Order Quantity',
                    type: 'line',
                    data: [ 1000, 2000, 1500, 3000, 2000, 1200, 800 ],
                    areaStyle: {}
                }
            ]
        }
        return option;
    }

    render() {
        return (
            <div>
                <Card title="line chart 1">
                    <ReactEcharts option={this.getOption1()} theme="lineChartTheme" style={{ height: 500 }} />
                </Card>
                <Card title="line chart 2" style={{ marginTop: 10 }}>
                    <ReactEcharts option={this.getOption2()} theme="lineChartTheme" style={{ height: 500 }} />
                </Card>
                <Card title="line chart 3" style={{ marginTop: 10 }}>
                    <ReactEcharts option={this.getOption3()} theme="lineChartTheme" style={{ height: 500 }} />
                </Card>
            </div>
        );
    }
}


export default LineChart;