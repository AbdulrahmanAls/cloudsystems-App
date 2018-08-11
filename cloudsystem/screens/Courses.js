import React from 'react';
import { Container, Header, Content, Badge, Text, Icon, Body, Button, Card, Tab, Tabs } from 'native-base';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,

  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class Courses extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container>
        <View style={{ alignItems: 'center' }}>
          <Text> {'\n'} </Text>
          <Text style={styles.Text}>Courses </Text>
        </View>
        <Tabs>
          <Tab heading="Free Courses">
            <Content>
              <Card>
                <Card>
                  <Image source={{ uri: 'https://cdn.scotch.io/scotchy-uploads/2014/10/learning-react-getting-started.png' }} style={{ height: 200, width: null, flex: 1 }} />
                </Card>
                <Text> React Crash Course 2018 - React Tutorial with Examples </Text>
                <Text> {'\n'} </Text>
                <Button block dark> <Text> Enroll Now </Text> </Button>
              </Card>

              <Card>
                <Card>
                  <Image source={{ uri: 'https://www.dexlabanalytics.com/wp-content/uploads/2016/11/Data-analytics-Driven-Insights-Still-Distrusted-by-Executives.png' }} style={{ height: 200, width: null, flex: 1 }} />
                </Card>
                <Text> Acquire and analyse data in different formats with the help of Python data analysis tools </Text>
                <Text> {'\n'} </Text>               
                <Button block dark> <Text> Enroll Now </Text> </Button>
              </Card>

              <Card>
                <Card>
                  <Image source={{ uri: 'https://qph.fs.quoracdn.net/main-qimg-898bc4f0ed7c20da1eb29fcdc61ece2b' }} style={{ height: 200, width: null, flex: 1 }} />
                </Card>
                <Text> Learn, build and implement the most powerful AI model at home. Compete with multi-billion dollars companies using ARS. </Text>
                <Text> {'\n'} </Text>
                <Button block dark> <Text> Enroll Now </Text> </Button>                
              </Card>
            </Content>
          </Tab>


          <Tab heading="Paid Courses">
            <Content>
              <Card>
                <Card>
                  <Image source={{ uri: 'https://study.com/cimages/course-image/human-resource-management-syllabus-resource-lesson-plans_139101_large.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
                </Card>
                <Text> Learn HR Fundamentals for a Career in Human Resources </Text>
                <Text> {'\n'} </Text>
                <Button block dark> <Text> Enroll Now </Text> </Button>
              </Card>

              <Card>
                <Card>
                  <Image source={{ uri: 'https://cdn.lynda.com/course/83603/83603-636216266356158373-16x9.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
                </Card>
                <Text> How I Learned To Program in C++ - In A Few Days! </Text>
                <Text> {'\n'} </Text>
                <Button block dark> <Text> Enroll Now </Text> </Button>
              </Card>

            </Content>
          </Tab>


        </Tabs>

      </Container>
    );
  }
}
const styles = StyleSheet.create({
  Text: {
    color: 'aqua',
    textAlign: 'center',
    fontSize: 38,
    alignItems: "center",
    justifyContent: "center",
  }
});
