import React from 'react';
import { Text, View, Image } from 'react-native';

const MateriFlexBox = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#c8d6e5',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ backgroundColor: 'red', width: 60, height: 60 }}></View>
        <View style={{ backgroundColor: 'orange', width: 60, height: 60 }}></View>
        <View style={{ backgroundColor: 'yellow', width: 60, height: 60 }}></View>
        <View style={{ backgroundColor: 'green', width: 60, height: 60 }}></View>
        <View style={{ backgroundColor: 'blue', width: 60, height: 60 }}></View>
        <View style={{ backgroundColor: 'purple', width: 60, height: 60 }}></View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
        <Text>Beranda</Text>
        <Text>Video</Text>
        <Text>Playlist</Text>
        <Text>Komunitas</Text>
        <Text>Channel</Text>
        <Text>Tentang</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/77/94/44/779444512f5e50a03b70afec3e23328b.jpg',
          }}
          style={{ width: 100, height: 100, borderRadius: 50, marginRight: 14 }}
        />
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hafida Ningrum</Text>
          <Text>100 juta subscriber</Text>
        </View>
      </View>
    </View>
  );
};

export default MateriFlexBox;
