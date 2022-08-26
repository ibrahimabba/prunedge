import { View, Text, StyleSheet } from 'react-native';
import { RootTabScreenProps } from '../types';

export default function TabFiveScreen({ navigation }: RootTabScreenProps<'TabFive'>) {
    return (
        <View style={styles.container}>
            <Text>Tab 5</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E5E5E5',
    }
});
