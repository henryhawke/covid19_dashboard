/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 03/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import { Chip } from 'react-native-paper';
import {StackedBarChart} from "react-native-chart-kit";
import {dimens, dynamicDimens} from "../../ui/theme/dimens";
import Colors from "../../ui/theme/colors";
import {hexToRgb} from "../../utils/colorConverter";
import intervalSelectorFilter from "../../ui/contents/intervalSelectorData";
import DateLabels from "../../logic/retrieveTimeLabels";

export default class MyStackedBarChart extends Component{

    constructor(props) {
        super(props);
        this.state = {
            _1W: true,
            _1M: false,
            _MAX: false,
            data: this.props.data.slice(Math.max(this.props.data.length - 7, 0)),
            filter: 7,
            labels: DateLabels(7).dateLabels
        };
    }

    activateFilter(filter){
        this.setState({_1W: false, _1M: false, _MAX: false});
        this.setState({[filter.state]: true}, function() {

            this.setState({filter: filter.field }, function () {
                if(this.state.filter === -1){
                    this.setState({data: this.props.data}, function () {
                        this.setState({labels: DateLabels(this.state.filter).dateLabels});
                    });
                } else {
                    this.setState({data: this.props.data.slice(Math.max(this.props.data.length - this.state.filter, 0))}, function () {
                        this.setState({labels: DateLabels(this.state.filter).dateLabels});
                    });
                }
            });
        });
        this.forceUpdate();
    }

    returnState(stateString){
        switch (stateString) {
            case '_1W':
                return this.state._1W;
            case '_1M':
                return this.state._1M;
            case '_MAX':
                return this.state._MAX;
        }
    }



    render() {

        const colorRGB = hexToRgb(this.props.color);
        return (
            <View style={{marginTop: 20}}>

                <View style={{marginTop: 8}}>
                    <FlatList
                        style={{marginBottom: 20}}
                        data={intervalSelectorFilter}
                        renderItem={({item}) => (
                            <Chip
                                onPress={() => this.activateFilter(item)}
                                selected={this.state.filter === item.state.field}
                                textStyle={{
                                    color: this.returnState(item.state) ? '#fff' : Colors.basic,
                                    fontWeight:  this.returnState(item.state) ? '700' :'400'
                                }}
                                style={[
                                    {
                                        backgroundColor: this.returnState(item.state) ? this.props.color : this.props.color.basicTransparent,
                                        marginRight: 5,
                                    }]}>
                                {item.name}
                            </Chip>
                        )}
                        numColumns={1}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>

                <StackedBarChart
                    width={dynamicDimens.chartFullWidth}
                    data={{
                        labels: this.state.labels,
                        legend: this.props.legend,
                        data: [
                            [60, 60, 60],
                            [60, 60, 60],
                            [60, 60, 60],
                            [60, 60, 60],
                            [60, 60, 60],
                            [30, 30, 60]

                        ],
                        barColors: [
                            `rgba(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b}, 0.9)`,
                            `rgba(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b}, 0.6)`,
                            `rgba(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b}, 0.3)`,
                        ]
                    }}
                    height={dimens.lineChartHeight}
                    chartConfig={{
                        backgroundColor: Colors.basicElevation,
                        backgroundGradientFrom: Colors.basicElevation,
                        backgroundGradientTo: Colors.basicElevation,
                        decimalPlaces: this.props.decimalPlaces === undefined ? 0 : this.props.decimalPlaces,
                        color: (opacity = 1) => `rgba(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b}, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                        propsForDots: {
                            r: "2",
                            strokeWidth: "0",
                            stroke: Colors.basicElevation
                        }
                    }}
                    yAxisLabel=""
                    yAxisSuffix="%"
                />


            </View>

        );
    }
}