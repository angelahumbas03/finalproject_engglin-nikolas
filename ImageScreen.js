import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';


export default class ImageScreen extends React.Component{
    render(){
        return(
            <View>
            <ImageDetail 
                title="Beach"
                imageSource={require('../assets/beach.jpg')}
                rating="5"
            />
            <ImageDetail 
                title="Forest"
                imageSource={require('../assets/forest.jpg')}
                rating="4"
            />
            <ImageDetail 
                title="Mountain"
                imageSource={require('../assets/mountain.jpg')}
                rating="3"
            />
        </View>
        )
    }
}

// const ImageScreen = () => {
//     return (
//         <View>
//             <ImageDetail 
//                 title="Beach"
//                 imageSource={require('../assets/beach.jpg')}
//                 rating="5"
//             />
//             <ImageDetail 
//                 title="Forest"
//                 imageSource={require('../assets/forest.jpg')}
//                 rating="4"
//             />
//             <ImageDetail 
//                 title="Mountain"
//                 imageSource={require('../assets/mountain.jpg')}
//                 rating="3"
//             />
//         </View>
//     );
// }

const styles = StyleSheet.create({});

// export default ImageScreen;