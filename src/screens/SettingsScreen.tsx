import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const SettingsScreen: React.FC = () => {
  const [isMetric, setIsMetric] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const loadUnit = async () => {
      const storedUnit = await AsyncStorage.getItem('unit');
      setIsMetric(storedUnit !== 'Faren');
    };
    loadUnit();
  }, []);

  const toggleUnit = async () => {
    const newUnit = isMetric ? 'Faren' : 'Celcius';
    await AsyncStorage.setItem('unit', newUnit);
    setIsMetric(!isMetric);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{position: 'absolute', zIndex: 1, left: 13, top: 10}}
        onPress={() => navigation.navigate('Home' as never)}>
        <Image source={require('../../assets/icons/back.png')} />
      </TouchableOpacity>
      <View
        style={{
          marginTop: 60,
          backgroundColor: '#000',
          width: 180,
          height: 40,
          paddingTop: 7,
          paddingLeft: 13,
          borderColor: '#fff',
          borderWidth: 0.5,
          borderRadius: 10,
          marginLeft: 20,
        }}>
        <Text style={{color: '#fff', fontSize: 20}}>Use Celcius:</Text>
        <View style={{position: 'absolute', marginLeft: '75%', top: 7}}>
          <Switch value={isMetric} onValueChange={toggleUnit} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding: 20, flex: 1, backgroundColor: '#005C97'},
});

export default SettingsScreen;
