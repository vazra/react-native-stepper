import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity, GestureResponderEvent } from 'react-native'
import { StepHeaderView } from './StepHeaderView'
import { useState } from 'react'
import { instanceOf, string } from 'prop-types'
import { useStep } from '../StepProvider'

type Props = {
  position: number
  title?: string
  subTitle?: string
  children: Element
  onNext?: () => boolean | string
  onPrevious?: () => boolean | string
}

// view for horizontal stepper
export function StepView({ position, title, subTitle, children, onNext, onPrevious }: Props) {
  const { activeStep, stepCount, jumpStep } = useStep()
  if (onNext === undefined) onNext = () => true
  if (onPrevious === undefined && position !== 0) onPrevious = () => true

  if (position === 0) onPrevious = undefined

  const [err, setErr] = useState<string | undefined>(undefined)
  const onNextPressed = async () => {
    // start loading screen
    const isValid = onNext && (await onNext())
    console.log('jumbing.. ', isValid)

    if (isValid === true) {
      setErr(undefined)
      jumpStep && jumpStep('up')
    } else {
      if (typeof isValid === 'string') setErr(isValid)
    }
    // end loading screen
  }

  const onPreviousPressed = async () => {
    // start loading screen
    const isValid = onPrevious && (await onPrevious())
    if (isValid === true) {
      setErr(undefined)
      console.log('jumping down')
      jumpStep && jumpStep('down')
    } else {
      if (typeof isValid === 'string') setErr(isValid)
    }
    // end loading screen
  }

  return (
    <View>
      <StepHeaderView title={title} subTitle={subTitle} position={position}></StepHeaderView>
      <Text>Active: {activeStep}</Text>
      {err && <View>{err}</View>}
      {position === activeStep && (
        <>
          <View>{children}</View>
          <View style={styles.buttonRow}>
            <ActionButton title='Back' onPress={onPreviousPressed} hidden={onPrevious === undefined} />
            <ActionButton title='Next' onPress={onNextPressed} hidden={onNext === undefined} />
          </View>
        </>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  buttonRow: {
    // flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
})

type ActionButtonProps = {
  hidden?: boolean
  style?: { [key: string]: any }
  title: string
  onPress: ((event: GestureResponderEvent) => void) | undefined
}

const hideStyle = {
  width: 0,
  paddingHorizontal: 0,
}

const ActionButton = ({
  hidden = false,
  style = {
    backgroundColor: '#2196F3',
    color: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    elevation: 4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  title,
  onPress,
}: ActionButtonProps) => {
  // occupy space but hide.
  const hide = hidden
    ? {
        width: 0,
        paddingHorizontal: 0,
      }
    : {}
  return (
    <TouchableOpacity style={{ ...style, ...hide }} disabled={hidden} onPress={onPress}>
      <Text style={{ color: style.color }}>{title}</Text>
    </TouchableOpacity>
  )
}
