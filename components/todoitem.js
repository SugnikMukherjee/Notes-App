import React from 'react';
import { StyleSheet, Text, TouchableOpacity,View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, presshandler }){

    return(
        <TouchableOpacity onPress={()=>presshandler(item.key)}>
            <View style={styles.item}>
              <MaterialIcons name="delete-forever" size={24} color="coral" />
              <Text style={styles.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    item:{
        padding:16,
        margin:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'solid',
        borderRadius:10,
        flexDirection:'row'
    },
    itemText:{
        marginLeft:10
    }
})