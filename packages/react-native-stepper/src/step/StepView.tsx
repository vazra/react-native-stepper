import { View, Text, StyleSheet } from 'react-native'
import { StepHeaderView } from './StepHeaderView'
import React, { useState, ReactNode } from 'react'
import { useStep } from '../StepProvider'
import { ActionButton } from './ActionButton'
import { lineColor } from '../constants'

type Props = {
  position?: number
  title?: string
  subTitle?: string
  nextButtonText?: string
  previousButtonText?: string
  allowTapOnTitle?: boolean
  onTitleTap?: Function
  children: ReactNode
  onNext?: (...params: any[]) => Promise<boolean | string>
  onPrevious?: (...params: any[]) => Promise<boolean | string>
}

// view for horizontal stepper
export function StepView({
  position = 0,
  title,
  subTitle,
  children,
  onNext,
  onPrevious,
  nextButtonText = 'Next',
  previousButtonText = 'Back',
  allowTapOnTitle,
  onTitleTap,
}: Props) {
  const { activeStep, stepCount, jumpStep, themeColor } = useStep()
  if (onNext === undefined) onNext = () => Promise.resolve(true)

  // undefined when tap on title is not allowd
  if (onPrevious === undefined && position !== 0 && !allowTapOnTitle) onPrevious = () => Promise.resolve(true)

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
    <View style={styles.container}>
      <View style={styles.indexRow}>
        <View style={{ ...styles.stepperCircle, backgroundColor: position <= activeStep ? themeColor : lineColor }}>
          <Text style={styles.stepperCircleText}>{position + 1}</Text>
        </View>
        {position < stepCount - 1 && <View style={styles.connectingLine} />}
      </View>
      <View style={styles.contentRow}>
        <StepHeaderView
          allowTapOnTitle={allowTapOnTitle || false}
          onTitleTap={onTitleTap}
          title={title}
          subTitle={subTitle}
          position={position}></StepHeaderView>
        <View style={styles.contentView}>
          {err && <Text style={{ color: 'red' }}>{`Error: ${err}`}</Text>}
          {position === activeStep && (
            <>
              <View style={styles.contentChildren}>{children}</View>
              <View style={styles.buttonRow}>
                <ActionButton title={previousButtonText} color={themeColor} onPress={onPreviousPressed} hidden={onPrevious === undefined} />

                <ActionButton title={nextButtonText} color={themeColor} onPress={onNextPressed} hidden={onNext === undefined} />
              </View>
            </>
          )}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  indexRow: {},
  connectingLine: {
    flexGrow: 1,
    width: 1,
    backgroundColor: lineColor,
    alignSelf: 'center',
    margin: 4,
  },
  contentRow: {
    paddingBottom: 16,
    flexShrink: 1,
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  contentView: {
    padding: 4,
  },
  contentChildren: {},
  stepperCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    margin: 4,
  },
  stepperCircleText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 12,
  },

  buttonRow: {
    flexDirection: 'row',
    paddingVertical: 16,
  },
})
