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
                <Image source={{uri:'https://thumbs.dreamstime.com/b/error-page-not-found-pink-heart-split-half-91274221.jpg'}} style={{height: 200, width:320, flex: 1}}/>
                <Text>
                 Does anyone knows why this error is showing every time I Try to deploy my app on Github ? 
                </Text>
              </Body>
            </CardItem>
            <CardItem>
            <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon type="FontAwesome" name="thumbs-o-up" />
                  <Text>7 likes</Text>
                </Button>
              </Left>
              <Right>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon type="FontAwesome" name="comments" />
                  <Text>3 Comments</Text>
                </Button>
              </Right>
              </CardItem>
            </Card>

            <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://cdn4.iconfinder.com/data/icons/groups-and-people-line/120/line_group_girls-512.png'}} />
                <Body>
                  <Text>Jehan Ashor</Text>
                  <Text note>15 Hours ago</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri:'https://www.fespugtmadrid.es/wp-content/uploads/2017/02/reunion.png'}} style={{height: 200, width: 320, flex: 1}}/>
                <Text>
                We are so happy to announce that Mr.Alslamah will be joining us next week at zoom meetings, so that
                we can learn from his knowledge and bla bla bla ..  
                </Text>
              </Body>
            </CardItem>
            <CardItem>
            <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon type="FontAwesome" name="thumbs-o-up" />
                  <Text>113 likes</Text>
                </Button>
              </Left>
              <Right>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon type="FontAwesome" name="comments" />
                  <Text>42 Comments</Text>
                </Button>
              </Right>
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

