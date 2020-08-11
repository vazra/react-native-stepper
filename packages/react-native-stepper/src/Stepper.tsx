// import React, { Component, Children } from 'react'
// import { View } from 'react-native'
// import { times } from 'lodash'
// // import PropTypes from 'prop-types'
// import { StepIcon } from './StepIcon'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import { Step } from './Step'

// interface ISteps {
//   steps?: typeof Step[]
//   loadingView?: React.ReactNode
//   initialStep?: number
//   // completedSteps?: number
//   isComplete?: boolean
//   topOffset?: number
//   marginBottom?: number
//   children?: React.ReactNode
// }

// export function Stepper({ steps = [], isComplete = false, initialStep = 0, topOffset = 30, marginBottom = 50, children }: ISteps) {
//   const [stepCount, setStepCount] = useState(steps.length)
//   const [activeStep, setActiveStep] = useState(initialStep)

//   useEffect(() => {
//     setStepCount(steps.length)
//   }, [steps])

//   // useEffect(()=>{
//   //   setActiveStep(activeStep)
//   // },[activeStep])

//   // getChildProps() {
//   //   return { ...this.props, ...this.state }
//   // }

//   const renderStepIcons = () => {
//     let step = []

//     times(stepCount, (i) => {
//       const isCompletedStep = isComplete ? true : i < activeStep

//       const isActiveStep = isComplete ? false : i === activeStep

//       step.push(
//         <View key={i}>
//           <View>
//             <StepIcon
//               {...this.getChildProps()}
//               stepNum={i + 1}
//               label={children[i].props.label}
//               isFirstStep={i === 0}
//               isLastStep={i === stepCount - 1}
//               isCompletedStep={isCompletedStep}
//               isActiveStep={isActiveStep}
//             />
//           </View>
//         </View>
//       )
//     })

//     return step
//   }

//   // Callback function from ProgressStep that passes current step.
//   const jumpStep = (type: 'up' | 'down') => {
//     // Guard against setting current step higher than total step count.
//     let change = 0
//     if ((type = 'up')) change = 1
//     else if ((type = 'down')) change = -1

//     setActiveStep((actStep) => {
//       const newVal = actStep + change
//       return newVal > -1 && newVal < stepCount - 1 ? newVal : actStep
//     })
//   }

//   const styles = {
//     stepIcons: {
//       position: 'relative',
//       justifyContent: 'space-evenly',
//       alignSelf: 'center',
//       flexDirection: 'row',
//       top: topOffset,
//       marginBottom: marginBottom,
//     },
//   }

//   return (
//     <View style={{ flex: 1 }}>
//       <View style={styles.stepIcons}>{this.renderStepIcons()}</View>
//       <View style={{ flex: 1 }}>
//         {/* {React.cloneElement(children[activeStep], {
//           jumpStep: jumpStep,
//           activeStep: activeStep,
//           stepCount: stepCount,
//         })} */}
//       </View>
//     </View>
//   )
// }

// // ProgressSteps.propTypes = {
// //   isComplete: PropTypes.bool,
// //   activeStep: PropTypes.number,
// //   topOffset: PropTypes.number,
// //   marginBottom: PropTypes.number,
// // }

// // ProgressSteps.defaultProps = {
// // }

// // export default Steps
