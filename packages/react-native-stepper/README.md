# React Native Stepper

> Typescript friendly, Material UI Stepper implementation in React Native.

> The aim is to develop with all features of stepper as provided in the [Material UI Guidelines](https://material.io/archive/guidelines/components/steppers.html). But, the v1 does not have all those features. But ready to be used in production as an alternative.

> For the time being, only `vertical` stepper is supported.

> If you are a developer, please contribute to make this project more useful for everyone!

> Create issues for any bugs or feature requests.

View [Demo Here](https://snack.expo.io/@mocioun/react-native-material-ui-stepper)

## Installation

`yarn add@material.ui/react-native-stepper`

or

`npm i@material.ui/react-native-stepper --save`

## Parameters

**StepperContainer**

| Param       | Type                       | Default     | Description                               |
| ----------- | -------------------------- | ----------- | ----------------------------------------- |
| layout      | 'vertical' or 'horizontal' | `vertical`  | layout                                    |
| themeColor  | string                     | `blue[500]` | theme color                               |
| buttonStyle | object                     | `{}`        | style object that is passed to the button |
| children    | StepView[]                 | `null`      | Step Views                                |

**StepView**

| Param                | Type                   | Default     | Description                                                                                                                                                                                      |
| -------------------- | ---------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| title                | string                 | ''          | Step Title                                                                                                                                                                                       |
| subTitle (optional)  | string                 | ''          | Step Sub Title                                                                                                                                                                                   |
| children             | React.Node             | `null`      | React Node to display as step content                                                                                                                                                            |
| onNext(optional)     | `() => boolean|string` | `() =>true` | if onNext is given this will be called when next button from the step is pressed, and goes to the next step/submit only if this returns true. If it returns a string, it will be shown as error  |
| onPrevious(optional) | `() => boolean|string` | `() =>true` | if onPrevious is given this will be called when back button from the step is pressed, and goes to the previous step only if this returns true. If it returns a string, it will be shown as error |

## Usage

```js
import { StepperContainer, StepView } from '@material.ui/react-native-stepper'
```

```js
<StepperContainer>
  <StepView title='Intro' subTitle='The intro details'>
    <Text>Step 1 Contents</Text>
  </StepView>
  <StepView title='Second' subTitle='Name and other details'>
    <Text>Step 2 Contents</Text>
  </StepView>
  <StepView title='Third Step' subTitle='Some lines'>
    <Text>Step 3 Contents …!</Text>
  </StepView>
  <StepView title='Last Step' subTitle='Finishing lines'>
    <Text>Step 4 Contents …!</Text>
  </StepView>
</StepperContainer>
```

## License

Copyright © 2020 Vazra, MIT License
