import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";

type Prop = {
    style?: any;
    svgName: any;
    m?: number;
    width?: number;
    height?: number;
};

export default function SvgComponent({ style, svgName, m, ...props }: Prop): JSX.Element {
    return (
        <View style={[style, { margin: m, ...props }]}>
            <SvgXml {...props} xml={svgName} />
        </View>
    );
};
