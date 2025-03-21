import {useNavigation, RouteProp} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import City from '../../assets/icons/city';
import Temp from '../../assets/icons/temp';
import Humid from '../../assets/icons/humid';
import Wind from '../../assets/icons/wind';
import Sunrise from '../../assets/icons/Sunrise';
import Sunset from '../../assets/icons/Sunset';
import AsyncStorage from '@react-native-async-storage/async-storage';

type WeatherDetails = {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
};
type RootStackParamList = {
  Home: undefined;
  Details: {weather: WeatherDetails};
  Settings: undefined;
};

type DetailsScreenProps = {
  route: RouteProp<RootStackParamList, 'Details'>;
};
const DetailsScreen: React.FC<DetailsScreenProps> = ({route}) => {
  const navigation = useNavigation();
  const {weather} = route.params || {};
  const [unit, setUnit] = useState<string>('');
  const setUnitforTemp = async () => {
    const unitT = await AsyncStorage.getItem('unit');
    setUnit(unitT || 'Metric');
  };
  useEffect(() => {
    setUnitforTemp();
  }, []);
  return (
    <View style={styles.container}>
      {weather ? (
        <View style={{marginTop: 20}}>
          <TouchableOpacity
            style={{position: 'absolute', zIndex: 1}}
            onPress={() => navigation.navigate('Home' as never)}>
            <Image source={require('../../assets/icons/back.png')} />
          </TouchableOpacity>
          <Text style={styles.title}>Weather Details</Text>
          <View style={styles.table}>
            <View style={styles.row}>
              <View style={{marginRight: 10}}>
                <City />
              </View>
              <Text style={styles.cellTitle}>City</Text>
              <Text style={styles.cellValue}>{weather.name}</Text>
            </View>
            <View style={styles.row}>
              <View style={{marginRight: 10}}>
                <Temp />
              </View>
              <Text style={styles.cellTitle}>Temperature</Text>
              {unit == 'Faren' ? (
                <Text style={styles.cellValue}>{weather.main.temp}°F</Text>
              ) : (
                <Text style={styles.cellValue}>{weather.main.temp}°C</Text>
              )}
            </View>
            <View style={styles.row}>
              <View style={{marginRight: 10}}>
                <Humid />
              </View>
              <Text style={styles.cellTitle}>Humidity</Text>
              <Text style={styles.cellValue}>{weather.main.humidity}%</Text>
            </View>
            <View style={styles.row}>
              <View style={{marginRight: 10}}>
                <Wind />
              </View>
              <Text style={styles.cellTitle}>Wind Speed</Text>
              <Text style={styles.cellValue}>{weather.wind.speed} m/s</Text>
            </View>
            <View style={styles.row}>
              <View style={{marginRight: 10}}>
                <Sunrise />
              </View>
              <Text style={styles.cellTitle}>Sunrise</Text>
              <Text style={styles.cellValue}>
                {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
              </Text>
            </View>
            <View style={styles.row}>
              <View style={{marginRight: 10}}>
                <Sunset />
              </View>
              <Text style={styles.cellTitle}>Sunset</Text>
              <Text style={styles.cellValue}>
                {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <Text style={styles.noData}>
          No weather data available. Please search for a city from the Home
          Screen.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#005C97',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    top: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: '#007ACC',
    borderBottomColor: '#fff',
  },
  cellTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFD700',
  },
  cellValue: {
    fontSize: 16,
    fontWeight: '400',
    color: '#fff',
    position: 'absolute',
    marginLeft: '84%',
    marginTop: '7%',
  },
  noData: {
    fontSize: 16,
    color: '#FFD700',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default DetailsScreen;
