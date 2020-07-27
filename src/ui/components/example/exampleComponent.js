/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 23/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React, {Component} from 'react';
import {Text, View} from "react-native";
import {styles} from "../../theme/style";
import MainScrollableContents from "../mainScrollableContainer";
import {chartTitles, dataDescription} from "../../contents/strings";
import SvgExample from "../../../drawings/new_cases_charts/newCaseLine";
import latestUpdateData from "../../../logic/latestUpdateData";

class ExampleComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <MainScrollableContents
                content={
                    <>
                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                            <Text style={[styles.chartTitle, styles.indicatorOrange]}>{chartTitles.currentPositive}</Text>
                            <Text style={[styles.indicatorValue, styles.indicatorValueBold, styles.indicatorOrange]}>{latestUpdateData().totalCurrentCases}</Text>
                            <Text style={[styles.indicatorValue, styles.indicatorValueIncr,  styles.indicatorOrange]}>{latestUpdateData().currentCasesVariation}</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                            <Text style={[styles.chartTitle, styles.indicatorGreen]}>{chartTitles.recovered}</Text>
                            <Text style={[styles.indicatorValue, styles.indicatorValueBold, styles.indicatorGreen]}>{latestUpdateData().totalRecovered}</Text>
                            <Text style={[styles.indicatorValue, styles.indicatorValueIncr, styles.indicatorGreen]}>{latestUpdateData().recoveredVariation}</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                            <Text style={[styles.chartTitle, styles.indicatorGrey]}>{chartTitles.died}</Text>
                            <Text style={[styles.indicatorValue, styles.indicatorValueBold, styles.indicatorGrey]}>{latestUpdateData().totalDeaths}</Text>
                            <Text style={[styles.indicatorValue, styles.indicatorValueIncr,  styles.indicatorGrey]}>{latestUpdateData().deathsVariation}</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                            <Text style={[styles.chartTitle, styles.indicatorRed]}>{chartTitles.totalCases}</Text>
                            <Text style={[styles.indicatorValue, styles.indicatorValueBold, styles.indicatorRed]}>{latestUpdateData().totalCases}</Text>
                            <Text style={[styles.indicatorValue, styles.indicatorValueIncr,  styles.indicatorRed]}>{latestUpdateData().newCases}</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardSmall]}>
                            <Text>Card torta</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text>Curve</Text>
                            {/*<LineChartExample />*/}
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text>Aree sottese percentuale</Text>
                        </View>

                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text>Aree sottese assoluto</Text>
                        </View>


                        <View style={[styles.cardGeneric, styles.cardShadow, styles.cardBig]}>
                            <Text style={styles.chartTitle}>{chartTitles.totalCasesCurve}</Text>
                            <SvgExample />
                            <Text style={styles.chartDescription}>{dataDescription.totalCases}</Text>
                        </View>
                    </>
                }
            />
        )
    }

}

export default ExampleComponent;