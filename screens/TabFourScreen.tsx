import { View, Text, StyleSheet } from 'react-native';
import { RootTabScreenProps } from '../types';

export default function TabFourScreen({ navigation }: RootTabScreenProps<'TabFour'>) {
    return (
        <View style={styles.container}>
            <Text>Tab 4</Text>
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
