import { SafeAreaView, View, Text, Image, ScrollView } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';


import sampleProfile from '../../assets/images/profile/gojo.jpeg';

export default function Home() {
  return (
    <SafeAreaView className='h-full bg-white'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomHeader 
            sampleProfile={sampleProfile}
            container={"px-5 flex-1 flex-row items-center justify-between bg-purple-500 py-5"}
            imageContainer={"flex-row items-center"}
            imageStyle={"w-12 h-12 rounded-full"}
            textContainer={"ml-4"}
            textGreetings={"text-md font-semibold text-white"}
            textName={"text-xl font-bold tracking-wider text-white"}
            containerDesign={"bg-purple-500 h-[13px] w-full"}
            contentDesign={"rounded-t-3xl h-[13px] bg-white w-full"}
          />
        <View className='w-full bg-purple'>
          <View className='px-5 pt-1'>
            <View className='mt-5 flex-1 flex-row justify-around'>
              <View className='bg-purple-500 h-[37px] justify-center rounded-md px-3 py-2'>
                <Text className='text-white text-xl'>My Tasks</Text>
              </View>
              <View className='border border-purple-500 h-[37px] justify-center rounded-md px-3 py-2'>
                <Text className='text-purple-500 text-xl'>In-progress</Text>
              </View>
              <View className='border border-purple-500 h-[37px] justify-center rounded-md px-3 py-2'>
                <Text className='text-purple-500 text-xl'>Complete</Text>
              </View>
            </View>
          </View>
        </View>
        <View className='mt-5'>
          <View className='px-5 '>
          <ScrollView horizontal={true} className="w-full" showsHorizontalScrollIndicator={false}>
              <View className="flex-row space-x-4 gap-4">
                {/* Scrollable Items */}
                <View className="w-[230px] h-[150px] justify-center items-center rounded-xl border border-gray-300 bg-white shadow-xl">
                  <Text className="text-black text-lg">Item 1</Text>
                </View>
                <View className="w-[230px] h-[150px] justify-center items-center rounded-xl border border-gray-300 bg-white shadow-xl">
                  <Text className="text-black text-lg">Item 1</Text>
                </View>
                <View className="w-[230px] h-[150px] justify-center items-center rounded-xl border border-gray-300 bg-white shadow-xl">
                  <Text className="text-black text-lg">Item 1</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
        <View className='mt-5 mb-3'>
          <View className='px-5'>
            <View className='flex-row items-center justify-between'>
            <Text className='text-2xl bold font-bold'>Task Todays</Text>
            <IconSymbol size={20} name="moreVert" color="black"/>
          </View>
          </View>
        </View>
        <View className='my-2 px-5'>
          <ScrollView className="w-full">
              <View className="space-x-4 gap-4">
                {/* Scrollable Items */}
                <View className="w-full h-[80px] justify-center items-center rounded-xl border border-gray-300 bg-white shadow-xl">
                  <Text className="text-black text-lg">Item 1</Text>
                </View>
                <View className="w-full h-[80px] justify-center items-center rounded-xl border border-gray-300 bg-white shadow-xl">
                  <Text className="text-black text-lg">Item 1</Text>
                </View>
                <View className="w-full h-[80px] justify-center items-center rounded-xl border border-gray-300 bg-white shadow-xl">
                  <Text className="text-black text-lg">Item 1</Text>
                </View>

              </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

