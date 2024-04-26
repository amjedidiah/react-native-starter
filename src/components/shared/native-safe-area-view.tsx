import * as NavigationBar from "expo-navigation-bar";
import { PropsWithChildren } from "react";
import { Platform, SafeAreaView, StatusBar, ViewProps } from "react-native";

import { isAndroid } from "@/lib/constants";

export default function NativeSafeAreaView({
  children,
  viewColor = "white",
}: PropsWithChildren<ViewProps & { viewColor?: string }>) {
  if (isAndroid) {
    NavigationBar.setBackgroundColorAsync(viewColor);
    NavigationBar.setPositionAsync("absolute");
  }

  return (
    <SafeAreaView
      className="flex-1 w-full"
      style={{
        backgroundColor: viewColor,
        ...Platform.select({
          ios: {
            paddingTop: 0,
          },
          android: {
            paddingVertical: StatusBar.currentHeight,
          },
        }),
      }}
    >
      {children}
    </SafeAreaView>
  );
}
