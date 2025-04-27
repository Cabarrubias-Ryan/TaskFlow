import { SafeAreaView, ScrollView , View, Text, Image } from 'react-native';
import React from 'react';
import { Redirect, router } from 'expo-router';

import task from '../assets/images/ManageTask.jpeg';
import CustomButton from '../components/CustomButton';

export default function LandingPage() {
  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-white h-full px-7'>
      <ScrollView>
      <View className='w-full h-full flex items-center justify-center px-4'>
        <Image
        source={task}
        className='w-[100%] h-[290px]'
        resizeMode='contain'
        >
        </Image>
      </View>
      <View>
        <Text className='text-3xl font-bold text-center mb-3 pr-[30px] pl-[30px]'>
          Task Management & To-Do List
        </Text>
      </View>
      <View>
        <Text className="text-center pr-[26px] pl-[26px] text-gray-500">This productive tool is designed to help you better manage you daily task project wise and conviently </Text>
      </View>
      <CustomButton  
       title="Let's Start"
       handledPress={() => router.push('/home')}
       containerStyles="mt-7 bg-purple-600 p-4 min-h-[58px] justify-center items-center rounded-xl"
       TextStyles="text-2xl font-bold text-white " 
       isLoading={false} 
      />
      </ScrollView>
      
    </SafeAreaView>

  );
}

