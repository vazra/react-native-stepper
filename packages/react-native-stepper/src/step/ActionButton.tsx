import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity, GestureResponderEvent, ActivityIndicator } from 'react-native'
import { StepHeaderView } from './StepHeaderView'
import { useState } from 'react'
import { instanceOf, string } from 'prop-types'
import { useStep } from '../StepProvider'

type ActionButtonProps = {
  hidden?: boolean
  style?: { [key: string]: any }
  title: string
  color?: string
  onPress: () => Promise<void>
  // onPress: ((event: GestureResponderEvent) => void) | undefined
}

const hideStyle = {
  width: 0,
  paddingHorizontal: 0,
}

export const ActionButton = ({ hidden = false, style = {}, color = '#9F9F9F', title, onPress }: ActionButtonProps) => {
  const [loading, setLoading] = useState(false)

  // onPress
  const onPressAction = async () => {
    setLoading(true)
    await onPress()
    setLoading(false)
  }

  // occupy space but hide.
  const defaultStyle = {
    backgroundColor: color,
    color: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    elevation: 4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginRight: 16,
  }
  const hide = hidden
    ? {
        width: 0,
        paddingHorizontal: 0,
      }
    : {}
  return hidden ? null : (
    <TouchableOpacity style={{ ...defaultStyle, ...style, ...hide }} disabled={hidden || loading} onPress={onPressAction}>
      {loading ? (
        <ActivityIndicator size='small' color='#ffffff' style={{ paddingRight: 8 }} />
      ) : (
        <Text style={{ color: style.color || defaultStyle.color }}>{title}</Text>
      )}
    </TouchableOpacity>
  )
}
