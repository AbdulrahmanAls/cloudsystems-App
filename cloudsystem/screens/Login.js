import React from 'react';
import { Container, Header, Content, Badge, Text, Icon, Body, Tabs, Tab, Card, CardItem, Input ,Button} from 'native-base';
import {MainTabNavigator} from "../navigation/MainTabNavigator";
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
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD8J8ZrX41YJFwrzhpKoPc-xSmzuNP8eU4",
  authDomain: "cloudsystem-app-group-a.firebaseapp.com",
  databaseURL: "https://cloudsystem-app-group-a.firebaseio.com",
  projectId: "cloudsystem-app-group-a",
  storageBucket: "cloudsystem-app-group-a.appspot.com",
  messagingSenderId: "219775894185"
};
firebase.initializeApp(config);

import { MonoText } from '../components/StyledText';

export default class Login extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor() {
    super();
    this.state = {
      EmailLogin: '',
      password: '',
      userName:''
    };
  }

  signUpUser = (EmailLogin,password) =>{
    try{
        if(this.state.password.length<8){
          alert("please enter more then 8 char")
        }
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(EmailLogin,password)

    }catch(error){
      console.log(error.toString());

    }

  }
  loginUser = (EmailLogin,password) =>{
    try{
      firebase.auth().signInWithEmailAndPassword(EmailLogin,password).then(function (user){
        console.log(user)
        // return(<MainTabNavigator/>)

      })
    }catch(error){
      console.log(error.toString());
    }

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
                onChangeText={(EmailLogin) => this.setState({ EmailLogin })}
              />
            </Card>
            <Card>
              <Input
                placeholder="Password:"
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(password) => this.setState({ password })}

              />
            </Card>
            <Button
              block
              info
              success
              onPress = {() => this.loginUser(this.state.EmailLogin,this.state.password)}
             >
              <Text>Login</Text>
            </Button>

            </Content>
        </Tab>


      <Tab heading="Sign-Up">
        <Content>
        <Text> {'\n'} </Text>
            <Card>
              <Input
                placeholder="User Name:"
                onChangeText={(userName) => this.setState({ userName })}
              />
            </Card>
            <Card>
              <Input
                placeholder="Email:"
                onChangeText={(EmailLogin) => this.setState({ EmailLogin })}
              />
            </Card>
            <Card>
            <Input
                placeholder="Password:"
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(password) => this.setState({ password })}
              />
              </Card>
              <Button
                block
                info
                success
                onPress = {() => this.signUpUser(this.state.EmailLogin,this.state.password)}
               >
                <Text>Sign Up</Text>
                  </Button>
        </Content>
        </Tab>


        </Tabs>

      </Container>
    );
  }
}


/*
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Auth: null,
      email: '',
      password: '',
    };
  }

  onLogin = (email, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .than(function(user) {
          console.log(user);
          this.setState({ Auth: firebase.auth().currentUser });
        });
    } catch (error) {
      console.log(error.toString());
      var user = firebase.auth().currentUser;
      var uid;
      uid = user.uid;
      this.setState({ Auth: uid });
      Alert.alert('Credentials', `${this.state.Auth}`);
    }
  };
  render() {
    if (!this.state.Auth) {
      return (
        <View style={styles.container}>
          <TextInput
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder={'email'}
            style={styles.input}
          />
          <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder={'Password'}
            secureTextEntry={true}
            style={styles.input}
          />

          <Button
            title={'LogIn'}
            style={styles.input}
            onPress={() => this.onLogin(this.state.email,         this.state.password)}
          />
        </View>
      );
    } else {
      return <RootStack />;
    }
  }
}
*/