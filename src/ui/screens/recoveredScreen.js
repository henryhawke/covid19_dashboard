/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 18/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React from "react";
import {screenTitles} from "../contents/strings";
import RecoveredComponent from "../components/recovered/recoveredComponent";
import ScreenContainer from "../components/screenContainer";

function RecoveredScreen({ navigation }) {

    return (
        <ScreenContainer title={screenTitles.recovered} component={<RecoveredComponent/>} />
    );

}

export default RecoveredScreen;
