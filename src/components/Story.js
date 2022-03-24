import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const Story = () => {
    const navigation = useNavigation(); 
    const StoryInfo = [
        {
            id: 1,
            name: "Your Story",
            image:"https://images.unsplash.com/photo-1635003913011-95971abba560?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=456&q=80"
        },
        {
            id: 0,
            name: "Rushi Shinde",
            image:"https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 0,
            name: "Saloni Khatri",
            image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 0,
            name: "White Tiger",
            image:"https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 0,
            name: "Mayur Patil",
            image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 0,
            name: "Ganesh Desai",
            image:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
    ]
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingVertical:10}}>
            {
                StoryInfo.map((data, index) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('Status',
                        {
                            name: data.name,
                            image: data.image,
                        }
                    )}
                        key={index} >
                        <View style={styles.imgIcon}>
                            {
                                data.id === 1 ? 
                                    (
                                        <View style={styles.plusIcon}>
                                            <Entypo name="circle-with-plus" style={{fontSize:20,color:'#405de6', backgroundColor:'white', borderRadius:100}} />   
                                        </View>
                                    ) :
                                    null

                            }
                            <View style={styles.image}>
                                <Image source={{ uri: data.image }} style={{width:'92%',height:'92%',borderRadius:100,resizeMode:'cover'}}/>
                            </View>
                            <Text style={{fontSize:10, color:'black',textAlign:'center',opacity: data.id === 0 ? 1 : 0.5}}>{ data.name}</Text>
                        </View>

                    </TouchableOpacity>
                )
                })
            }
        </ScrollView>
    )
}

export default Story

const styles = StyleSheet.create({
    plusIcon: {
        position: 'absolute',
        bottom: 14,
        right: 10,
        zIndex:1
    },
    imgIcon: {
        position: 'relative',
        paddingHorizontal:8
    },
    image: {
        width: 68,
        height: 68,
        borderRadius: 100,
        backgroundColor: 'white',
        borderWidth: 1.8,
        borderColor: '#c13584',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex:-1
    }
})
