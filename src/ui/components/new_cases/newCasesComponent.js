/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 19/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react';
import {Text, View} from "react-native";
import {styles} from "../../theme/style";
import MainScrollableContents from "../mainScrollableContainer";
import {chartTitles, dataDescription} from "../../contents/strings";
import CardTotalCases from "../../../data_representation/resume_cards/cardTotalCases";
import LegendColors from "../../theme/legendColors";
import NewCasesData from "../../../logic/newCasesData";
import MyLineChart from "../../../data_representation/charts/lineChart";
import StackedAreaChart from "../../../data_representation/charts/stackedAreaChart";
import TotalCasesRepartitionData from "../../../logic/totalCasesRepartitionData";
import {EventRegister} from "react-native-event-listeners";

let dataChangedListener;

class NewCasesComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { data: NewCasesData(), color: LegendColors.red}
    }

    componentWillMount() {
        dataChangedListener = EventRegister.addEventListener('locationChanged', (data) => {
            console.log('Changed');
            this.setState({data: NewCasesData()});
        });
    }

    componentWillUnmount() {
        EventRegister.removeEventListener(dataChangedListener);
    }

    render() {
        return (
            <MainScrollableContents
                content={
                    <>
                        <CardTotalCases />

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                            <Text style={[styles.chartTitle]}>{chartTitles.r0value}</Text>
                            <Text style={[styles.chartTitle, styles.chartBigValue]}>{this.state.data.r0}</Text>
                            <Text style={styles.chartDescription}>{dataDescription.r0}</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text style={styles.chartTitle}>{chartTitles.totalCasesCurve}</Text>
                            <MyLineChart color={this.state.color} data={this.state.data.newCasesTrendAbsolute} />
                            <Text style={styles.chartDescription}>{dataDescription.totalCases}</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text style={styles.chartTitle}>{chartTitles.newCasesCurve}</Text>
                            <MyLineChart color={this.state.color} data={this.state.data.newCasesTrendDayValue} />
                            <Text style={styles.chartDescription}>{dataDescription.newCases}</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text style={styles.chartTitle}>{chartTitles.r0Curve}</Text>
                            <MyLineChart color={this.state.color} data={this.state.data.r0Trend} />
                            <Text style={styles.chartDescription}>{dataDescription.r0}</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text style={styles.chartTitle}>{chartTitles.totalCasesRepartion}</Text>
                            <StackedAreaChart
                                color={LegendColors.red}
                                keyValues={['death', 'current', 'recovered']}
                                legend={[chartTitles.recovered, chartTitles.currentPositive, chartTitles.died]}
                                data={TotalCasesRepartitionData().repartition}/>
                            <Text style={styles.chartDescription}>{dataDescription.totalCasesRepartition}</Text>
                        </View>
                    </>
                }
            />
        )
    }

}

export default NewCasesComponent;
