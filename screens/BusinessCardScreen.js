import { View, Text, Image, StyleSheet, Platform, ToastAndroid, TouchableOpacity } from "react-native";
import React from "react";
import { uiColors, radius } from "../theme";
import { useState, useEffect } from "react";
import * as Clipboard from "expo-clipboard";



export default function BusinessCardScreen() {

    const profileImage = require("../assets/avatar.jpg");
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState("");


    const copyToClipboard = async (text, message) => {
        await Clipboard.setStringAsync(text);

        setToastMessage(message);
        setToastVisible(true);

        setTimeout(() => {
            setToastVisible(false);
        }, 5000);
    };

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.title}>Business Card</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.cardWrapper}>

                    <View style={styles.avatarWrapper}>
                        <Image
                            source={profileImage}
                            style={styles.avatar}
                        />
                    </View>
                </View>


                <View style={styles.card}>
                    <Text style={styles.name}>Małgorzata Rywalska</Text>
                    <TouchableOpacity onPress={() => copyToClipboard('gosia.rywalska@gmail.com', 'Email copied to clipboard')}>
                        <Text style={styles.email}>gosia.rywalska@gmail.com</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => copyToClipboard('https://github.com/MegRywalska', 'GitHub link copied to clipboard')}>
                        <Text style={styles.social}>github.com/MegRywalska</Text>
                    </TouchableOpacity>

                </View>

                {toastVisible && (
                    <View style={styles.toast}>
                        <Text style={styles.toastText}>{toastMessage}</Text>
                    </View>
                )}

            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: uiColors.base200,
        
    },

    header: {
        backgroundColor: uiColors.base100,
        width: '100%',
        padding: 20,
        marginBottom: 20,
        paddingTop: 60,
        paddingBottom: 20,
        paddingHorizontal: 20,
    },

    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    title: {
        color: uiColors.textLight,
        fontSize: 24,
        fontWeight: 'bold',
    },

    cardWrapper: {

        alignItems: "center",
    },

    avatarWrapper: {
        position: 'absolute',
        top: -50,
        zIndex: 10,
    },

    avatar: { 
        width: 100,
        height: 100,
        borderRadius: radius.full,
        borderWidth: 4,
        borderColor: uiColors.primary,


    },

    card: { 
        width: "85%",
        backgroundColor: uiColors.base100,
        borderRadius: radius.box,
        borderWidth: 1,
        borderColor: uiColors.base300,
        paddingTop: 60,
        paddingBottom: 24,
        paddingHorizontal: 16,
        alignItems: "center",
    },

    name: { 
        fontSize: 22,
        fontWeight: "700",
        color: uiColors.textLight,
        marginBottom: 6,
    },

    email: { 
        fontSize: 16,
        color: uiColors.textMiddle,
        marginBottom: 4,
        opacity: 0.8,
    },

    social: {    
        fontSize: 14,
        color: uiColors.textMiddle,
        opacity: 0.8,
    },

    toast: {
        position: "absolute",
        bottom: 80,
        left: 20,
        right: 20,
        backgroundColor: uiColors.success,
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: radius.box,
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,        
        shadowColor: "#000", 
        shadowOpacity: 0.3,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
    },

    toastText: {
        color: uiColors.textDark,
        fontSize: 14,
        fontWeight: "600",
    },

});

