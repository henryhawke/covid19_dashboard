/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 18/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */


import {getCardBigWidth, getCardMediumWidth, getCardSmallWidth, getChartFullWidth} from "../../utils/dimensionsUtils";

export const dimens = {
    verySmallScreen: 400,
    largeScreen: 768,
    drawerWidth: 250,
    chartMargin: 55,
    headerHeight: 74,
    headerLargeHeight: 90,
    cardMargin: 8,
    cardMarginSmallScreen: 20,
    pieChartRadius: 100,
    lineChartHeight: 220,

};

export const dynamicDimens = {
    cardSmall: getCardSmallWidth(),
    cardMedium: getCardMediumWidth(),
    cardBig: getCardBigWidth(),
    chartFullWidth: getChartFullWidth(),
}
