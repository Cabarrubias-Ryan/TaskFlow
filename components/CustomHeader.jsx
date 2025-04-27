import { Text, View, Image } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import React from 'react';


export default function CustomHeader({ sampleProfile, container, imageContainer, imageStyle, textContainer, textGreetings, textName, containerDesign, contentDesign }) {
    return ( 
        <>
        <View className={container}>
            <View className={imageContainer}>
                <Image
                    source={sampleProfile}
                    className={imageStyle}
                    resizeMode='contain'
                />
                <View className={textContainer}>
                    <Text className={textGreetings}>Hello!</Text>
                    <Text className={textName}>Saturo Gojo</Text>
                </View>
            </View>
            <View>
            <IconSymbol size={20} name="notifications" color="white" />
            </View>
        </View>
        <View className={containerDesign}>
            <View className={contentDesign}>
            </View>
        </View>
        </>
    )
}
