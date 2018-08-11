import React from 'react';
import { Container, Header, Content, Badge, Text, Icon, Body, CardItem, Card, H1, Tabs, Tab } from 'native-base';
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

export default class Tasks extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container>
        <Header hasTabs />
            <View style={{alignItems: 'center'}}>
            <Text> {'\n'} </Text>
            <Text style={styles.Text}> Tasks </Text>
            <Text> {'\n'} </Text>
            </View>
        <Tabs>
        <Tab heading="Indevidual Tasks">
        <Content>
            <Card title='Containers'>
            <View style={{padding: 3}}>
              <Text> * What is a Container Orchestration? Why do we need it? </Text>
              <Text> * What is Kubernetes? What is the benefit of Kubernetes? </Text>
              <Text> * What is Minikube? What are Minikube Features?  </Text>
              </View>
            </Card>
         
            </Content>
        </Tab>


      <Tab heading="Group Tasks">
        <Content>
            <Card>
            <Text>  There are no Group Tasks right now .. </Text>
            <Text>  Keep calm and have fun !! </Text>
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
    justifyContent:"center",
  }
});
