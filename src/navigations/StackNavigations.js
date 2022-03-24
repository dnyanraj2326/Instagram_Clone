import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Reels from '../screens/Reels';
import Activity from '../screens/Activity'
import Profile from '../screens/Profile'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Status from '../components/Status';



const StackNavigations = () => {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    const BottomNav = () => {
        return(
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarHideOnKeyboard: true,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        height: 60,
                    },
                    tabBarIcon: ({ focused, size, color }) => {
                        let iconName;
                        if (route.name === "Home") {
                            iconName = focused ? "home-sharp" : "home-outline";
                            size = focused ? size+2 :size;
                        } else if (route.name === "Search") {
                            iconName = focused ? "search" : "search-outline";
                            size = focused ? size+2 :size;
                        }else if (route.name === "Reels") {
                            iconName = focused ? "caret-forward-circle" : "caret-forward-circle-outline";
                            size = focused ? size+2 :size;
                        }else if (route.name === "Activity") {
                            iconName = focused ? "heart" : "heart-outline";
                            size = focused ? size+2 :size;
                        }else if (route.name === "Profile") {
                            iconName = focused ? "person-circle" : "person-circle-outline";
                            size = focused ? size+2 :size;
                        }

                        return <Ionicons name={iconName} size={size} color={color} />
                    }
            })}
            >
                <Tab.Screen name='Home' component={Home} options={{headerShown:false}} />
                <Tab.Screen name='Search' component={Search} options={{headerShown:false}}/>
                <Tab.Screen name='Reels' component={Reels} options={{headerShown:false}}/>
                <Tab.Screen name='Activity' component={Activity} />
                <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
        )
    }
    return (
        
        <Stack.Navigator>
          <Stack.Screen name="Bottom" component={BottomNav} options={{headerShown: false}}/>
          <Stack.Screen name="Status" component={Status} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default StackNavigations
