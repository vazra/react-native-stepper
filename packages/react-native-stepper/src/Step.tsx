// import React from 'react'
// import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native'
// // import PropTypes from 'prop-types'

// import ProgressButtons from './ActionButtons'
// type IDoc = { [key: string]: any }

// interface StepProps {
//   children: React.ReactNode
//   title?: string
//   subTitle?: string
//   icon: React.ReactNode
//   onNext: Function
//   onPrevious: Function

//   onSubmit?: Function
//   activeStep?: number
//   setActiveStep?: React.Dispatch<React.SetStateAction<number>>
//   label?: string
//   nextBtnText?: string
//   previousBtnText?: string
//   finishBtnText?: string
//   stepCount?: number
//   nextBtnStyle?: IDoc
//   nextBtnTextStyle?: IDoc
//   nextBtnDisabled?: boolean
//   previousBtnStyle?: IDoc
//   previousBtnTextStyle?: IDoc
//   previousBtnDisabled?: boolean
//   scrollViewProps?: IDoc
//   viewProps?: IDoc
//   errors?: boolean
//   removeBtnRow?: boolean
//   scrollable?: boolean
// }

// export function Step({
//   activeStep,
//   setActiveStep,
//   nextBtnText = 'Next',
//   previousBtnText = 'Previous',
//   finishBtnText = 'Submit',
//   nextBtnDisabled = false,
//   previousBtnDisabled = false,
//   errors = false,
//   removeBtnRow = false,
//   scrollable = true,
//   children,
//   ...props
// }: StepProps) {
//   const styles = StyleSheet.create({
//     nextBtnStyle: {
//       textAlign: 'center',
//       padding: 8,
//       ...props.nextBtnStyle,
//     },
//     nextBtnTextStyle: {
//       color: '#007AFF',
//       fontSize: 18,
//       ...props.nextBtnTextStyle,
//     },
//     btnpreviousBtnStyleStyle: {
//       textAlign: 'center',
//       padding: 8,
//       ...props.previousBtnStyle,
//     },
//     previousBtnTextStyle: {
//       color: '#007AFF',
//       fontSize: 18,
//       ...props.previousBtnTextStyle,
//     },
//     disabledBtnText: {
//       color: '#cdcdcd',
//     },
//   })
//   const onNextStep = async () => {
//     props.onNext && (await props.onNext())
//     // Return out of method before moving to next step if errors exist.
//     if (errors) {
//       return
//     }
//     setActiveStep((step) => step + 1)
//   }

//   const onPreviousStep = () => {
//     // Changes active index and calls previous function passed by parent
//     props.onPrevious && props.onPrevious()
//     setActiveStep((step) => step - 1)
//   }

//   const onSubmit = () => {
//     props.onSubmit && props.onSubmit()
//   }

//   const renderNextButton = () => {
//     let textStyle: IDoc[] = [styles.nextBtnStyle]
//     if (nextBtnDisabled) textStyle.push(styles.disabledBtnText)

//     return (
//       <TouchableOpacity style={styles.nextBtnStyle} onPress={activeStep === props.stepCount - 1 ? onSubmit : onNextStep} disabled={nextBtnDisabled}>
//         <Text style={textStyle}>{activeStep === props.stepCount - 1 ? previousBtnText : nextBtnText}</Text>
//       </TouchableOpacity>
//     )
//   }

//   const renderPreviousButton = () => {
//     let textStyle: IDoc[] = [styles.previousBtnTextStyle]
//     if (previousBtnDisabled) textStyle.push(styles.disabledBtnText)

//     return (
//       <TouchableOpacity style={styles.nextBtnStyle} onPress={onPreviousStep} disabled={previousBtnDisabled}>
//         <Text style={textStyle}>{activeStep === 0 ? '' : previousBtnText}</Text>
//       </TouchableOpacity>
//     )
//   }

//   const scrollViewProps = props.scrollViewProps || {}
//   const viewProps = props.viewProps || {}
//   const isScrollable = scrollable
//   const buttonRow = removeBtnRow ? null : <ProgressButtons renderNextButton={renderNextButton} renderPreviousButton={renderPreviousButton} />

//   return (
//     <View style={{ flex: 1 }}>
//       {isScrollable ? <ScrollView {...scrollViewProps}>{children}</ScrollView> : <View {...viewProps}>{children}</View>}
//       {buttonRow}
//     </View>
//   )
// }

// // ProgressStep.propTypes = {
// //   label: PropTypes.string,
// //   onNext: PropTypes.func,
// //   onPrevious: PropTypes.func,
// //   onSubmit: PropTypes.func,
// //   setActiveStep: PropTypes.func,
// //   nextBtnText: PropTypes.string,
// //   previousBtnText: PropTypes.string,
// //   finishBtnText: PropTypes.string,
// //   stepCount: number,
// //   nextBtnStyle: PropTypes.object,
// //   nextBtnTextStyle: PropTypes.object,
// //   nextBtnDisabled: PropTypes.bool,
// //   previousBtnStyle: PropTypes.object,
// //   previousBtnTextStyle: PropTypes.object,
// //   previousBtnDisabled: PropTypes.bool,
// //   scrollViewProps: PropTypes.object,
// //   viewProps: PropTypes.object,
// //   errors: PropTypes.bool,
// //   removeBtnRow: PropTypes.bool,
// //   scrollable: PropTypes.bool,
// // }

// // ProgressStep.defaultProps = {
// //   nextBtnText: 'Next',
// //   previousBtnText: 'Previous',
// //   finishBtnText: 'Submit',
// //   nextBtnDisabled: false,
// //   previousBtnDisabled: false,
// //   errors: false,
// //   removeBtnRow: false,
// //   scrollable: true,
// // }

// // export default ProgressStep
