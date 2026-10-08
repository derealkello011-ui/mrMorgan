import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const AccountTab = () => {
    return (
      <SafeAreaView style={styles.container}>
         <View>
            <Text>Content here</Text>
        </View>   
      </SafeAreaView>
    
  )
}

export default AccountTab

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
});