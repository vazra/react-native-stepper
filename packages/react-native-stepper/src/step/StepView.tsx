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
  stepContent: Element
  onNext?: () => boolean | string
  onPrevious?: () => boolean | string
}

export function StepView({ position, title, subTitle, stepContent, onNext, onPrevious }: Props) {
  const { activeStep, stepCount, jumpStep } = useStep()

  const [err, setErr] = useState<string | undefined>(undefined)
  const onNextPressed = async () => {
    // start loading screen
    const isValid = onNext && (await onNext())
    if (isValid === true) {
      setErr(undefined)
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
    } else {
      if (typeof isValid === 'string') setErr(isValid)
    }
    // end loading screen
  }

  const NextButton = <Button title='Next' onPress={onNextPressed} />
  const PreviousButton = <Button title='Back' onPress={onNextPressed} />

  return (
    <View>
      <StepHeaderView title={title} subTitle={subTitle} position={position}></StepHeaderView>
      {err && <View>{err}</View>}
      <View>{stepContent}</View>
      <View>
        {NextButton}
        {PreviousButton}
      </View>
    </View>
  )
}
