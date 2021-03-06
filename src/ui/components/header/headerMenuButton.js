/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 18/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import React from 'react';
import {DrawerActions, useNavigation} from "@react-navigation/native";
import {View, Platform} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';
import Colors from "../../theme/colors";
import {Appearance} from "react-native-appearance";

let colorScheme = Appearance.getColorScheme();

const HeaderLeft = () => {
    const navigation = useNavigation();

    return (
        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
                onPress={() => {
                    navigation.dispatch(DrawerActions.openDrawer());
                }}
                style={{marginLeft: Platform.OS === 'ios' ? 25 : 25}}>
                <Ionicons name="ios-menu" size={32} color={colorScheme === 'dark' ? Colors.darkMode_basic : Colors.basic} />
            </TouchableOpacity>
        </View>
    );
};

export default HeaderLeft;
