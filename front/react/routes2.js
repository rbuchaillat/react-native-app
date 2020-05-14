import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerContent} from './components/DrawerContent';
import { Mainpage } from './components/Mainpage';

const Drawer = createDrawerNavigator();

export const RootNavigatorr = () => {
    return (
        <Drawer.Navigator
            drawerContent={({navigation}) => (
            <DrawerContent navigation={navigation} />
        )}>
            <Drawer.Screen name="Mainpage" component={Mainpage} />
        </Drawer.Navigator>
    );
}
