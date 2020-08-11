import React, { useEffect, useContext } from 'react'
// import { Step } from './Step'

type ContextProps = {
  activeStep: number
  stepCount: number
  jumpStep: (type?: 'up' | 'down') => void
}

export const StepContext = React.createContext<ContextProps>({
  activeStep: 0,
  stepCount: 0,
  jumpStep: (type?: 'up' | 'down') => {},
})

export function useStep() {
  return useContext(StepContext)
}
type Props = {
  children: React.ReactNode
  // steps: typeof Step[]
}

export const StepProvider = ({ children }: Props) => {
  const [activeStep, setActiveStep] = React.useState<number>(0)
  const [stepCount, setStepCount] = React.useState<number>(0)

  // Callback function from ProgressStep that passes current step.
  const jumpStep = (type?: 'up' | 'down') => {
    // Guard against setting current step higher than total step count.
    let change = 0
    if ((type = 'up')) change = 1
    else if ((type = 'down')) change = -1

    setActiveStep((actStep) => {
      const newVal = actStep + change
      return newVal > -1 && newVal < stepCount - 1 ? newVal : actStep
    })
  }

  // useEffect(() => {
  //   console.log('Logged in user updated...', currentUser)
  //   // TODO: Set this in asyc storage or something
  // }, [currentUser])

  return <StepContext.Provider value={{ activeStep, stepCount, jumpStep }}>{children}</StepContext.Provider>
}
