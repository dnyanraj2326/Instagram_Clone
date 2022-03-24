import React,{useEffect,useState} from 'react';
import { StatusBar, StyleSheet, Text, View,Image,TouchableOpacity, Animated } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';


const Status = ({route, navigation}) => {
    const { name } = route.params;
    const { image } = route.params;

    useEffect(() => {
        let timer = setTimeout(() => {
            navigation.goBack();
        }, 5000);

        Animated.timing(progress, {
            toValue: 5,
            duration: 5000,
            useNativeDriver: false,
        }).start();
        return () => clearTimeout(timer);
    }, []);


    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnimation = progress.interpolate({
        inputRange: [0, 5],
        outputRange: ['0%', '100%'],
    });
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black" barStyle='light-content' />
            <View style={styles.line}>
                <Animated.View style={{backgroundColor: 'white',
                            width: progressAnimation,
                            height:'100%'}}></Animated.View>
            </View>
                <View style={styles.image}>
                    <View style={styles.ProfileImg}>
                    <Image source={{ uri: image }} style={{ borderRadius: 100, backgroundColor: 'orange', width: '92%', height: '92%', resizeMode: 'cover' }} />
                    </View>
                    <View style={{width:'100%', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <Text style={{
                        color: 'white',
                        fontSize: 13
                    }}> {name} </Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="close" style={{fontSize:20,color:'white', opacity:0.6}} /> 
                    </TouchableOpacity>
                    </View>
                </View>
            <Image source={{ uri: image }} style={{
                height: 630, width: '100%', position: 'absolute',}} />
            <View style={styles.inputs}>
                <TextInput 
                    placeholder='Send Massage'
                    placeholderTextColor="white"
                    style={{borderColor:'white',borderRadius:25,width:'85%',height:50,paddingLeft:20,borderWidth:1,fontSize:15, color:'white'}}
                />
                <TouchableOpacity onPress={() => navigation.goBack()}>
                     <Feather name="navigation" size={30} color="#ffffff" />
                </TouchableOpacity>
               
            </View>
        </View>
    )
}

export default Status

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: '100%',
        position: 'relative',
        justifyContent: 'center',
        alignItems:'center'
    },
    line: {
        position: 'absolute',
        top: 20,
        backgroundColor: 'gray',
        height: 3,
        width: '95%',
        borderWidth:1
        
    },
    
    ProfileImg: {
        width: 30,
        height: 30,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:"row"
    },
    image: {
        position: 'absolute',
        top: 15,
        left: 0,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    inputs: {
        position: 'absolute',
        bottom: 0,
        left:0,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        justifyContent: 'space-around',
        width:'100%'
    }
})
