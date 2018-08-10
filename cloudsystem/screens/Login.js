import React from 'react';
import { Container, Header, Content, Badge, Text, Icon, Body, Tabs, Tab, Card, CardItem, Input } from 'native-base';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class Login extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }



  render() {
    return (
      <Container>
        <Header hasTabs />
        <CardItem cardBody>
              <Image source={{uri: 'https://www.logolynx.com/images/logolynx/62/62ca7aaf03633173c02c1cfd69d3e02d.jpeg'}} style={{height: 100, width: null, flex: 1}}/>
            </CardItem>
        <Tabs>
        <Tab heading="Log-In">
        <Content>
        <Text> {'\n'} </Text>
            <Card>
              <Input
                placeholder="Email:"
                onChangeText={(text) => this.setState({ text })}
              />
            </Card>
            <Card>
              <Input
                placeholder="Password:"
                onChangeText={(text) => this.setState({ text })}
              />
            </Card>
            </Content>
        </Tab>
       

      <Tab heading="Sign-Up">
        <Content>
        <Text> {'\n'} </Text>
            <Card>
              <Input
                placeholder="User Name:"
                onChangeText={(text) => this.setState({ text })}
              />
            </Card>
            <Card>
              <Input
                placeholder="Email:"
                onChangeText={(text) => this.setState({ text })}
              />
            </Card>
            <Card>
            <Input
                placeholder="Password:"
                onChangeText={(text) => this.setState({ text })}
              />
              </Card>
        </Content>
        </Tab>
        

        </Tabs>

      </Container>
    );
  }
}
