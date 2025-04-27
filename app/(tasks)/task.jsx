import { SafeAreaView, ScrollView, View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import React, { useState } from 'react';
import CustomHeader from '../../components/CustomHeader';

import sampleProfile from '../../assets/images/profile/gojo.jpeg';

export default function Task() {
  const [searchQuery, setSearchQuery] = useState('');
  const [Title, setTitle] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  // Sample items (you can dynamically fetch these)
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
    { id: 6, name: 'Item 6' },
    { id: 7, name: 'Item 7' },
    { id: 8, name: 'Item 8' },
    { id: 9, name: 'Item 9' },
  ];

  // Filter items based on the search query
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddTask = () => {
    console.log("Add Task clicked!");
    setIsVisible(!isVisible);
    // Add logic for adding a task
  };
  const closeAddTask = () => {
    console.log("Close!");
    setIsVisible(!isVisible);
  }
  const submitAddTask = () => {
    console.log(Title);
    console.log("Submit Task!");
    setIsVisible(!isVisible);
    // Add logic for adding a task
  };


  return (
    <SafeAreaView className="h-full bg-white">
        <View className='absolute top-0 w-full z-10'>
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
          <View className="px-5 mt-4">
            <TextInput
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Search..."
              className="h-12 px-4 rounded-full border border-gray-300 bg-white shadow-lg text-lg"
            />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}
        className='mt-[145px] mb-5'
        >
        {/* Display filtered items */}
        <View className="mt-5 px-5">
          <ScrollView className="w-full">
            <View className="space-x-4 gap-4">
              {filteredItems.map(item => (
                <View
                  key={item.id}
                  className="w-full h-[80px] justify-center items-center rounded-xl border border-gray-300 bg-white shadow-xl"
                >
                  <Text className="text-black text-lg">{item.name}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={handleAddTask}
        className="absolute bottom-5 right-5 bg-purple-500 w-16 h-16 rounded-full justify-center items-center shadow-xl"
      >
        <IconSymbol size={30} name="plus" color="white" />
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={isVisible}
        animationType="fade"
        onRequestClose={handleAddTask}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-white p-6 rounded-2xl w-80">
          <TouchableOpacity
              onPress={closeAddTask}
              className="absolute top-2 right-2 z-10"
            >
            <IconSymbol size={20} name="close" color="black" />
          </TouchableOpacity>
            <Text className="text-lg font-semibold">Add Task</Text>
            <Text className="text-gray-500 mt-2">You can add your task here.</Text>
            <View className="mt-4">
            <TextInput
                  value={Title}
                  onChangeText={setTitle}
                  placeholder="Title..."
                  className="h-12 w-full border border-gray-300 bg-white shadow-lg text-lg"
                />
              </View>
            <TouchableOpacity
              className="mt-4 bg-green-400 py-2 px-4 rounded"
              onPress={submitAddTask}
            >
            <Text className="text-white text-center">Sumbit</Text>
          </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
