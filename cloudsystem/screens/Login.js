import React from 'react';
import { Container, Header, Content, Badge, Text, Icon, Body } from 'native-base';
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

export default class Login extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container>
  <Header />
  <Content>
    <Body>
   <Text> I am login </Text>
  </Body>
  </Content>
</Container>
    );
  }
}
