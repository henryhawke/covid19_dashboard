/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 05/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import Records from "../dataset";
import {chartTitles} from "../../ui/contents/strings";

let dataToReturn = {
    labels: [{title: chartTitles.deathRegionTotal, value: 'total'},],
    regions: [],
    total: [],
};

const DeadRegionData = (data) => {

    data = Records.getRegionRecords();

    if (data !== undefined) {

        if (dataToReturn.total.length === 0) {
            for (let i = data.length - 21; i < data.length; i ++) {
                dataToReturn.regions.push(data[i]['denominazione_regione']);
                dataToReturn.total.push(data[i]['deceduti']);
            }
        }
    }

    return dataToReturn;
};


export default DeadRegionData;