import React from 'react'
import { View } from 'react-native'

type Props = {
  renderPreviousButton: () => React.ReactNode
  renderNextButton: () => React.ReactNode
}

const ProgressButtons = ({ renderPreviousButton, renderNextButton }: Props) => (
  <View style={{ flexDirection: 'row', marginTop: 90 }}>
    <View style={{ position: 'absolute', left: 60, bottom: 40 }}>{renderPreviousButton()}</View>
    <View style={{ position: 'absolute', right: 60, bottom: 40 }}>{renderNextButton()}</View>
  </View>
)

export default ProgressButtons
