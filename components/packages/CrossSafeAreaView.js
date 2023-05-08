import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function CrossSafeAreaView(props) {
    return (
        <SafeAreaView style={styles.container}>
            {props.component}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    }
});