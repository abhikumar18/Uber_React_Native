import { StyleSheet, Text, View, SafeAreaView,Image,ScrollView } from 'react-native'
import React from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";

const HomeScreen = ({}) => {
    console.log('Google Maps API Key:', GOOGLE_MAPS_APIKEY);
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5`}>
            <Image 
                source ={{
                    uri:"https://links.papareact.com/gzs"
                }}
                style={{width:100,height:100,resizeMode:"contain"}}
            />
            <ScrollView>
            <GooglePlacesAutocomplete 
              placeholder='Where From?'
              style={{
                container:{
                    flex:0
                },
                textInput:{
                    fontSize:18,
                },
              }}
              query={{
                key:GOOGLE_MAPS_APIKEY,
                language:"en",
              }}
              enablePoweredByContainer={false}
              nearbyPlacesAPI='GooglePlacesSearch'
              debounce={400}
            />
            </ScrollView>
            <NavOptions />
         </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text:{
        color:"blue",
    }
})