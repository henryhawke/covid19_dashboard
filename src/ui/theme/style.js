/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 18/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import {StyleSheet} from "react-native";
import Colors from "./colors";
import LegendColors from "./legendColors"
import {dynamicDimens} from "./dimens";


export const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.basicTransparent,
    },
    rootContainer: {
        flex: 1,
        alignItems: 'flex-start',
        alignContent: 'space-around',
        justifyContent: 'flex-start',
        backgroundColor: Colors.basicElevation,
    },
    scrollableContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 55,
    },
    loading: {
        backgroundColor: Colors.basicElevation,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.basicElevation,
        alignItems: 'center',
        justifyContent: 'center',
    },
    /*
     *  HeaderStyle
     *
     */
    header: {
        borderBottomColor: 'transparent',
    },
    headerTitle: {
        color: '#fff'
    },
    headerShadow: {
        shadowColor: Colors.basicShadow,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.4,
        shadowRadius: 13.16,
        elevation: 20,
    },
    /*
     *  Card items
     *  3 sizes:
     *      - big
     *      - medium
     *      - small
     */
    cardGeneric: {
        position: 'relative',
        borderRadius:20,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        margin: 10,
        height: 'auto',
        padding: 20,
        backgroundColor: Colors.basicElevation,
        borderColor: Colors.mainTransparent,
        borderWidth: 0.5,
        elevation: 20,
    },
    cardShadow: {
        shadowColor: Colors.basicShadow,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 20,
    },
    cardBig: {
        width: dynamicDimens.cardBig
    },
    cardMedium: {
        width: dynamicDimens.cardMedium
    },
    cardSmall: {
        width: dynamicDimens.cardSmall
    },
    /*
     *  Indicators
     */
    indicatorTitle: {
        fontSize: 22,
        fontWeight: "700",
        color: '#fff'
    },
    indicatorValue: {
        textAlign: 'center',
    },
    indicatorValueBold: {
        marginTop:20,
        fontSize: 22,
        fontWeight: "900",
    },
    indicatorValueIncr: {
        marginTop: 5,
        marginBottom: 10,
        fontSize: 14,
        fontStyle: 'italic',
    },
    indicatorLight: {
        color: '#fff'
    },
    indicatorOrange: {
        color: LegendColors.yellow
    },
    indicatorGreen: {
        backgroundColor: LegendColors.green
    },
    indicatorGrey: {
        color: LegendColors.grey
    },
    indicatorRed: {
        color: LegendColors.red
    },
    /*
     *  Chart
     */
    chartTitle: {
        fontSize: 18,
        fontWeight: "700",
    },
    chartDescription: {
        fontSize: 12,
        fontStyle: 'italic',
        textAlign: 'center',
        marginTop: 20,
    },
    infoDescription: {
        fontSize: 16,
        color: Colors.basic,
        textAlign: 'left',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,

    },
    chartBigValue: {
        width: '100%',
        textAlign: 'center',
        fontSize: 30,
        marginTop: 30,
        marginBottom: 30,
    },
    /*
     *  Chart legend
     *
     */
    legendExternalContainer: {
        flex: 1,
        margin: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    legendContainer: {
        margin: 10,
        position: 'relative',
        flexDirection: 'row'
    },
    legendColorSquare: {
        width: 20,
        height:20,
        borderRadius: 5,
    },
    legendTitle: {
        marginLeft: 10
    },
    /*
     *  Notes
     *
     */
    notesContainer: {
        bottom: 0,
        position:'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        backgroundColor: Colors.basic,
        paddingTop: 15,
        paddingBottom: 15,
        borderColor: 'transparent',
        borderBottomColor: Colors.mainTransparent,
        borderWidth: 0.5,
    },
});
