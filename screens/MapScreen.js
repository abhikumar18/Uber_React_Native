import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
import React from 'react';
import Maps from '../components/Maps';
import MapView,{Marker} from 'react-native-maps';

const MapScreen = () => {
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Maps />
      </View>

      <View style={tw`h-1/2`}></View>
    </View>
  )
} 

export default MapScreen

const styles = StyleSheet.create({})