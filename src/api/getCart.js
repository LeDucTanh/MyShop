import { AsyncStorage } from 'react-native';

const getCart = async () => {
    try {
        const value = await AsyncStorage.getItem('@cart');
        if (value !== null) {
            return JSON.parse(value);
        }
        return [];
    } catch (error) {
        return [];
    }
};

export default getCart;
