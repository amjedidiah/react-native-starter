import { SpaceGrotesk_700Bold } from "@expo-google-fonts/space-grotesk";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";

const customFonts = {
  "GeneralSans-Regular": require("../fonts/GeneralSans-Regular.otf"),
};
const SPLASH_SCREEN_DELAY = 2000;

export default function useAppFonts(delay = SPLASH_SCREEN_DELAY) {
  const [isFontsLoaded, setIsFontsLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          SpaceGrotesk_700Bold,
          ...customFonts,
        });
        await new Promise((resolve) => setTimeout(resolve, delay));
      } catch (e) {
        console.warn(e);
      } finally {
        setIsFontsLoaded(true);
      }
    }

    prepare();
  }, [delay]);

  const onLayoutRootView = useCallback(async () => {
    if (isFontsLoaded) await SplashScreen.hideAsync();
  }, [isFontsLoaded]);

  return { isFontsLoaded, onLayoutRootView };
}
