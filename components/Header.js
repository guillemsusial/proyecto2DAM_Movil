import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const backgroundColor = "#000000"

export default function Header() {
  /**#falta el routing y los menus de la navBar */
    return (
      <View style={styles.header}>
        <Text style={{color:'white'}}>Header Component</Text>
      </View>
    );
  }
  /**CSS */
  const styles = StyleSheet.create({
    header: {     
      flex:0.15,      
      alignItems: 'center',
      backgroundColor: backgroundColor,
      justifyContent: 'center',
     
    },
  });