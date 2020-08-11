import React from 'react'
import { View, Text } from 'react-native'

type Props = {
  position: number
  title?: string
  subTitle?: string
}

// TODO: Add horizontal view
export function StepHeaderView({ position, title, subTitle }: Props) {
  return (
    <View>
      <Text>Position: {position}</Text>
      <Text>{title}</Text>
      <Text>{subTitle}</Text>
    </View>
  )
}
