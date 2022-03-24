import React from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchBox = () => {
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            width: '100%',
            paddingVertical:10,
        }}>
            <Ionicons name='search' style={{
                fontSize: 18,
                opacity: 0.8,
                position: 'absolute',
                zIndex: 1,
                left:25,
            }}

            />

            <TextInput 
                placeholder='Search'
                placeholderTextColor='#909090'
            style={{
                width: '94%',
                backgroundColor: '#EBEBEB',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 15,
                padding: 4,
                paddingLeft:40
            }}

            />
        </View>
    )
}

export default SearchBox

const styles = StyleSheet.create({})
