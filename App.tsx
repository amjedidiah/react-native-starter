import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import AppNavigator from "@/app-navigator";
import useAppFonts from "@/hooks/use-app-fonts";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { isFontsLoaded, onLayoutRootView } = useAppFonts();
  if (!isFontsLoaded) return null;

  return (
    <View onLayout={onLayoutRootView} className="flex-1">
      <AppNavigator />
      <StatusBar style="auto" />
    </View>
  );
}
