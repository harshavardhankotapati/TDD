import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [result, setResult] = useState<string>('');

    const handlePress = (value: string) => {
        if (value === 'C') {
            setInput('');
            setResult('');
        } else if (value === '=') {
            try {
                const evaluatedResult = new Function(`return ${input}`)();
                setResult(evaluatedResult.toString());
            } catch (error) {
                setResult('Error');
            }
        } else {
            setInput((prev) => prev + value);
        }
    };

    const buttons: string[][] = [
        ['7', '8', '9', '/'],
        ['4', '5', '6', '*'],
        ['1', '2', '3', '-'],
        ['0', 'C', '=', '+']
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.input}>{input || '0'}</Text>
            <Text style={styles.result}>{result}</Text>

            {buttons.map((row, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                    {row.map((btn) => (
                        <TouchableOpacity
                            key={btn}
                            style={styles.button}
                            onPress={() => handlePress(btn)}
                        >
                            <Text style={styles.buttonText}>{btn}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222',
        padding: 10,
    },
    input: {
        fontSize: 36,
        color: 'white',
        alignSelf: 'flex-end',
        marginRight: 20,
        marginBottom: 10,
    },
    result: {
        fontSize: 28,
        color: 'lightgreen',
        alignSelf: 'flex-end',
        marginRight: 20,
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#444',
        padding: 20,
        margin: 5,
        borderRadius: 10,
        width: 80,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
    },
});

export default Calculator;
