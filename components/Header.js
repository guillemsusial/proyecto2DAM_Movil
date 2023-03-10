import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
export default function Header() {
    return (
      <View style={styles.header}>
        <Text>Header Component</Text>
      </View>
    );
  }
  const styles = StyleSheet.create({
    header: {     
      flex:0.15,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'grey'    
    },
  });