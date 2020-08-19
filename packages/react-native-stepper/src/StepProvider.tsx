import React, { useEffect, useContext, ReactElement } from 'react'

type ContextProps = {
  activeStep: number
  stepCount: number
  themeColor: string
  jumpStep: ((type: 'up' | 'down') => void) | undefined
}

export const StepContext = React.createContext<ContextProps>({
  activeStep: 0,
  stepCount: 0,
  themeColor: '#2196F3',
  jumpStep: undefined,
})

export function useStep() {
  return useContext(StepContext)
}
type Props = {
  children: ReactElement[]
  themeColor: string
  submitButtonText: string
}

export const StepProvider = ({ children, themeColor, submitButtonText }: Props) => {
  const [activeStep, setActiveStep] = React.useState<number>(0)
  const [stepCount, setStepCount] = React.useState<number>(0)

  useEffect(() => {
    const count = React.Children.count(children)
    console.log('Children Count', count)
    setStepCount(count)
  }, [])

  // Callback function from ProgressStep that passes current step.
  const jumpStep = (type: 'up' | 'down') => {
    // Guard against setting current step higher than total step count.
    let change = 0
    if (type === 'up') change = 1
    else if (type === 'down') change = -1

    setActiveStep((actStep) => {
      const newVal = actStep + change
      console.log('jumbing.. ', type, change, ' act:', activeStep, newVal)

      return newVal > -1 && newVal < stepCount ? newVal : actStep
    })
  }

  // useEffect(() => {
  //   console.log('Logged in user updated...', currentUser)
  //   // TODO: Set this in asyc storage or something
  // }, [currentUser])

  const childrenArray = React.Children.toArray(children)
  const clonedArray = childrenArray.map((aChild, idx) => {
    const newProps: { [key: string]: any } = { position: idx }
    if (idx === childrenArray.length - 1) newProps['nextButtonText'] = submitButtonText
    return React.cloneElement(aChild, newProps)
  })

  return <StepContext.Provider value={{ activeStep, stepCount, jumpStep, themeColor }}>{<>{clonedArray}</>}</StepContext.Provider>
}
