import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import HeaderButton from '../components/HeaderButton';
import { RootTabScreenProps } from '../types';
import { CircularProgressWithChild, } from "react-native-circular-progress-indicator";

export default function InsightScreen({ navigation }: RootTabScreenProps<'TabTwo'>) {
  const props = {
    activeStrokeWidth: 3,
    inActiveStrokeWidth: 3,
    inActiveStrokeOpacity: 0.2
  };
  return (
    <View style={styles.container}>
      <Header title='Insights' statuBarStyle='dark' statusBarColor='#E5E5E5' HeaderLeft={() => <HeaderButton onPress={() => navigation.goBack()} color='#5DB075' title='Back' />} />
      <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ width: '100%' }}>
        <View style={{ marginTop: 30 }}>
          <CircularProgressWithChild
            {...props}
            value={32.01}
            radius={100}
            maxValue={46}
            activeStrokeColor={'#5DB075'}
            inActiveStrokeColor={'#E8E8E8'}
            clockwise={false}
          >
            <Text style={{
              fontFamily: 'inter',
              fontSize: 24,
              lineHeight: 29,
              fontWeight: '500',
              color: '#5DB075',
            }}>$32.01</Text>
            <Text style={{
              fontFamily: 'inter',
              fontSize: 10,
              lineHeight: 12,
              fontWeight: '400',
              color: '#BDBDBD',
            }}>70% spent</Text>
          </CircularProgressWithChild>
        </View>
        <Text style={{
          fontFamily: 'inter',
          fontSize: 24,
          lineHeight: 29,
          fontWeight: '500',
          color: '#000000',
          alignSelf: 'flex-start',
          marginLeft: 20,
          marginVertical: 25
        }}>Expenses</Text>
        {[1, 2, 3, 4, 5, 6].map(i => (<View key={i} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%', height: 60, borderBottomColor: '#E8E8E8', borderBottomWidth: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.dot} />
            <Text style={styles.itemT}>Item</Text>
          </View>
          <Text style={styles.statistic}>Statistic</Text>
        </View>))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E5E5',
  },
  progressBar: {

  },
  dot: {
    width: 17,
    height: 17,
    borderRadius: 17,
    backgroundColor: '#4B9460',
    marginRight: 20
  },
  itemT: {
    fontFamily: 'inter',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '500',
    color: '#000000'
  },
  statistic: {
    fontFamily: 'inter',
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '400',
    color: '#000000'
  }
});
