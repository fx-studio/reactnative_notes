import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const App2 = () => {

    console.log("Hello tui nè!");

    const [count, setCount] = useState(0);

    return(
        <View
            style={styles.containerView}>  
            <TouchableOpacity
                style={{
                    alignItems: 'center',
                    backgroundColor: '#DDDDDD',
                    padding: 10,
                    marginBottom: 10,
                }}
                onPress={ ()=> setCount(count + 1) }>
                <Text>Tap me!</Text>
            </TouchableOpacity>
            <View>
                <Text>You tapped {count} times.</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    childView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#be29ec",
        borderRadius: 8,
        padding: 5
    },
    buttonSend: {
        alignItems: 'center',
        backgroundColor: 'blue',
        padding: 10,
        margin: 10
    }
});

export default App2;