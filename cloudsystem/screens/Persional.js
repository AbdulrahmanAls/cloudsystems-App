import React from 'react';
import {
  Container, Header, Content, Badge, Text, Icon, Body, Card, CardItem, Left, Thumbnail,Button,
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
          <View style={{ alignItems: 'center' }}>
          <Text> {'\n'} </Text>
          <Text style={styles.Text}> Settings and Profile </Text>
        </View>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: 'https://cdn0.iconfinder.com/data/icons/PRACTIKA/256/user.png' }} />
              <View>
                <Text>{'         '} User Name: </Text>
                <Text> {'\n'} </Text>
                <Text> Email: </Text>
              </View>
              </Left>

              <Button
                  onPress={() => {
                    Alert.alert('You tapped the button!');
                  }}
                  title="Press Me"
                />
            </CardItem>
            </Card>
            <Text> {'\n'} </Text>
            <Card>
            <CardItem>
              <Icon active name="md-settings" />
              <Text>Settings</Text>
             </CardItem>
             <CardItem>
              <Icon type="Entypo" name="book" />
              <Text>Policy</Text>
             </CardItem>
             <CardItem>
              <Icon active name="md-call" />
              <Text>Contact us</Text>
             </CardItem>
             <CardItem>
              <Icon type="Entypo" name="log-out" />
              <Text>Log-Out</Text>
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
