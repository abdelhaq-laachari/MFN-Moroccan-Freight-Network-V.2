import { StatusBar } from "expo-status-bar";
import Form from "../components/Form";
import { NavigationProp } from "@react-navigation/core";
import { ParamListBase } from "@react-navigation/routers";

export default function RegisterScreen({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  return (
    <>
      <Form navigation={navigation} />
      <StatusBar style="auto" />
    </>
  );
}
