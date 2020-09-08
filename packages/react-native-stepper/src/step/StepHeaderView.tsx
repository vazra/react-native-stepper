import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useStep } from '../StepProvider'

type Props = {
  position: number
  title?: string
  subTitle?: string
  allowTapOnTitle: boolean
  onTitleTap?: Function
}

// TODO: Add horizontal view
export function StepHeaderView({ position, title, subTitle, allowTapOnTitle, onTitleTap }: Props) {
  const { jumpToStep } = useStep()
  return (
    <View style={styles.container}>
      <Text
        style={styles.title}
        onPress={() => {
          if (allowTapOnTitle && jumpToStep) {
            onTitleTap && onTitleTap()
            jumpToStep(position)
          }
        }}>
        {title}
      </Text>
      {subTitle && (
        <Text
          onPress={() => {
            allowTapOnTitle && jumpToStep && jumpToStep(position)
          }}
          style={styles.subTitle}>
          {subTitle}
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
    flexDirection: 'column',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
  },
  subTitle: {
    fontSize: 12,
  },
})
