import React, { useState } from "react";
import { TextInput, StyleSheet, ScrollView, View, TouchableOpacity, Alert } from 'react-native';
import { Text } from '../components/Themed';
import { Controller, useForm } from "react-hook-form";
import { AuthScreenProps } from "../types";

export default function SignupScreen({ navigation }: AuthScreenProps) {
    const [checked, setChecked] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleSignUp = (data: any) => {
        navigation.navigate('Root')
    }
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ width: '100%' }}>
                <View style={[styles.Input, { marginTop: 20 }]}>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                keyboardType='default'
                                onChangeText={(value) => onChange(value)}
                                value={value}
                                onBlur={onBlur}
                                placeholder='Name'
                                placeholderTextColor="#BDBDBD"
                                style={{ width: '80%' }}
                            />
                        )}
                        name="Name"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                </View>
                {errors.Name && <Text style={{
                    fontFamily: 'inter',
                    fontSize: 10,
                    lineHeight: 12,
                    fontWeight: '400',
                    color: 'red',
                    alignSelf: 'flex-start',
                    marginLeft: 23
                }}>required</Text>}
                <View style={styles.Input}>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                keyboardType='email-address'
                                onChangeText={(value) => onChange(value)}
                                onBlur={onBlur}
                                value={value}
                                placeholder='Email'
                                placeholderTextColor="#BDBDBD"
                                style={{ width: '80%' }}
                            />
                        )}
                        name="Email"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                </View>
                {errors.Email && <Text style={{
                    fontFamily: 'inter',
                    fontSize: 10,
                    lineHeight: 12,
                    fontWeight: '400',
                    color: 'red',
                    alignSelf: 'flex-start',
                    marginLeft: 23
                }}>required</Text>}
                <View style={styles.Input}>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                keyboardType='default'
                                secureTextEntry={showPassword}
                                onChangeText={(value) => onChange(value)}
                                onBlur={onBlur}
                                value={value}
                                placeholder='Password'
                                placeholderTextColor="#BDBDBD"
                                style={{ width: '80%' }}
                            />
                        )}
                        name="Password"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
                        <Text style={styles.butitle}>
                            {showPassword ? 'Show' : 'Hide'}
                        </Text>
                    </TouchableOpacity>
                </View>
                {errors.Password && <Text style={{
                    fontFamily: 'inter',
                    fontSize: 10,
                    lineHeight: 12,
                    fontWeight: '400',
                    color: 'red',
                    alignSelf: 'flex-start',
                    marginLeft: 23
                }}>required</Text>}
                <TouchableOpacity style={styles.agreement} onPress={() => setChecked((prev: boolean) => !prev)}>
                    <View style={styles.checkbox}>
                        {checked && <View style={styles.check} />}
                    </View>
                    <Text style={styles.agreeText}>I would like to receive your newsletter and other promotional information.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sign} onPress={handleSubmit(handleSignUp)}>
                    <Text style={styles.signtitle}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.forgetPass}>
                        Forgot your password?
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: '#E5E5E5',
        height: '100%',
    },
    scrollView: {
        height: '100%',
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    Input: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        width: '90%',
        height: 50,
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        borderColor: '#E8E8E8',
        borderWidth: 1,
        marginVertical: 8
    },
    butitle: {
        fontFamily: 'inter',
        fontSize: 16,
        lineHeight: 19,
        fontWeight: '500',
        textAlign: 'right',
        color: '#5DB075',
    },
    agreement: {
        flexDirection: 'row',
        //alignItems: 'center',
        marginTop: 20,
        width: '90%'
    },
    checkbox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20,
        backgroundColor: '#F6F6F6',
        borderRadius: 5,
        borderColor: '#E8E8E8',
        borderWidth: 1,
    },
    agreeText: {
        fontFamily: 'inter',
        fontSize: 14,
        lineHeight: 17,
        fontWeight: '400',
        color: '#666666',
        marginLeft: 6,
        width: '90%'
    },
    sign: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 50,
        backgroundColor: '#5DB075',
        marginTop: 40,
        borderRadius: 100
    },
    signtitle: {
        fontFamily: 'inter-mid',
        fontSize: 16,
        lineHeight: 19,
        fontWeight: '600',
        textAlign: 'right',
        //color: '#5DB075',
    },
    forgetPass: {
        fontFamily: 'inter-mid',
        fontSize: 16,
        lineHeight: 19,
        fontWeight: '700',
        textAlign: 'right',
        color: '#5DB075',
        marginTop: 17,
    },
    check: {
        width: 14,
        height: 14,
        backgroundColor: '#5DB075',
        borderRadius: 2
    }
});
