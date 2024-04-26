import { Text } from "react-native";

import NativeSafeAreaView from "@/components/shared/native-safe-area-view";

export default function Welcome() {
  return (
    <NativeSafeAreaView className="flex-1" viewColor="blue">
      <Text>Hello</Text>
    </NativeSafeAreaView>
  );
}
