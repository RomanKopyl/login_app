import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthParams } from "../components/Fields";
import { SESSION_KEY } from "./variables";

export const login = async (value: AuthParams) => {
  const jsonValue = await AsyncStorage.getItem(value.email);
  const userInfo = jsonValue != null ? JSON.parse(jsonValue) : null;

  return userInfo;
}

export const logout = async () => {
  await cleanSession();
}

export const updateSession = async (session: string) => {
  // as session key is using email
  await AsyncStorage.setItem(SESSION_KEY, session);
}

export const getSession = async () => {
  console.log('SESSION_KEY', SESSION_KEY);
  
  return await AsyncStorage.getItem(SESSION_KEY);
}

export const cleanSession = async () => {
  await AsyncStorage.removeItem(SESSION_KEY);
}