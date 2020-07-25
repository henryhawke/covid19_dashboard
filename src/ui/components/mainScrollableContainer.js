/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 19/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React from 'react'
import {styles} from "../theme/style";
import {ScrollView, View} from "react-native";

function MainScrollableContents(props) {
    return (
        <View style={[styles.rootContainer]}>
            <ScrollView>
                <View style={[styles.scrollableContainer]}>

                    {props.content}

                </View>
            </ScrollView>
        </View>
    );
}

export default MainScrollableContents;