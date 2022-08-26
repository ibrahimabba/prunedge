import { TouchableOpacity, StyleSheet } from "react-native";
import { Text, View } from '../components/Themed';

type Props = {
    icon?: any;
    title?: string;
    color?: string;
    onPress?: any
}
function HeaderButton(props: Props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.butt}>
            {props.icon && props.icon}
            {props.title && <Text style={[styles.title, { color: props.color }]}>
                {props.title}
            </Text>}
        </TouchableOpacity>
    )
}

export default HeaderButton

const styles = StyleSheet.create({
    title: {
        fontFamily: 'inter',
        fontSize: 16,
        lineHeight: 19,
        fontWeight: '500',
        textAlign: 'right',
        color: '#5DB075',
    },
    butt: {}
})