import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Dimensions
} from 'react-native';


var {height, width} = Dimensions.get('window');

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:2,  title: "Aksesoris Mobil", screen: "Mobil", color:"#4287F5", image:"https://www.pngrepo.com/png/178/170/car-compact.png"},
        {id:3,  title: "Aksesoris Motor", screen: "Motor", color:"#4BCF3C", image:"https://www.pngrepo.com/png/113750/170/motorbike.png"} ,
        {id:4,  title: "Log Out", screen: "Login", color:"#E8FF3D", image: "https://www.pngrepo.com/png/55650/170/logout.png"} ,
      ]
    };
  }

  clickEventListener(screenName) {

    this.props.navigation.navigate(screenName)
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={[styles.card, {backgroundColor:this.state.data[0].color}]} onPress={() => {this.clickEventListener(this.state.data[0].screen)}}>
            <Image style={styles.cardImage} source={{uri:this.state.data[0].image}}/>
            <Text style={styles.title}>{this.state.data[0].title}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, {backgroundColor:this.state.data[1].color}]} onPress={() => {this.clickEventListener(this.state.data[1].screen)}}>
            <Image style={styles.cardImage} source={{uri:this.state.data[1].image}}/>
            <Text style={styles.title}>{this.state.data[1].title}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, {backgroundColor:this.state.data[2].color}]} onPress={() => {this.clickEventListener(this.state.data[2].screen)}}>
            <Image style={styles.cardImage} source={{uri:this.state.data[2].image}}/>
            <Text style={styles.title}>{this.state.data[2].title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    //paddingHorizontal: 5,
    backgroundColor:"#346EC9",
  },

  /******** card **************/
  card:{
    width: width,
    height:150,
    flexDirection:'row',
    padding:20,

    justifyContent: 'center', 
    alignItems: 'center' 
  },
  cardImage:{
    height: 70,
    width: 70,
  },
  title:{
    fontSize:28,
    flex:1,
    color:"#FFFFFF",
    fontWeight:'bold',
    marginLeft:40
  },
  subTitle:{
    fontSize:12,
    flex:1,
    color:"#FFFFFF",
  },
  icon:{
    height: 20,
    width: 20, 
  }
}); 
