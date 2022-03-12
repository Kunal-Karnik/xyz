import React, { Component } from 'react';
import {Image, ImageBackground, StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';
//import {Navigation} from 'react-native-navigation';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistrationScreen from './RegistrationScreen';




export default class WelcomeScreen extends Component {
    render() {

    return (
        <ImageBackground
            style = {styles.background}
            source={require('../assets/backGround.png')}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/splash.png')} />
            </View> 
            
            <View style ={styles.welcomeParagraph}>
                <Text>Welcome to Trackly, a digital learning and development tracker for childcare
                     settings in the UK. </Text>
            </View>

            <View style ={styles.introParagraph}>
                <Text>With Trackly, your childcare setting can efficiently manage children's learning and
                     development data in a central location. Keeping track of children’s progress in the
                    EYFS' 7 areas of learning and development is simplified by displaying each child's
                    current level in each area in a visually clear format which both parents and
                    practitioners can decipher at a glance, as well as potential activities (next steps)
                    for parents to do with their children, given the child’s age and current level. 
                </Text>
            </View>

                



            {/* function GoToButton({ RegistrationScreen }) {
                const navigation = useNavigation();
                return (
                    <Button
                      title={'Register'}
                      onPress={() => navigation.navigate('RegistrationScreen')}
                    />
                  );

            } */}

            {/* function ScreensButton() {
            // be careful to never call useNavigation in the press callback. Call hooks directly from the render function!
            const { navigate } = useNavigation();
            return (
                <Button
                    onPress={() => {
                    navigate('RegistrationScreen');
                }}
                title="Register"
                />
                );
            } */}





            <Button  
              title="Register"
                onPress={() => this.props.navigation.navigate('Registration')}
                //onPress={() => this.navigate('RegistrationScreen')}
            />


            




            

            {/* <Button
                title="Go to Login"
                onPress={() => navigation.navigate('LoginScreen')}
            /> */}

            <View style ={styles.buttonsParagraph}>
                <Text>
                    Click below to register or log in.
                </Text>
            </View>
            
            
            {/* <View style={styles.loginButton}>
                <Text>Login</Text>
            </View>

            <View style={styles.registerButton}>
                <Text>Register</Text>
            </View> */}
            
            
        </ImageBackground>
        
    );
    }
}



const styles=StyleSheet.create({
    background:{
        flex:1,
        justifyContent: 'flex-end',
        alignItems: "center"
    },
    buttonsParagraph:{
        position: 'absolute',
        top: 270,
        alignItems:'center',
        alignContent:'center',
        justifyContent: 'center',
    },

    introParagraph:{
        position: 'absolute',
        top: 175,
    },
    loginButton:{
        width:"20%",
        height:50,
        backgroundColor: '#7a4dda',
        alignItems:'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 300,
        right: 170,
    },
    logo:{
        width:100,
        height:100,
    },
    logoContainer:{
        position: 'absolute',
        top: 30,
        alignItems:'center'        
    },
    registerButton:{
        width:"20%",
        height:50,
        backgroundColor: "#f75a8F",
        alignItems:'center', 
        justifyContent: 'center',
        position: 'absolute',
        top: 300,
        left: 170,
    },
    welcomeParagraph:{
        position: 'absolute',
        top: 135,
        alignItems:'center',
        alignContent:'center',
        justifyContent: 'center',
    },
})


