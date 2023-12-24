import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { useEffect } from 'react';
import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { SignUpScreen } from '../screens/SignUpScreen';
import { SplashScreen } from '../screens/SplashScreen';
import { getSession } from '../utils/auth';
import { Routes } from './routes.types';

const Stack = createNativeStackNavigator();

export const RootNavigator: React.FC = () => {
    const navigation = useNavigation();

    useEffect(() => {
        getSession()
            .then((session) => {
                if (session) {
                    navigation.navigate(Routes.HomeScreen as never);
                }
                else {
                    navigation.navigate(Routes.LoginScreen as never);
                }
            })
            .catch(e => console.log(e));
    }, [])

    return (
        <Stack.Navigator initialRouteName={Routes.SplashScreen}>
            <Stack.Screen
                name={Routes.SplashScreen}
                component={SplashScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={Routes.LoginScreen}
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={Routes.SignUpScreen}
                component={SignUpScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={Routes.HomeScreen}
                component={HomeScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};
