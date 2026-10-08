import { Ionicons } from '@expo/vector-icons';
import { Tabs, useTheme } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TabLayout = () => {
    const insets = useSafeAreaInsets();
    const { colors } = useTheme();

  return (
      <Tabs
          screenOptions={{
              headerShown: false,
              tabBarStyle: {
                  bottom: insets.bottom,
                  left: insets.left,
                  right: insets.right,
                  backgroundColor: colors.card,
                  height: 60, 
                  marginHorizontal: 10,
                  borderRadius: 30,
                  borderColor: colors.border,
                  borderWidth: 1,
                  elevation: 10
              }
          }}
      >
          <Tabs.Screen
              name='index'
              options={{
                  title: 'Home',
                  tabBarIcon: ( { color, focused, size } ) => (
                      <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={size} />
                  )
              }}
          />
          <Tabs.Screen
              name='services'
              options={{
                  title: 'Services',
                  tabBarIcon: ( { color, focused, size } ) => (
                      <Ionicons name={focused ? 'server-sharp' : 'server-outline'} color={color} size={size} />
                  )
              }}
          />
          <Tabs.Screen
              name='activity'
              options={{
                  title: 'Activity',
                  tabBarIcon: ( { color, focused, size } ) => (
                      <Ionicons name={focused ? 'pie-chart-sharp' : 'pie-chart-outline'} color={color} size={size} />
                  )
              }}
          />
          <Tabs.Screen
              name='account'
              options={{
                  title: 'Account',
                  tabBarIcon: ( { color, focused, size } ) => (
                      <Ionicons name={focused ? 'person-sharp' : 'person-outline'} color={color} size={size} />
                  ),
              }}
          />
    </Tabs>
  )
}

export default TabLayout