import React from 'react';
import { Text, View, Image, Button } from 'react-native';

const ImageDetail = ({ imageSource, imagesource, title, rating, navObj, screenName, screenname}) => {
    return (
        <View style={{ padding: 10}}>
            <Image 
                style={{width: "100%", height: "30%"}}
                source={imageSource}
            />
            <Button 
                title="Lihat"
                onPress={() => navObj.navigate(screenName)}
            
            />
             <Image 
                style={{width: "100%", height: "30%"}}
                source={imageSource}
            />
            <Button 
                title="Lihat"
                onPress={() => navObj.navigate(screenName)}
            
            />

            
           
        </View>
        
    )
};

export default ImageDetail;

