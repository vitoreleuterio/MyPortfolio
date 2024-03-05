import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './Style';
import MyProfile from '../../../assets/MyProfile.png'
export function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Image source={MyProfile} width={200} height={200} style={{borderRadius: 100, marginTop: 100}}/>
          <Text style={styles.title}>Vitor Augusto Eleutério</Text>
          <Text style={styles.subTitle}>19 Anos</Text>
          <Text style={[styles.subTitle, {color: '#a1a1a1', marginTop: 10}]}>Desenvolvedor</Text>
        </View>

      <View style={styles.options}>
        <TouchableOpacity style={[styles.buttons, {backgroundColor: '#0977B5'}]}>
        <Text style={{color: '#fff', textAlign: 'center'}}>LinkedIn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttons, {backgroundColor: '#000'}]}>
        <Text style={{color: '#fff', textAlign: 'center'}}>GitHub</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}