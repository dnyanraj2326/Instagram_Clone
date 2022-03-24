import React, { useState } from 'react'
import { StyleSheet, Text, View, Image,TouchableOpacity,TextInput} from 'react-native';
import PostData from './PostData';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';




const Post = () => {
    return (
        <View>
            {
                PostData.map((data,index) => {
                    const [like, setLike] = useState(data.isLiked)
                    return (
                        <View style={styles.cards} key={index}>
                            <View style={styles.card}>
                                <View style={{ flexDirection:'row',alignItems:'center'}} >
                                    <Image source={{ uri: data.postPersonImg }} style={{ borderRadius: 100, width: 40, height: 40, resizeMode: 'cover' }} />
                                    <View>
                                        <Text style={{paddingLeft:10,fontWeight:'bold',color:'black'}}>{data.postTitle}</Text>
                                    </View>
                                </View>
                                <Entypo name="dots-three-vertical" size={20} color="black" />
                            </View>
                            <View style={{position:'relative',justifyContent:'center',alignItems:'center'}}>
                                <Image source={{ uri: data.postImg }} style={{ width: '100%', height: 400, resizeMode: 'cover' }} />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',paddingHorizontal:12,paddingVertical:15 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                    <TouchableOpacity onPress={() => setLike(!like)}>
                                        <AntDesign name={like ? "heart" : "hearto"} size={20} color={like ? 'red' : 'black'} style={{paddingRight:10}}/>
                                    </TouchableOpacity> 
                                    <TouchableOpacity>
                                        <Ionicons name="chatbubble-outline" size={20} color="black" style={{paddingRight:10}}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Feather name="navigation" size={20} color="black" />
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Feather name="bookmark" size={20} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{paddingHorizontal:15}}>
                                <Text style={{color:'black'}}>
                                    Liked by {like?"you and" :""} {""}
                                    {like ? data.likes + 1 :data.likes} other
                                </Text>
                                <Text style={{fontWeight:'700', fontSize:14, paddingVertical:2, color:'black'}}>
                                    {data.caption}
                                </Text>
                                <Text style={{paddingVertical:2,opacity:0.4, color:'black'}}>
                                    View all comment...
                                </Text>
                                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Image source={{ uri: data.postPersonImg }} style={{ borderRadius: 100, width: 25, height: 25, resizeMode: 'cover', backgroundColor: 'orange', paddingRight: 10 }} />
                                        <TextInput 
                                            placeholder='Add a comment'
                                            style={{opacity:0.9, color:'black',}}
                                        />
                                    </View>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Entypo name="emoji-happy" size={15} color="lightgreen" style={{paddingRight:10}} />
                                        <Entypo name="emoji-sad" size={15} color="red" style={{paddingRight:10}}/>
                                        <Entypo name="emoji-flirt" size={15} color="pink" />
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    cards: {
        paddingBottom: 10,
        borderBottomColor: 'gray',
        borderBottomWidth:0.1
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding:15
    }
})
