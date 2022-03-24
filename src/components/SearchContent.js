import React from 'react'
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import SearchData from './SearchData'

const SearchContent = (props) => {
    return (
        <View>
            {
                SearchData.map((data,index) => {
                    return (
                        <>
                            {
                                data.id === 0 ?
                                    (
                                        <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}} key={index}>
                                            {data.image.map((imageData, imgIndex) => {
                                                return (
                                                    <TouchableOpacity key={imgIndex}
                                                        onPressIn={() => props.data(imageData)}
                                                        onPressOut={() =>props.data(null)}
                                                        style={{ paddingBottom: 2 }}>
                                                        <Image source={{uri:imageData}} style={{width:129,height:150}} />
                                                    </TouchableOpacity>
                                                )
                                            })}
                                        </View>
                                    ) : null
                            }
                            
                            {
                                data.id === 1 ?
                                    (
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent:"space-between"
                                        }}>
                                            <View style={{
                                                flexDirection:'row',
                                                justifyContent: 'space-between',
                                                flexWrap: 'wrap',
                                                width:261
                                            }}>
                                                {
                                                    data.image.slice(0, 4).map((imageData, imgIndex) => {
                                                        return (
                                                            <TouchableOpacity key={imgIndex}
                                                                onPressIn={() => props.data(imageData)}
                                                                onPressOut={() =>props.data(null)}
                                                                style={{ paddingBottom: 2 }}>
                                                        <Image source={{uri:imageData}} style={{width:129,height:150}} />
                                                    </TouchableOpacity>
                                                        )
                                                    })
                                                }
                                            </View>
                                            <TouchableOpacity 
                                                onPressIn={() => props.data(data.image[5])}
                                                onPressOut={() =>props.data(null)}
                                                style={{ marginLeft: 2 }}>
                                            <Image source={{uri:data.image[5]}} style={{width:129,height:300}} />
                                            </TouchableOpacity>

                                        </View>
                                    ) : null
                            }

                            {
                                data.id === 2 ?
                                    (
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent:"space-between"
                                        }}>
                                            <TouchableOpacity 
                                                onPressIn={() => props.data(data.image[2])}
                                                onPressOut={() =>props.data(null)}
                                                style={{ paddingRight: 2 }}>
                                                        <Image source={{uri:data.image[2]}} style={{width:260,height:300}} />
                                            </TouchableOpacity>
                                            <View style={{
                                                flexDirection:'row',
                                                justifyContent: 'space-between',
                                                flexWrap: 'wrap',
                                                width:130
                                            }}>
                                                {
                                                    data.image.slice(0, 2).map((imageData,imgIndex) => {
                                                        return (
                                                            <TouchableOpacity
                                                                key={imgIndex}
                                                            onPressIn={() => props.data(imageData)}
                                                            onPressOut={() =>props.data(null)}
                                                                style={{ paddingBottom: 2 }}>
                                                                    <Image source={{uri:imageData}} style={{width:129,height:150}} />
                                                            </TouchableOpacity>
                                                        )
                                                    })
                                                }
                                            </View>
                                        </View>
                                    ) : null
                            }
                        </>
                    )
                })
            }
        </View>
    )
}

export default SearchContent

const styles = StyleSheet.create({})
