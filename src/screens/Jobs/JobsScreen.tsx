import React from 'react';
import {Text, View } from 'react-native';

import { styles } from './Style';

export function JobsScreen() {
  return (
    <View style={styles.container}>

     <View style={styles.cardJob}>
         <Text style={styles.title}>Estagiário em  Desenvolvimento de Sistemas</Text>
         <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text style={styles.textSkill}>PHP</Text>
            <Text style={styles.textSkill}>Java Script</Text>
            <Text style={styles.textSkill}>Angular </Text>
            <Text style={styles.textSkill}>Type Script </Text>
            <Text style={styles.textSkill}>Sql</Text>
         </View>
     </View>

     <View style={styles.cardJob}>
         <Text style={styles.title}>Estagiário em Programação de Sistemas</Text>
         <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text style={styles.textSkill}>PHP</Text>
            <Text style={styles.textSkill}>Java Script</Text>
            <Text style={styles.textSkill}> React Native </Text>
         </View>
     </View>


     <View style={styles.cardJob}>
         <Text style={styles.title}>Desenvolvedor de Sistemas</Text>
         <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text style={styles.textSkill}>PHP</Text>
            <Text style={styles.textSkill}>Java Script</Text>
            <Text style={styles.textSkill}>Sql</Text>
         </View>
     </View>

    </View>
  );
}