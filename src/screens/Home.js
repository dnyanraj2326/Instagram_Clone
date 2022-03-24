import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Story from '../components/Story';
import Post from '../components/Post';



const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoIcons}>
                <View style={styles.logo}>
                    <Text style={styles.logoText}>Instagram</Text>
                </View>
                <View style={styles.icons}>
                    <TouchableOpacity>
                        <FontAwesome name="plus-square-o" size={30} color="#000000" style={styles.icon1} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="navigation" size={30} color="#000000" />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <Story />
                <Post />
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ffffff'
    },
    logoIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
        paddingVertical:15
    },
    icons: {
        flexDirection: 'row',
    },
    icon1: {
        paddingRight:25
    },
    logoText: {
        fontSize: 25,
        color: 'black',
        fontWeight:'500'
    }
})
