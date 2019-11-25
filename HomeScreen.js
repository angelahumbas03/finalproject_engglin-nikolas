import React from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
    
    return (
        <View>
            
            <Text> Home Screen </Text>
            <Button
                icon={
                <Icon
                    name="arrow-right"
                    size={15}
                    color="white"
                />
                }
                title="Objek Geometri"
                onPress={()=> navigation.navigate('Main')}
                />
            <Button 
                title="About"
                onPress={()=> navigation.navigate('About')}
            />
            <Button  
                title="Help"
                onPress={()=> navigation.navigate('Help')}
            />
            <Button 
                title="Exit"
                onPress={()=> navigation.navigate('Exit')}
            />
            

        </View>
        
    );
};

export default HomeScreen;