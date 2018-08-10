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
      
      //Jehan's code 
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      
       <View style={styles.loginScreenContainer}>

   <Image
    style={{
    width: 115,
    height: 104,
   marginLeft: 130,
  marginTop: 150,

  }}
  source={require('./download.png')}
/>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>Cloudsystems</Text>
          //here we have to put a bar the has the choice of either sing in or sing up, i did the sign in one, edit it the way you like 

            <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <Button
              but              
              tonStyle={styles.loginButton}
              onPress={() => this.onLoginPress()}
              title="Sign in"
              //there's supposed to be a a link for forgot the password, please add it 
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }// here jehan's code end 
  
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
