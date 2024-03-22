import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = {
  setItem: async (key: string, value: any) => {
    const data = {
      v: value,
    };
    return await AsyncStorage.setItem(key, JSON.stringify(data));
  },
  getItem: async (key: string) => {
    let data: any = await AsyncStorage.getItem(key);
    if (data !== null) {
      data = JSON.parse(data);
      return data.v;
    } else {
      return undefined;
    }
  },
  removeItem: async (key: string) => {
    return await AsyncStorage.removeItem(key);
  },
};
