import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
// import PropTypes from 'prop-types'

interface StepIconProps {
  stepCount: number
  stepNum: number
  isFirstStep: boolean
  isLastStep: boolean
  isActiveStep: boolean
  isCompletedStep: boolean
  label: string

  borderWidth?: number
  borderStyle?: string
  activeStepIconBorderColor?: string

  progressBarColor?: string
  completedProgressBarColor?: string

  activeStepIconColor?: string
  disabledStepIconColor?: string
  completedStepIconColor?: string

  labelFontFamily?: string
  labelColor?: string
  labelFontSize?: number
  activeLabelColor?: string
  activeLabelFontSize?: number
  completedLabelColor?: string

  activeStepNumColor?: string
  completedStepNumColor?: string
  disabledStepNumColor?: string

  completedCheckColor?: string
}

export function StepIcon({
  borderWidth = 3,
  borderStyle = 'solid',
  activeStepIconBorderColor = '#4BB543',

  progressBarColor = '#ebebe4',
  completedProgressBarColor = '#4BB543',

  activeStepIconColor = 'transparent',
  completedStepIconColor = '#4BB543',
  disabledStepIconColor = '#ebebe4',

  labelColor = 'lightgray',
  labelFontSize = 14,
  activeLabelColor = '#4BB543',
  completedLabelColor = 'lightgray',

  activeStepNumColor = 'black',
  completedStepNumColor = 'black',
  disabledStepNumColor = 'white',

  completedCheckColor = 'white',
  labelFontFamily,
  activeLabelFontSize,
  stepNum,
  isFirstStep,
  isLastStep,
  isActiveStep,
  isCompletedStep,
  label,

  ...props
}: StepIconProps) {
  let styles

  if (isActiveStep) {
    styles = StyleSheet.create({
      circleStyle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: activeStepIconColor,
        borderColor: activeStepIconBorderColor,
        borderWidth: 5,
        bottom: 2,
      },
      circleText: {
        alignSelf: 'center',
        top: 20 / 3,
      },
      labelText: {
        textAlign: 'center',
        flexWrap: 'wrap',
        width: 100,
        paddingTop: 4,
        fontFamily: labelFontFamily,
        color: activeLabelColor,
        fontSize: activeLabelFontSize || labelFontSize,
      },
      leftBar: {
        position: 'absolute',
        top: 40 / 2.22,
        left: 0,
        right: 40 + 8,
        borderTopStyle: borderStyle,
        borderTopWidth: borderWidth,
        borderTopColor: completedProgressBarColor,
        marginRight: 40 / 2 + 2,
      },
      rightBar: {
        position: 'absolute',
        top: 40 / 2.22,
        right: 0,
        left: 40 + 8,
        borderTopStyle: borderStyle,
        borderTopWidth: borderWidth,
        borderTopColor: progressBarColor,
        marginLeft: 40 / 2 + 2,
      },
      stepNum: {
        color: activeStepNumColor,
      },
    })
  } else if (isCompletedStep) {
    styles = StyleSheet.create({
      circleStyle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: completedStepIconColor,
      },
      circleText: {
        alignSelf: 'center',
        top: 18 / 2,
      },
      labelText: {
        textAlign: 'center',
        flexWrap: 'wrap',
        width: 100,
        paddingTop: 4,
        fontFamily: labelFontFamily,
        color: completedLabelColor,
        marginTop: 4,
        fontSize: labelFontSize,
      },
      leftBar: {
        position: 'absolute',
        top: 36 / 2,
        left: 0,
        right: 36 + 8,
        borderTopStyle: borderStyle,
        borderTopWidth: borderWidth,
        borderTopColor: completedProgressBarColor,
        marginRight: 36 / 2 + 4,
      },
      rightBar: {
        position: 'absolute',
        top: 36 / 2,
        right: 0,
        left: 36 + 8,
        borderTopStyle: borderStyle,
        borderTopWidth: borderWidth,
        borderTopColor: completedProgressBarColor,
        marginLeft: 36 / 2 + 4,
      },
      stepNum: {
        color: completedStepNumColor,
      },
    })
  } else {
    styles = StyleSheet.create({
      circleStyle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: disabledStepIconColor,
      },
      circleText: {
        alignSelf: 'center',
        top: 18 / 2,
      },
      labelText: {
        textAlign: 'center',
        flexWrap: 'wrap',
        width: 100,
        paddingTop: 4,
        fontFamily: labelFontFamily,
        color: labelColor,
        marginTop: 4,
        fontSize: labelFontSize,
      },
      leftBar: {
        position: 'absolute',
        top: 36 / 2,
        left: 0,
        right: 36 + 8,
        borderTopStyle: borderStyle,
        borderTopWidth: borderWidth,
        borderTopColor: progressBarColor,
        marginRight: 36 / 2 + 4,
      },
      rightBar: {
        position: 'absolute',
        top: 36 / 2,
        right: 0,
        left: 36 + 8,
        borderTopStyle: borderStyle,
        borderTopWidth: borderWidth,
        borderTopColor: progressBarColor,
        marginLeft: 36 / 2 + 4,
      },
      stepNum: {
        color: disabledStepNumColor,
      },
    })
  }

  return (
    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
      <View style={styles.circleStyle}>
        <Text style={styles.circleText}>
          {isCompletedStep ? <Text style={{ color: completedCheckColor }}>&#10003;</Text> : <Text style={styles.stepNum}>{stepNum}</Text>}
        </Text>
      </View>
      <Text style={styles.labelText}>{label}</Text>
      {!isFirstStep && <View style={styles.leftBar} />}
      {!isLastStep && <View style={styles.rightBar} />}
    </View>
  )
}

// StepIcon.propTypes = {
//   stepCount: PropTypes.number.isRequired,
//   stepNum: PropTypes.number.isRequired,
//   isFirstStep: PropTypes.bool.isRequired,
//   isLastStep: PropTypes.bool.isRequired,

//   borderWidth: PropTypes.number,
//   borderStyle: PropTypes.string,
//   activeStepIconBorderColor: PropTypes.string,

//   progressBarColor: PropTypes.string,
//   completedProgressBarColor: PropTypes.string,

//   activeStepIconColor: PropTypes.string,
//   disabledStepIconColor: PropTypes.string,
//   completedStepIconColor: PropTypes.string,

//   labelFontFamily: PropTypes.string,
//   labelColor: PropTypes.string,
//   labelFontSize: PropTypes.number,
//   activeLabelColor: PropTypes.string,
//   activeLabelFontSize: PropTypes.number,
//   completedLabelColor: PropTypes.string,

//   activeStepNumColor: PropTypes.string,
//   completedStepNumColor: PropTypes.string,
//   disabledStepNumColor: PropTypes.string,

//   completedCheckColor: PropTypes.string,
// }

// StepIcon.defaultProps = {
//   borderWidth: 3,
//   borderStyle: 'solid',
//   activeStepIconBorderColor: '#4BB543',

//   progressBarColor: '#ebebe4',
//   completedProgressBarColor: '#4BB543',

//   activeStepIconColor: 'transparent',
//   completedStepIconColor: '#4BB543',
//   disabledStepIconColor: '#ebebe4',

//   labelColor: 'lightgray',
//   labelFontSize: 14,
//   activeLabelColor: '#4BB543',
//   completedLabelColor: 'lightgray',

//   activeStepNumColor: 'black',
//   completedStepNumColor: 'black',
//   disabledStepNumColor: 'white',

//   completedCheckColor: 'white',
// }

// export default StepIcon
