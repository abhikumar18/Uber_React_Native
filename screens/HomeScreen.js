import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination,setOrigin } from '../slices/navSlice'
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
        />
        <GooglePlacesAutocomplete
          placeholder='Where From?'
          styles={{
            container: {
              flex: 0,
              zIndex: 1,
            },
            textInput: {
              fontSize: 18,
              borderWidth: 1,
              borderColor: '#ddd',
              padding: 10,
              borderRadius: 5,
              backgroundColor: '#fff',
            },
            listView: {
              backgroundColor: '#fff',
              zIndex: 2,
            },
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          onPress={(data, details = null) => {
            dispatch(
                setOrigin({
                    location:details.geometry.location,
                    description:data.description
                })
            );
            dispatch(setDestination(null));
          }}
          onFail={(error) => {
            console.error('Google Places Autocomplete Error:', error);
          }}
          fetchDetails={true}
          enablePoweredByContainer={false}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        />
        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: 'blue',
  },
});
