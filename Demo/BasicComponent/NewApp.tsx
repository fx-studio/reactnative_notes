import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const NewApp = () => {

    const [count, setCount] = useState(0);

    return(
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>  
            {/*  <Text>Hello, world!</Text> */}
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

export default NewApp;