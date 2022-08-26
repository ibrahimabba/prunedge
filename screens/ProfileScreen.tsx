import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import HeaderButton from '../components/HeaderButton';
import { RootTabScreenProps } from '../types';

export default function InsightScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [currentTab, setCurrentTab] = useState('Posts')
  return (
    <View style={styles.container}>
      <Header titleColor='#FFFFFF' title='Profile' style={{ backgroundColor: '#5DB075' }} statuBarStyle='light' statusBarColor='#5DB075' HeaderLeft={() => <HeaderButton color='#FFFFFF' title='Settings' />} HeaderRight={() => <HeaderButton onPress={() => navigation.navigate('Signup')} title='Logout' color='#FFFFFF' />} />
      <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ width: '100%' }}>
        <View style={styles.greenBox} />
        <Image source={require('../assets/images/Ellipse6.jpg')} style={{ position: 'absolute', height: 150, width: 150, borderRadius: 150, left: '30%', top: 40 }} />
        <Text style={{
          fontFamily: 'inter',
          fontSize: 30,
          lineHeight: 36,
          fontWeight: '600',
          color: '#000000',
          marginTop: '15%'
        }}>Victoria Robertson</Text>
        <Text style={{
          fontFamily: 'inter',
          fontSize: 16,
          lineHeight: 19,
          fontWeight: '600',
          color: '#000000'
        }}>A mantra goes here</Text>
        <View style={styles.tab}>
          <TouchableOpacity onPress={() => setCurrentTab('Posts')} style={{ ...styles.tabB, backgroundColor: currentTab === 'Posts' ? '#FFFFFF' : '#F6F6F6' }}>
            <Text style={{ ...styles.tabT, color: currentTab === 'Posts' ? '#5DB075' : '#BDBDBD' }}>Posts</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCurrentTab('Photos')} style={{ ...styles.tabB, backgroundColor: currentTab === 'Photos' ? '#FFFFFF' : '#F6F6F6' }}>
            <Text style={{ ...styles.tabT, color: currentTab === 'Photos' ? '#5DB075' : '#BDBDBD' }}>Photos</Text>
          </TouchableOpacity>
        </View>
        {currentTab == 'Photos' && <View style={styles.img} />}
        {[1, 2, 3, 4, 5].map((i) => <View key={i} style={styles.cont}>
          <View style={{ width: 50, height: 50, backgroundColor: '#F6F6F6', borderRadius: 8 }} />
          <View style={{ borderColor: '#E8E8E8', borderBottomWidth: 1, paddingBottom: 5, width: '80%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
              <Text style={{
                fontFamily: 'inter',
                fontSize: 16,
                lineHeight: 19,
                fontWeight: '900',
                color: '#000000'
              }}>Header</Text>
              <Text style={{
                fontFamily: 'inter',
                fontSize: 14,
                lineHeight: 17,
                fontWeight: '400',
                color: '#BDBDBD'
              }}>8m ago</Text>
            </View>
            <Text style={{
              fontFamily: 'inter',
              fontSize: 14,
              lineHeight: 17,
              fontWeight: '400',
              color: '#000000',
              marginTop: 5
            }}>He'll want to use your yacht, and I don't want this thing smelling like fish.</Text>
          </View>
        </View>)}
      </ScrollView >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#E5E5E5',
  },
  greenBox: {
    width: '100%',
    height: 150,
    backgroundColor: '#5DB075'
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    height: 50,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    marginTop: 30,
    borderRadius: 100,
    paddingHorizontal: 2
  },
  tabB: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 45,
    backgroundColor: '#FFFFFF',
    borderRadius: 100
  },
  tabT: {
    fontFamily: 'inter',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '600',
    color: '#BDBDBD'
  },
  img: {
    width: '90%',
    height: 200,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    marginTop: 20
  },
  cont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    width: '90%'
  }
});
