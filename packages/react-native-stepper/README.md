# React Native Stepper

> Typescript friendly, Material UI Stepper implementation in React Native.

> The aim is to develop with all features of stepper as provided in the [Material UI Guidelines](https://material.io/archive/guidelines/components/steppers.html). But, the v1 does not have all those features. But ready to be used in production as an alternative.

> For the time being, only `vertical` stepper is supported.

> If you are a developer, please contribute to make this project more useful for everyone!

> Create issues for any bugs or future requests.

View [Demo Here](https://snack.expo.io/@mocioun/react-native-material-ui-stepper) (Note: Some UI components are missing in react-native-web, so try it in iOS or Android)

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
| Param | Type | Default | Description |
| title | string | '' | Step Title |
| subTitle | string | '' | Step Sub Title |
| children | React.Node | `null` | React Node to display as step content |

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
