import React from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, H1,
   Button, Right, Badge, Icon} from 'native-base';
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
import Login from './Login';

export default class First extends React.Component {
    render() {
      return (
        <Container>
        <Content>
          <Card>
            <CardItem cardBody>
              <Image source={{uri: 'https://www.logolynx.com/images/logolynx/62/62ca7aaf03633173c02c1cfd69d3e02d.jpeg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Body>
              <View style={{alignItems: 'center'}}>
              <Text style={styles.Text}>{'\n Welcome to cloud systems App\n'}</Text>
              </View>
              </Body>
            </CardItem>
            <Button block info>
              <Text
              onPress={<Login/>}
              >Start</Text>
            </Button>
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
      fontSize: 40,
      alignItems: "center",
      justifyContent:"center",
    }
  });
