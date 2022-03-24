import React, {useState} from 'react'
import { StyleSheet, ScrollView, View, StatusBar, Dimensions, Image,Text } from 'react-native'
import SearchBox from '../components/SearchBox'
import SearchContent from '../components/SearchContent'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
                                              
                                                                                                             
const Search = () => {
    const [image, setImage] = useState(null);

    const getData = (data) => {
        setImage(data);
    }

    const windowWidth = Dimensions.get('window').width
    const windowHeight = Dimensions.get('window').height
    return (
        <View style={{
            width:'100%',
            height: '100%',
            backgroundColor: 'white',
            position:'relative'
        }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <SearchBox />
                <SearchContent data={getData}/>
            </ScrollView>
            {
                image ?
                    (
                        <View style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(52,52,52,0.8)',
                            zIndex:1,
                        }}>
                            <StatusBar backgroundColor='#525252' barStyle="dark-content" />
                            <View style={{
                                position: 'absolute',
                                top: windowHeight / 6,
                                left: windowWidth / 18,
                                backgroundColor: 'white',
                                width: 350, height: 465,
                                zIndex: 1,
                                elevation: 50,
                                borderRadius:10,
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center', paddingHorizontal: 15,
                                    paddingVertical:10
                                }}>
                                    <Image source={{ uri: image }} style={{
                                        width: 30,
                                        height: 30,
                                        borderRadius:100,
                                    }} />
                                    <View style={{paddingLeft:8}}>
                                        <Text style={{fontSize:12,fontWeight:'bold',color:'black'}}>mr-diffrent_guy</Text>
                                    </View>
                                </View>
                                <Image source={{uri:image}} style={{width:'100%',height:'80%'}} />
                                <View style={{ flexDirection: 'row', justifyContent:'space-around',alignItems:'center',marginTop:10,}}>
                                        <AntDesign name='hearto' size={22} color='black' />
                                        <Ionicons name="chatbubble-outline" size={22} color="black" />
                                        <Ionicons name="person-circle-outline" size={22} color="black" />
                                    <Entypo name="dots-three-vertical" size={22} color="black" />
                                </View>
                            </View>
                        </View>
                    ) : null
            }
        </View>
    )
}

export default Search

const styles = StyleSheet.create({})
