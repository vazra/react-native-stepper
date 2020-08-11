import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { StepProvider } from './StepProvider'
import { StepView } from './step/StepView'

type Props = {
  steps?: typeof StepView[]
  children: Element
}

export function StepperContainer({ steps = [], children }: Props) {
  return (
    <View style={styles.container}>
      <StepProvider>{children}</StepProvider>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})
