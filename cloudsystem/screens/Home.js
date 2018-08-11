import React from 'react';
import { Container, Header, Content, Badge, Text, Icon, Body, Card, CardItem, Left, Right, Button, Thumbnail } from 'native-base';
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

export default class Home extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container>
         <View style={{ alignItems: 'center' }}>
          <Text> {'\n'} </Text>
          <Text style={styles.Text}> What's New </Text>
          </View>
  <Content>
  <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://jabbareh.files.wordpress.com/2011/12/personal-information.png'}} />
                <Body>
                  <Text>Nawaf Alharby</Text>
                  <Text note>2 Hours ago</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri:'https://thumbs.dreamstime.com/b/error-page-not-found-pink-heart-split-half-91274221.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                <Text>
                 Does anyone knows why this error is showing every time I Try to deploy my app on Github ? 
                </Text>
              </Body>
            </CardItem>        <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://jabbareh.files.wordpress.com/2011/12/personal-information.png'}} />
                <Body>
                  <Text>Nawaf Alharby</Text>
                  <Text note>2 Hours ago</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri:'https://thumbs.dreamstime.com/b/error-page-not-found-pink-heart-split-half-91274221.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                <Text>
                 Does anyone knows why this error is showing every time I Try to deploy my app on Github ? 
                </Text>
              </Body>
            </CardItem>
          </Card>
  </Content>
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

