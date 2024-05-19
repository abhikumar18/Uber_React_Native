import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
import React from 'react';
import Maps from '../components/Maps';
import MapView,{Marker} from 'react-native-maps';
import NavigateCard from '../components/NavigateCard';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RideOptionsCard from '../components/RideOptionsCard';

const MapScreen = () => {
  const Stack = createStackNavigator(); 
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Maps />
      </View>

      <View style={tw`h-1/2`}>
         <Stack.Navigator>
            <Stack.Screen
               name="NavigateCard"
               component={NavigateCard}
               options={{
                headerShown:false,
               }}
            />
            <Stack.Screen
               name="RideOptionsCard"
               component={RideOptionsCard}
               options={{
                headerShown:false,
               }}
            />
         </Stack.Navigator>
      </View>
    </View>
  )
} 

export default MapScreen

const styles = StyleSheet.create({})