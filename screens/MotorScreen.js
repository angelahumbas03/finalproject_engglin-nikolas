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
} from 'react-native';

export default class Store extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Velg",  price:"$ 70.00 USD", image:"https://cdn1-production-images-kly.akamaized.net/YzNw3o9nY-PnbmUgfsrYUTtCFrY=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2261970/original/074070700_1530170365-0000461785.jpg"},
        {id:2, title: "Ban luar",  price:"$ 34.19 USD", image:"https://i0.wp.com/starpartsmotor.com/wp-content/uploads/2019/01/Jual-ban-motor-murah-harga-terjangkau-distributor-grosir-tubeless-tubetype-soft-compound-intermediate-reguler-sport-mp-matic-ban-motor-racing-speed-film-indonesia-download-lowongan-1.png?fit=400%2C622&ssl=1"} ,
        {id:3, title: "Mesin",  price:"$ 250 USD", image:"https://www.motoris.id/wp-content/uploads/2018/03/Mesin-motor-injeksi-Motoris.jpg"}, 
        {id:4, title: "Body kit",  price:"$ 900 USD", image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//96/MTA-2892471/acerbis_acerbis-set-body-kit-motor-for-yamaha-yzf-250-tahun-2014-2017_full02.jpg"}, 
        {id:5, title: "Spion",  price:"$ 32.00 USD", image:"https://id-test-11.slatic.net/p/8/spion-tomok-full-cnc-model-rizoma-tomok-2-spion-motor-merah-4658-74143041-95aeb12e27f0f1aa22e7ae5d28956549.jpg_340x340q80.jpg_.webp"}, 
        {id:6, title: "Tempat duduk",  price:"$ 33.00 USD", image:"https://ecs7.tokopedia.net/img/cache/700/product-1/2018/9/29/1371781/1371781_7e45e9f4-ee11-4094-9318-aa974ed5551e_1512_1512.jpg"}, 
        {id:7, title: "Stir",  price:"$ 45.00 USD", image:"https://cdns.klimg.com/otosia.com/p/headline/476x238/0000451883.jpg"}, 
        {id:8, title: "Kenalpot",  price:"$ 100.60 USD", image:"https://www.carmudi.co.id/journal/wp-content/uploads/2017/01/knalpot-racing-1.jpg"},
        {id:9, title: "lampu LED", price:"$ 21.30 USD", image:"https://www.jakartanotebook.com/images/products/80/63/25397/2/lampu-headlight-motor-led-35w-h4-m20e-black-1.JPG"},
      ]
    };
  }

  addProductToCart = () => {
    Alert.alert('Success', 'The product has been added to your cart')
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <View style={styles.card}>
               
               <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                  </View>
                </View>

                <Image style={styles.cardImage} source={{uri:item.image}}/>
                
                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton} onPress={() => this.addProductToCart()}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/nolan/96/3498db/add-shopping-cart.png'}}/>
                        <Text style={[styles.socialBarLabel, styles.buyNow]}>Buy Now</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/color/50/000000/hearts.png'}}/>
                        <Text style={styles.socialBarLabel}>25</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
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
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center'
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white",
    flexBasis: '47%',
    marginHorizontal: 5,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title:{
    fontSize:18,
    flex:1,
  },
  price:{
    fontSize:16,
    color: "green",
    marginTop: 5
  },
  buyNow:{
    color: "purple",
  },
  icon: {
    width:25,
    height:25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});   // import React from 'react';
// import { Text, View, FlatList, StyleSheet, Image, TouchableOpacity} from 'react-native';

// const students = [
//     { name: 'Student #1', fakultas: 'FIK', imageUrl: require('../assets/beach.jpg')},
//     { name: 'Student #2', fakultas: 'FEB', imageUrl: require('../assets/forest.jpg')},
//     { name: 'Student #3', fakultas: 'Nursing', imageUrl: require('../assets/mountain.jpg')},
//     { name: 'Student #4', fakultas: 'Education', imageUrl: 'https://via.placeholder.com/150/92c952'},
//     { name: 'Student #5', fakultas: 'FIK', imageUrl: 'https://via.placeholder.com/150/92c952'},
//     { name: 'Student #6', fakultas: 'Filsafat', imageUrl: 'https://via.placeholder.com/150/92c952'},
//     { name: 'Student #7', fakultas: 'Pertanian', imageUrl: 'https://via.placeholder.com/150/92c952'},
//     { name: 'Student #8', fakultas: 'ASMII', imageUrl: 'https://via.placeholder.com/150/92c952'},
//     { name: 'Student #9', fakultas: 'FIK', imageUrl: 'https://via.placeholder.com/150/92c952'},
//     { name: 'Student #10', fakultas: 'FIK', imageUrl: 'https://via.placeholder.com/150/92c952'}
// ];

// const StudentScreen = () => {
//     return (
//         <FlatList 
//             data={students}
//             renderItem={({ item })=>
//                 <TouchableOpacity onPress={() => console.log("touchable clicked")}>
//                     <View style={styles.textStyle}>
//                         <Image 
//                             style={{width: 200, height: 200}}
//                             //source={{uri: item.imageUrl}}
//                             //source={require(`../assets/apple-logo.jpg`)}
//                             //source={item.imageUrl}
//                         />
//                         <Text >
//                             {item.name}
//                         </Text>
//                         <Text>
//                             {item.fakultas}
//                         </Text>
//                     </View>
//                 </TouchableOpacity>
//                 }
                
//             keyExtractor={item => item.name}
//         />
//     );
// };

// const styles = StyleSheet.create({
//     textStyle:{
//         marginVertical: 100
//     }
// });

// export default StudentScreen;