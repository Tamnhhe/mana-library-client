import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { safeScreen, importScreen } from "../utils/screenUtils";

const AuthStack = createStackNavigator();

// Use placeholders for screens
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";
import VerifyCodeScreen from "../screens/auth/VerifyCodeScreen";
// const LoginScreen = importScreen("../screens/auth/LoginScreen", "Login");
// const RegisterScreen = importScreen("../screens/auth/RegisterScreen", "Register");
// const ForgotPasswordScreen = importScreen("../screens/auth/ForgotPasswordScreen", "Forgot Password");
// const VerifyCodeScreen = importScreen("../screens/auth/VerifyCodeScreen", "Verify Code");

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen
        name="Login"
        component={safeScreen(LoginScreen, "Login")}
      />
      <AuthStack.Screen
        name="Register"
        component={safeScreen(RegisterScreen, "Register")}
      />
      <AuthStack.Screen
        name="ForgotPassword"
        component={safeScreen(ForgotPasswordScreen, "ForgotPassword")}
      />
      <AuthStack.Screen
        name="VerifyCode"
        component={safeScreen(VerifyCodeScreen, "VerifyCode")}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
