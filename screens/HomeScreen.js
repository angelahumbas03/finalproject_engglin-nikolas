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
        {id:2,  title: "Bahan Mobil",    color:"#87CEEB", image:"https://www.pngrepo.com/png/105359/170/car.png"},
        {id:3,  title: "about",     color:"#4682B4", image:"https://cdn3.iconfinder.com/data/icons/media-icons-23/100/info2-512.png"} ,
        {id:4,  title: "log out",   color:"#6A5ACD", image:"https://cdn4.iconfinder.com/data/icons/basic-ui-elements/700/012_power-512.png"} ,
      ]
    };
  }

  clickEventListener(item) {
    // Alert.alert(Mobil)
    // onPress={() => navObj.navigate(screenName)}
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={[styles.card, {backgroundColor:item.color}]} onPress={() => {this.clickEventListener(item)}}>
                <Image style={styles.cardImage} source={{uri:item.image}}/>
                <Text style={styles.title}>{item.title}</Text>
              </TouchableOpacity>
            )
          }}/>
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
    backgroundColor:"#E6E6E6",
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
// import { View, Text, Button, ImageBackground } from 'react-native';
// import ImageDetail from '../components/ImageDetail';
// import ImageDetail1 from '../components/ImageDetail';

// const HomeScreen = ({ navigation }) => {
    
//     return (
//         <View>
//             <ImageDetail 
//                 title="Test"
//                 imageSource={require('../assets/mobil.jpg')}
//                 rating="5"
//                 navObj={navigation}
//                 screenName="Mobil"
//             />
//             <ImageDetail 
//                 title="Test"
//                 imageSource={require('../assets/Motor.jpg')}
//                 rating="5"
//                 navObj={navigation}
//                 screenName="Motor"
        //     />
        //     {/* <Button 
        //         title="Go to Component Screen"
        //         onPress={()=> navigation.navigate('Component')}
        //     />
        //     <Button 
        //         title="Go to Student Screen"
        //         onPress={()=> navigation.navigate('Student')}
        //     />
        //     <Button 
        //         title="Go to Image Screen"
        //         onPress={()=> navigation.navigate('Image')}
        //     />
        //     <Button 
        //         title="Go to Counter Screen"
        //         onPress={()=> navigation.navigate('Counter')}
        //     /> */}

            

        // </View>
        
//     );
// };

// export default HomeScreen;