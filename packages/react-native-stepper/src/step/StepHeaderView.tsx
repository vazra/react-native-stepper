import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type Props = {
  position: number
  title?: string
  subTitle?: string
}

// TODO: Add horizontal view
export function StepHeaderView({ position, title, subTitle }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
    // backgroundColor: 'blue',
    flexDirection: 'column',
  },
  title: {
    // backgroundColor: 'green',
    fontSize: 14,
    fontWeight: '600',
  },
  subTitle: {
    // backgroundColor: 'green',
    fontSize: 12,
  },
})
