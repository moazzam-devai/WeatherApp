import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {getWeatherByCity, getWeatherByCoords} from '../services/weatherService';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import axios from 'axios';
import Settings from '../../assets/icons/settins';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackNavigationProp} from '@react-navigation/stack';

interface Weather {
  name: string;
  main: {temp: number};
}

interface Suggestion {
  name: string;
  lat: number;
  lon: number;
}
type RootStackParamList = {
  Home: undefined;
  Details: {weather: Weather};
  Settings: undefined;
};

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<Weather | null>(null);
  const [error, setError] = useState<string>('');
  const [unit, setUnit] = useState<string>('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const fetchWeather = async (selectedCity?: string) => {
    try {
      const data = await getWeatherByCity(selectedCity || city);
      setWeather(data);
      setError('');
      setShowSuggestions(false);
    } catch (err) {
      setError('City not found');
    }
  };

  const fetchCurrentLocationWeather = async () => {
    const metric = await AsyncStorage.getItem('unit');
    setUnit(metric || 'Metric');

    const result = await request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    );

    if (result === RESULTS.GRANTED) {
      Geolocation.getCurrentPosition(
        async position => {
          const {latitude, longitude} = position.coords;
          try {
            const data = await getWeatherByCoords(latitude, longitude);
            setWeather(data);
            setError('');
          } catch (err) {
            setError('Failed to fetch weather for your location');
          }
        },
        err => {
          setError('Failed to retrieve location');
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    } else {
      setError('Location permission denied');
    }
  };

  const fetchCitySuggestions = async (query: string) => {
    if (query.trim() === '') {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    if (query.length < 3) {
      setShowSuggestions(false);
      return;
    }
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct`,
        {
          params: {
            q: query,
            appid: 'ecf49d48e45ebbc5ecf992badeb3e81e',
            limit: 5,
          },
        },
      );

      const uniqueCities = Array.from(
        new Set(response?.data?.map((item: Suggestion) => item.name)),
      ).map(cityName =>
        response.data.find((city: Suggestion) => city.name === cityName),
      );
      setSuggestions(uniqueCities);
      setShowSuggestions(true);
    } catch (err) {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    fetchCurrentLocationWeather();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={{flexDirection: 'row', marginBottom: 20}}>
        <Text style={{fontSize: 20, color: '#fff', fontWeight: '800'}}>
          Weather App
        </Text>
        <TouchableOpacity
          style={{marginLeft: '45%', marginBottom: '5%', top: 2}}
          onPress={() => navigation.navigate('Settings')}>
          <Text
            style={{
              backgroundColor: '#FFB200',
              color: '#fff',
              fontWeight: '500',
              padding: 4,
              paddingHorizontal: 10,
              borderRadius: 7,
            }}>
            Setings
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Search for a city"
          value={city}
          onChangeText={text => {
            setCity(text);
            fetchCitySuggestions(text);
          }}
        />
        <TouchableOpacity
          onPress={() => fetchWeather()}
          style={{position: 'absolute', width: 67, marginLeft: '78%', top: 7}}>
          <Text
            style={{
              backgroundColor: '#FFB200',
              color: '#fff',
              fontWeight: '500',
              padding: 4,
              paddingHorizontal: 10,
              borderRadius: 20,
            }}>
            Search
          </Text>
        </TouchableOpacity>
        {error ? <Text style={styles.error}>{error}</Text> : null}

        {showSuggestions && (
          <FlatList
            data={suggestions}
            keyExtractor={(item, index) => `${item.lat}-${item.lon}-${index}`}
            style={{
              backgroundColor: '#fff',
              borderRadius: 10,
              marginTop: 5,
              padding: 10,
            }}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  setCity(item.name);
                  fetchWeather(item.name);
                }}>
                <Text style={{padding: 10, color: '#000'}}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
      <View style={styles.container}>
        {weather ? (
          <View>
            <View style={{marginHorizontal: '0%'}}>
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/icons/loc.png')}
                  style={{
                    marginBottom: '3%',
                    top: 0,
                    height: 40,
                    width: 40,
                  }}
                />
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 28,
                    fontWeight: 'bold',
                    marginBottom: '5%',
                  }}>
                  {weather?.name}
                </Text>
              </View>

              <TouchableOpacity
                onPress={fetchCurrentLocationWeather}
                style={{marginBottom: '15%', marginHorizontal: '10%'}}>
                <Text
                  style={{
                    backgroundColor: '#FFB200',
                    color: '#fff',
                    fontSize: 16,
                    fontWeight: '400',
                    textAlign: 'center',
                    borderRadius: 20,
                    paddingVertical: 7,
                  }}>
                  Current Location
                </Text>
              </TouchableOpacity>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 90,
                    fontWeight: '900',
                  }}>
                  {weather?.main?.temp}
                </Text>
                {unit === 'Faren' ? (
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      fontSize: 30,
                      fontWeight: '700',
                    }}>
                    °F
                  </Text>
                ) : (
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      fontSize: 30,
                      fontWeight: '700',
                    }}>
                    °C
                  </Text>
                )}
              </View>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('Details', {weather})}
              style={{marginTop: '15%'}}>
              <Text
                style={{
                  backgroundColor: '#FFB200',
                  color: '#fff',
                  textAlign: 'center',
                  paddingVertical: '3%',
                  marginHorizontal: '20%',
                  borderRadius: 20,
                }}>
                See Details
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '30%',
            }}>
            <ActivityIndicator size={'large'} color={'yellow'} />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#005C97',
    flex: 1,
    alignItems: 'center',
  },
  mainContainer: {
    padding: 20,
    backgroundColor: '#005C97',
    flex: 1,
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderColor: '#fff',
    borderRadius: 20,
    paddingLeft: 20,
    color: '#fff',
  },
  error: {color: 'orange', marginTop: 10, marginLeft: 10, bottom: 15},
});

export default HomeScreen;
