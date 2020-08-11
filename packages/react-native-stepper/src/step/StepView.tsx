import React from 'react'
import { View, Text, Button } from 'react-native'
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

  const NextButton = <Button title='Next' onPress={onNextPressed} />
  const PreviousButton = <Button title='Back' onPress={onPreviousPressed} />

  return (
    <View>
      <StepHeaderView title={title} subTitle={subTitle} position={position}></StepHeaderView>
      <Text>Active: {activeStep}</Text>
      {err && <View>{err}</View>}
      {position === activeStep && (
        <>
          <View>{children}</View>
          <View>
            {onNext && NextButton}
            {onPrevious && PreviousButton}
          </View>
        </>
      )}
    </View>
  )
}
