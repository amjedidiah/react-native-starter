import * as NavigationBar from "expo-navigation-bar";
import { PropsWithChildren } from "react";
import { Platform, SafeAreaView, StatusBar, ViewProps } from "react-native";

import { isAndroid } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function NativeSafeAreaView({
  children,
  viewColor = "white",
  className,
}: PropsWithChildren<ViewProps & { viewColor?: string }>) {
  if (isAndroid) {
    NavigationBar.setBackgroundColorAsync(viewColor);
    // NavigationBar.setPositionAsync("absolute");
  }

  return (
    <SafeAreaView
      className={cn("flex-1 w-full", className)}
      style={{
        backgroundColor: viewColor,
        ...Platform.select({
          ios: {
            paddingTop: 0,
          },
          android: {
            paddingTop: StatusBar.currentHeight,
          },
        }),
      }}
    >
      {children}
    </SafeAreaView>
  );
}
