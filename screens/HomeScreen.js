import React,{Component} from 'react';
import {Text,
        View,
        StyleSheet,
        Platform,
        StatusBar,
        SafeAreaView,
        TextInput,
        TouchableOpacity,
        Image,
        ImageBackground} from 'react-native'

export default class HomeScreen extends React.Component{
 render(){
   return(
     <View style={styles.container}>
    <SafeAreaView style={styles.droidSafeArea}/>
    
              <View style={styles.titleBar}>
              <Text style={styles.titleText}>Remainder🔔</Text>
               </View>

             <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Weather")
                    }>
                        <Text style={styles.routeText}>weather</Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        
                        <Image source={require("../climate.png")} style={styles.iconImage}></Image>
              </TouchableOpacity>
    
               <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Calendar")
                    }>
                        <Text style={styles.routeText}>calendar</Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        
                        <Image source={require("../calendar.png")} style={styles.iconImage}></Image>
                    </TouchableOpacity>

                     <TouchableOpacity style={styles.routeCard} 
                     onPress={() =>
                        this.props.navigation.navigate('Notification')
                    }>
                        <Text style={styles.routeText}>notification</Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        
                        <Image source={require('../bel.png')} style={styles.iconImage}></Image>

              </TouchableOpacity>
  
     </View>

   )
 }

}
const styles = StyleSheet.create({
  container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black"
    },
    routeText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30,
        marginLeft:-20
    },
    knowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15
    },
    bgDigit: {
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 100,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
    iconImage: {
        position: "absolute",
        marginTop:40,
        height: 150,
        width: 150,
        resizeMode: "contain",
        right: 20,
        top: -80
    }
})