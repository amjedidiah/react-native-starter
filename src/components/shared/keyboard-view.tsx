import { PropsWithChildren } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from "react-native-keyboard-aware-scroll-view";

import NativeSafeAreaView from "@/components/shared/native-safe-area-view";
import { isiOS } from "@/lib/constants";

export default function KeyboardView({
  children,
  viewColor,
  contentContainerStyle,
  extraHeight = 50,
  ...rest
}: PropsWithChildren<KeyboardAwareScrollViewProps & { viewColor?: string }>) {
  const style = {
    flex: 1,
    ...(contentContainerStyle as object),
  };

  return (
    <NativeSafeAreaView viewColor={viewColor}>
      <KeyboardAvoidingView className="flex-1">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAwareScrollView
            extraHeight={isiOS ? 0 : extraHeight}
            contentContainerStyle={style}
            {...rest}
          >
            {children}
          </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </NativeSafeAreaView>
  );
}
