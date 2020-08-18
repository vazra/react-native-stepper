import * as React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { StepperContainer, StepView } from '@material.ui/react-native-stepper'

export default function App() {
  return (
    <View style={styles.container}>
      <StepperContainer>
        <StepView title='Intro' subTitle='The intro details'>
          <Text>
            Lorem Ipsum is the default text used for sample documents, slides and webpages. The aim is to produce a graphical representation of the
            sample page to provide an idea as to how it will appear when real content is added to it. Lorem Ipsum is often accompanied by sample
            images to fill in a slide or webpage
          </Text>
        </StepView>
        <StepView title='Second' subTitle='Name and other details'>
          <Text>These posts will</Text>
        </StepView>
        <StepView title='Third Step' subTitle='Finishing lines'>
          <Text>
            step 3 You might be aware of Lorem Ipsum, which is standard dummy text used in printing and various software which come with some form of
            sample text. Lorem Ipsum is essentially the scrambled version of 1st century Latin text, De finibus bonorum et malorum, which was written
            by the roman philosopher Marcus Tullius Cicero. Neo Ipsum is an …!
          </Text>
        </StepView>
        <StepView title='Third Step' subTitle='Finishing lines'>
          <Text>
            step 3 You might be aware of Lorem Ipsum, which is standard dummy text used in printing and various software which come with some form of
            sample text. Lorem Ipsum is essentially the scrambled version of 1st century Latin text, De finibus bonorum et malorum, which was written
            by the roman philosopher Marcus Tullius Cicero. Neo Ipsum is an …!
          </Text>
        </StepView>
      </StepperContainer>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 32,
    flex: 1,
    // backgroundColor: 'yellow',
    alignContent: 'stretch',
  },
})
