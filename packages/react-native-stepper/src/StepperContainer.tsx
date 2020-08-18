import React from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'
import { StepProvider } from './StepProvider'
import { ReactElement } from 'react'

type Props = {
  themeColor?: string
  buttonStyle?: { [key: string]: any }
  children: ReactElement[]
  layout?: 'vertical' | 'horizontal'
}

export function StepperContainer({ themeColor = '#2196F3', layout = 'vertical', children }: Props) {
  return (
    <ScrollView style={styles.container}>
      {layout === 'vertical' ? (
        <StepProvider themeColor={themeColor}>{children}</StepProvider>
      ) : (
        <>
          <Text>Horizontal steppers not yet supported, please use layout="vertical"</Text>
        </>
      )}
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'lightgray',
  },
})
