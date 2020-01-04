import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import ViewPager from '@react-native-community/viewpager'

export default function MyPager () {
  return (
    <ViewPager style={styles.viewPager} initialPage={0}>
      <View key="1" style={styles.viewOne}>
        <Text>First page</Text>
      </View>
      <View key="2" style={styles.viewTwo}>
        <Text>Second page</Text>
      </View>
    </ViewPager>
  )
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1
  },
  viewOne: {
    backgroundColor: 'red'
  },
  viewTwo: {
    backgroundColor: 'blue'
  }
})
