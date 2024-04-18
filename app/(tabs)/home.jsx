import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {images} from "../../constants"
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'

const Home = () => {
  return (
    <View className="bg-primary h-full flex my-6 px-4 space-y-6">
      <View className="flex justify-between items-start flex-row mb-6">
        <View>
          <Text className="font-pmedium text-sm text-gray-100">
            Welcome Back
          </Text>
          <Text className="text-2xl font-psemibold text-white">
            JSMastery
          </Text>
        </View>

        <View className="mt-1.5">
          <Image
            source={images.logoSmall}
            className="w-9 h-10"
            resizeMode="contain"
          />
        </View>
      </View>
      <SearchInput/>
      <View className="w-full flex-1 pt-5 pb-8">
                <Text className="text-gray-100 text-lg font-pregular mb-3">
                    Latest Videos
                </Text>
                <Trending/>
            </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})