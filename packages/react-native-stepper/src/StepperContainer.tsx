import React from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'
import { StepProvider } from './StepProvider'
import { ReactElement } from 'react'
import { StepView } from '.'

type Props = {
  themeColor?: string
  buttonStyle?: { [key: string]: any }
  contentViewStyle?: { [key: string]: any }
  submitButtonText?: string
  children: ReactElement<typeof StepView>[]
  layout?: 'vertical' | 'horizontal'
}

export function StepperContainer({
  themeColor = '#2196F3',
  layout = 'vertical',
  submitButtonText = 'Submit',
  contentViewStyle = {},
  children,
}: Props) {
  return (
    <ScrollView style={{ ...styles.container, ...contentViewStyle }}>
      {layout === 'vertical' ? (
        <StepProvider themeColor={themeColor} submitButtonText={submitButtonText}>
          {children}
        </StepProvider>
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
