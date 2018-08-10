import React from 'react';
import { Container, Header, Content, Badge, Text, Icon, Body, Card, CardItem, Left, Thumbnail,
  } from 'native-base';
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

export default class Persional extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container>
      <Content>
        <Header/>
      <Card style={{flex: 0}}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: 'https://cdn0.iconfinder.com/data/icons/PRACTIKA/256/user.png'}} />
                    </Left>
                  </CardItem>
    
       </Card>
    
    <Card>
    
      </Card>
      </Content>
    </Container>
    );
  }
}
