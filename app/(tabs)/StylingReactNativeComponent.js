import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ideapad from './ideapad.png';

const StylingReactNativeComponent = () => {
  return (
    <View>
        <Text style={style.text}>Styling Component</Text>
        <View style={{width: 100, height: 100, backgroundColor: 'pink', borderWidth: 2, borderColor: 'red', marginTop: 20, marginLeft: 20, marginBottom: 20}}></View>
    <View style={{padding: 12, backgroundColor: 'brown', width: 212,}}>
        <Image source={ideapad} style={{width:177, height: 107, borderRadius: 8}}></Image>
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>New Lenovo Ideapad Slim 3</Text>
        <Text style={{fontSize: 12, fontWeight:'bold', color: 'orange', marginTop: 12}}>Rp.16.799.000</Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>Pati</Text>
        <View style={{backgroundColor: 'green', paddingVertical: 6, borderRadius: 25,
            marginTop: 20
        }}>
            <Text style={{fontSize: 14, fontWeight:'600', color: 'white', textAlign: 'center'}}>BELI</Text>
        </View>
    </View>
    </View>
  );
};

const style = StyleSheet.create({
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'purple',
        marginLeft: 20,
        marginTop: 40,
    }
})
export default StylingReactNativeComponent;
