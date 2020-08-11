import React, { Component } from 'react'

import { StepProvider } from './StepProvider'
import { StepView } from './step/StepView'

type Props = {
  steps?: typeof StepView[]
  children: Element
}

export function StepperContainer({ steps = [], children }: Props) {
  return <StepProvider>{children}</StepProvider>
}
