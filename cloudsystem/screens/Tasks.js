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
        <CardItem cardBody>
              <Image source={{uri: 'https://www.logolynx.com/images/logolynx/62/62ca7aaf03633173c02c1cfd69d3e02d.jpeg'}} style={{height: 100, width: null, flex: 1}}/>
            </CardItem>
            <View style={{alignItems: 'center'}}>
            <Text> {'\n'} </Text>
            <H1 style={styles.Text}> Tasks </H1>
            <Text> {'\n'} </Text>
            </View>
        <Tabs>
        <Tab heading="Indevidual Tasks">
        <Content>
            <Card>
              <Text>  Solo  </Text>
            </Card>
            </Content>
        </Tab>
       

      <Tab heading="Group Tasks">
        <Content>
            <Card>
            <Text>  Group  </Text>
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
