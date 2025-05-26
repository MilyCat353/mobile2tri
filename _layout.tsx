import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
     screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: '#ffd9d9',
        },
        headerShadowVisible: false,
        tabBarActiveTintColor: "pink",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
            backgroundColor: "#ffd9d9",
        },
     }}
    >
      <Tabs.Screen 
        name="index"
        options={{
          //headerTitle: "Curriculum Vitae",
          title: "Home",
          tabBarIcon: ({focused, color}) => (
          <Ionicons 
            name={focused ? "heart-sharp" : "heart-outline"} 
            color={color}
            size={24}
            />
          )
          //headerLeft: () => <></>
        }}
      />
      <Tabs.Screen 
        name="profissional" 
        options={{
          //headerTitle: "Sobre",
          title: "Profissional",
          tabBarIcon: ({focused, color}) => (
            <Ionicons 
              name={focused ? "star" : "moon"} 
              color={color}
              size={24}
              />
            )
        }}
      />
    </Tabs>
  );
}