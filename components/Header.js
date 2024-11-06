import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
    return (
      <View style={styles.main}>
        <Text style={styles.text}>To do list</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    main: {
      paddingTop: 60,
      height: 100,
      backgroundColor: 'silver',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      color: 'blue',
    },
});
