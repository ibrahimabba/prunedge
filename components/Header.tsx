import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

type Props = {
    HeaderLeft?: any;
    HeaderRight?: any;
    title: string;
    style?: Object;
    titleColor?: string;
    statusBarColor?: string;
    statuBarStyle: 'auto' | 'dark' | 'light'
}

export default function Header({ HeaderLeft, HeaderRight, title, style = {}, titleColor, statusBarColor, statuBarStyle }: Props) {
    return (
        <View style={[styles.container, style]}>
            {HeaderLeft && <View style={{ position: 'absolute', left: 17 }}>
                <HeaderLeft />
            </View>}
            <Text style={{ ...styles.title, color: titleColor }}>{title}</Text>
            {HeaderRight && <View style={{ position: 'absolute', left: '90%' }}>
                <HeaderRight />
            </View>}
            <StatusBar style={statuBarStyle} backgroundColor={statusBarColor} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 70,
        backgroundColor: '#E5E5E5',
        paddingHorizontal: 15,
    },
    title: {
        position: 'absolute',
        fontFamily: 'inter-mid',
        fontSize: 30,
        lineHeight: 36,
        fontWeight: '600',
        textAlign: 'center',
        color: '#000000',
        left: '39%'

    }
});
