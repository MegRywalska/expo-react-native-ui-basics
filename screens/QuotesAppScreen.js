import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useState } from 'react';
import { quotes } from '../data/quotes';
import { uiColors, radius, border } from '../theme';


export default function QuotesAppScreen() {

    const [currentQuote, setCurrentQuote] = useState(quotes[0]);

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomIndex]);
    }

    return (

        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.title}>Quotes App</Text>
            </View>
            <View style={styles.mainContent}>

                <View style={styles.quoteBox}>
                    <Text style={styles.quoteText}>"{currentQuote.text}"</Text>
                    <Text style={styles.quoteAuthor}>- {currentQuote.author}, <Text style={styles.quoteBook}>{currentQuote.book}</Text></Text>
                </View>


                <Pressable onPress={getRandomQuote}
                    style={({ pressed }) => [
                        styles.button,
                        pressed && styles.buttonPressed
                    ]}>
                    <Text style={styles.buttonText}>New Quote</Text>
                </Pressable>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: uiColors.base200,
        position: 'relative',

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

    mainContent: {
        flex: 1,
        justifyContent: "flex-start",
        paddingTop: 40,
        alignItems: "center",
        gap: 32,
        paddingHorizontal: 16,
    },

    title: {
        color: uiColors.textLight,
        fontSize: 24,
        fontWeight: 'bold',
    },

    quoteBox: {
        width: "100%",
        backgroundColor: uiColors.base100,
        borderRadius: radius.box,
        borderWidth: 1,
        borderColor: uiColors.base300,
        paddingTop: 60,
        paddingBottom: 60,
        paddingHorizontal: 16,
        alignItems: "center",
    },

    quoteText: {
        fontSize: 22,
        fontWeight: "300",
        color: uiColors.textLight,
        marginBottom: 6,
        textAlign: "center",
    },

    quoteAuthor: {
        fontSize: 18,
        fontWeight: "300",
        color: uiColors.textMiddle,
        marginTop: 12,
    },

    quoteBook: {
        fontSize: 18,
        fontWeight: "300",

        color: uiColors.textMiddle,
    },

    button: {
        position: 'absolute',
        top: '75%',
        alignSelf: 'center',
        backgroundColor: uiColors.primary,
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: radius.selector,
    },

    buttonText: {
        color: uiColors.textDark,
        fontSize: 18,
        fontWeight: "700",
    },

    buttonPressed: {
        opacity: 0.85,
        transform: [{ scale: 0.98 }],
    },
});