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
        {id:1, title: "Velg",  price:"$ 50.00 USD", image:"https://www.otomotifo.com/wp-content/uploads/2018/10/Foto-Velg-Mobil-Ring-17-9.jpg"},
        {id:2, title: "Ban luar",  price:"$ 41.13 USD", image:"https://s.kaskus.id/r480x480/images/fjb/2017/10/15/ban_mobil_merk_toyo_proxes_t1r_ukuran_195_55_r16_9852611_1508043734.jpg"} ,
        {id:3, title: "Mesin",  price:"$ 200 USD", image:"https://i1.wp.com/pedaltiga.com/wp-content/uploads/2018/02/Cara-Meningkatkan-Tenaga-Mesin-Mobil.png?ssl=1"}, 
        {id:4, title: "Body kit",  price:"$ 400.00 USD", image:"https://id-test-11.slatic.net/p/0e463f0e0d8fd8797af6183b4ffac482.jpg_340x340q80.jpg_.webp"}, 
        {id:5, title: "Spion",  price:"$ 35.00 USD", image:"data:image/jpeg;base64,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"}, 
        {id:6, title: "Tempat duduk",  price:"$ 33.00 USD", image:"https://cf.shopee.co.id/file/100fe1ff66ef1e2c918b847202fbd8a9"}, 
        {id:7, title: "Stir",  price:"$ 350.95 USD", image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//96/MTA-2783075/carfu_carfu-lv-sarung-stir-mobil---cream_full02.jpg"}, 
        {id:8, title: "Kenalpot",  price:"$ 30.60 USD", image:"https://s0.bukalapak.com/uploads/content_attachment/fce89b6d30e8d762ea2115c5/w-744/HKSMufflerTitaniumTip-1904.JPG"},
        {id:9, title: "sayap belakang",  price:"$ 26.30 USD", image:"https://ae01.alicdn.com/kf/HTB1YFIzQVXXXXcNXpXXq6xXFXXXC/Universal-Hitam-GT-AdjustableLightweight-Aluminium-Mobil-Belakang-Wing-Spoiler-Belakang-Bagasi-Sayap-Balap-Racing-Spoiler.jpg"},
        {id:9, title: "lampu LED", price:"$ 21.30 USD", image:"https://visicomled.com/wp-content/uploads/2017/10/2011-BMW-Vision-ConnectedDrive-Headlights-1280x960.jpg"},
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
});   