import React from 'react';
import { Container, Header, Content, Badge, Text, Icon, Body, CardItem, Card, H1, Tabs, Tab, Button } from 'native-base';
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
        <View style={{ alignItems: 'center' }}>
          <Text> {'\n'} </Text>
          <Text style={styles.Text}> Tasks </Text>
        </View>
        <Tabs>
          <Tab heading="Indevidual Tasks">
            <Content>
              <Card>
                <Card>
                  <Image source={{ uri: 'https://journocode.com/wp-content/uploads/2016/06/htmlCssJS.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
                </Card>
                <Text> Build Front-End web application using  HTML, CSS and Java Script, the application should have:</Text>
                <Text>* Login Page</Text>
                <Text>* Menu Bar</Text>
                <Text>* sepreat Pages linked together </Text> 
                <CardItem footer>
              <Text>24 Hours to complete this task</Text>
            </CardItem>
                <Text> {'\n'} </Text> 
                <Button block success> <Text> Submit Task </Text> </Button>
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
    justifyContent: "center",
  }
});
