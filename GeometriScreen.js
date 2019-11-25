import React from 'react';
import { Text, View, FlatList, StyleSheet, Image, TouchableOpacity} from 'react-native';

const geometri = [
    { name: 'Kubus', imageUrl: require('')},
    { name: 'Balok', imageUrl: require('')},
    { name: 'Jajar Genjang', imageUrl: require('')},
    { name: 'Trapesium', imageUrl: ''},
    { name: 'Kerucut', imageUrl: ''},
    { name: 'Lingkaran', imageUrl: ''},
    { name: 'Segitiga', imageUrl: ''},
    { name: 'Prisma', imageUrl: ''},
    { name: 'Limas', imageUrl: ''},
    { name: 'Tabung', imageUrl: ''}
];

const GeometriScreen = () => {
    return (
        <FlatList 
            data={geometri}
            renderItem={({ item })=>
                <TouchableOpacity onPress={() => console.log("touchable clicked")}>
                    <View style={styles.textStyle}>
                        <Image 
                            style={{width: 200, height: 200}}
                            //source={{uri: item.imageUrl}}
                            //source={require(`../assets/apple-logo.jpg`)}
                            source={item.imageUrl}
                        />
                        <Text >
                            {item.name}
                        </Text>
                    </View>
                </TouchableOpacity>
                }
                
            keyExtractor={item => item.name}
        />
    );
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 100
    }
});

export default GeometriScreen;