import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React, { FC } from "react";
import { useAuth } from "../hooks/useAuth";
import Auth from "../components/screens/auth/Auth";
import Payment from "../components/screens/payment/Payment";
import Home from "../components/screens/home/Home";

const Stack = createNativeStackNavigator();

export const Navigation: FC = () => {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="auth" component={Auth} />
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="payment" component={Payment} />
          </>
        ) : (
          <Stack.Screen name="auth" component={Auth} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
