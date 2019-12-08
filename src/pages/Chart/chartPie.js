import React, { Component } from 'react';
import { Card } from 'antd';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import chartTheme from './themeLight';



class PieChart extends Component {

    UNSAFE_componentWillMount() {
        echarts.registerTheme('pieChartTheme', chartTheme);
    }

    getOption1 = () => {
        let option = {
            title: { text: 'User Ride Order' },
            legend:{
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
            },
            tooltip:{ trigger: 'item', formatter:'{a}<br/>{b}:{c}({d}%)' },
            series:[
                {
                    name: 'Order Quantity',
                    type: 'pie',
                    data:[
                        { value: 1000, name: 'Monday' },
                        { value: 1000, name: 'Tuesday' },
                        { value: 2000, name: 'Wednesday' },
                        { value: 1500, name: 'Thursday' },
                        { value: 3000, name: 'Friday' },
                        { value: 2000, name: 'Saturday' },
                        { value: 1200, name: 'Sunday' }
                    ]
                }
            ]
        }
        return option;
    }

    getOption2 = () => {
        let option = {
            title: { text: 'User Ride Order' },
            legend: {
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
            },
            tooltip: { trigger: 'item', formatter: '{a}<br/>{b}:{c}({d}%)' },
            series: [
                {
                    name: 'Order Quantity',
                    type: 'pie',
                    radius: ['50%', '80%'],
                    center: ['50%', '60%'],
                    data:[
                        { value: 1000, name: 'Monday' },
                        { value: 1000, name: 'Tuesday' },
                        { value: 2000, name: 'Wednesday' },
                        { value: 1500, name: 'Thursday' },
                        { value: 3000, name: 'Friday' },
                        { value: 2000, name: 'Saturday' },
                        { value: 1200, name: 'Sunday' }
                    ]
                }
            ]
        }
        return option;
    }

    getOption3 = () => {
        let option = {
            title: { text: 'User Ride Order' },
            legend: {
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
            },
            tooltip: { trigger: 'item', formatter: '{a}<br/>{b}:{c}({d}%)' },
            series: [
                {
                    name: 'Order Quantity',
                    type: 'pie',
                    data:[
                        { value: 1000, name: 'Monday' },
                        { value: 1000, name: 'Tuesday' },
                        { value: 2000, name: 'Wednesday' },
                        { value: 1500, name: 'Thursday' },
                        { value: 3000, name: 'Friday' },
                        { value: 2000, name: 'Saturday' },
                        { value: 1200, name: 'Sunday' }
                    ].sort((a, b) => {
                        return a.value - b.value;
                    }),
                    roseType:'radius',
                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ]
        }
        return option;
    }

    render() {
        return (
            <div>
                <Card title="pie chart 1">
                    <ReactEcharts option={this.getOption1()} theme="pieChartTheme" style={{ height: 500 }} />
                </Card>
                <Card title="pie chart 2" style={{ marginTop: 10 }}>
                    <ReactEcharts option={this.getOption2()} theme="pieChartTheme" style={{ height: 600 }} />
                </Card>
                <Card title="pie chart 3" style={{ marginTop: 10 }}>
                    <ReactEcharts option={this.getOption3()} theme="pieChartTheme" style={{ height: 500 }} />
                </Card>
            </div>
        );
    }
}

export default PieChart;