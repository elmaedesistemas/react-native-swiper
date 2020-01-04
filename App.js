import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ViewPager from '@react-native-community/viewpager'

import MyPager from './app/components/MyPager'

export default function App() {
  return (
    <ViewPager style={styles.viewPager} initialPage={2}>
      <View key="1" style={styles.viewOne}>
        <Text>First page</Text>
      </View>
      <View key="2" style={styles.viewTwo}>
        <Text>Second page</Text>
      </View>
      <View key="3" style={styles.viewThird}>
        <Text>Third page</Text>
      </View>
    </ViewPager>
  );
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1
  },
  viewOne: {
    backgroundColor: 'blue'
  },
  viewTwo: {
    backgroundColor: 'red'
  },
  viewThird: {
    backgroundColor: 'green'
  }
})
