/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 29/07/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import Records from "./dataset";

let dataToReturn = {
    deathsRatio: 0,
    swabTrendAbsolute: [],
    testedCasesTrendAbsolute: [],
    percentagePositiveTrend: [],
};

const SwabData = (data) => {

    if(data === undefined){
        data = Records.getRecords();
    }

    if(data !== null){
        let d = data[data.length - 1];

        dataToReturn.positiveRatio = (Math.round(d['totale_casi'] / d['casi_testati'] * 100 * 100) / 100).toFixed(2);

        if( dataToReturn.swabTrendAbsolute.length === 0){
            for (let i=1; i< data.length; i+=5){
                dataToReturn.swabTrendAbsolute.push(data[i]['tamponi']);
                dataToReturn.testedCasesTrendAbsolute.push(data[i]['casi_testati'] === 'null' ? 0 : data[i]['casi_testati']);
                dataToReturn.percentagePositiveTrend.push( ((data[i]['casi_testati'] === 'null' ? 1 : data[i]['casi_testati']) - (data[i-1]['casi_testati'] === 'null' ? 0 : data[i-1]['casi_testati'])) / data[i]['nuovi_positivi']);
            }
        }

    }
    return dataToReturn;
};


export default SwabData;