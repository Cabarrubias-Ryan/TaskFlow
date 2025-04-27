import { TouchableOpacity, Text } from 'react-native';
import React from 'react';

import "../global.css"


export default function CustomButton({ title, handledPress, containerStyles, TextStyles, isLoading}) {
    return (
        <TouchableOpacity 
         onPress={handledPress} 
         activeOpacity={0.7} 
         className={`${containerStyles} ${isLoading ? 'opacity-50': ''}`} 
         disabled={isLoading}>

            <Text className={`${TextStyles}`}>{title}</Text>         

        </TouchableOpacity>
    )
}
