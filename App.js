/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 18/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Dimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, useNavigation, DrawerActions} from '@react-navigation/native';
import {dimens} from "./src/theme/dimens";
import {styles} from "./src/theme/style";
import Colors from "./src/theme/colors";
import {screenTitles} from "./src/contents/strings";

/* Screens Import */
import HomeScreen from "./src/screens/homeScreen";
import LatestUpdateResumeScreen from "./src/screens/latestUpdateResumeScreen";
import NewCasesScreen from "./src/screens/newCasesScreen";
import RecoveredScreen from "./src/screens/recoveredScreen";
import DiedScreen from "./src/screens/diedScreen";
import CurrentPositiveScreen from "./src/screens/currentPositiveScreen";
import SwabsResumeScreen from "./src/screens/swabsScreen";


const Drawer = createDrawerNavigator();

export default function App() {

    const dimensions = Dimensions.get('window').width;

    const isLargeScreen = dimensions >= dimens.largeScreen;

    return (
        <NavigationContainer style={styles.root}>
            <Drawer.Navigator
                initialRouteName="Home"
                openByDefault
                drawerContentOptions={{
                    activeTintColor: Colors.main,
                    activeBackgroundColor: Colors.mainTransparent,
                }}
                drawerType={isLargeScreen ? 'permanent' : 'back'}
                drawerStyle={isLargeScreen ? null : {width: '100%'}}
                overlayColor="transparent">

                <Drawer.Screen name={screenTitles.home} component={HomeScreen}/>
                <Drawer.Screen name={screenTitles.latestUpdateResume} component={LatestUpdateResumeScreen}/>
                <Drawer.Screen name={screenTitles.newCases}  component={NewCasesScreen}/>
                <Drawer.Screen name={screenTitles.recovered} component={RecoveredScreen}/>
                <Drawer.Screen name={screenTitles.died} component={DiedScreen} />
                <Drawer.Screen name={screenTitles.currentPositive} component={CurrentPositiveScreen}/>
                <Drawer.Screen name={screenTitles.swab} component={SwabsResumeScreen} />

            </Drawer.Navigator>
        </NavigationContainer>
    );
}







