/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 31/08/20
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import {RegionList} from "../ui/contents/locationsList";
import Records from "./dataset";
import { EventRegister } from 'react-native-event-listeners'
import DataRouter from "./dataRouter";


let SelectedLocation ={

    index: 0,

    setLocation(index){
        if(index >= 0 && index <= RegionList.length){
            this.index = index;
            Records.clearSingleRegionData();
            Records.getRecords();
            DataRouter.cleanData();
            DataRouter.refreshData();
            EventRegister.emit('locationChanged', 'it works!!!');
        }
    },

    getLocation(){
        return this.index;
    },

};

export default SelectedLocation;