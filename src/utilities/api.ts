import axios from 'axios';

const instance = axios.create();

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJkLnNva29sdHNvdkBkdW5pY2UubmV0IiwiYXBpX3Rva2VuIjoiWmJuSUU1U2J3RFk3ejdDeGZRMXg0Ym1vd3lNcW5DcHB5VmEtNWVkal9OVzFUaGMwWUJCSjF6UV9HNDBNRTk3ekNyTSJ9LCJleHAiOjE2MzQxMzcwNDJ9.eWWqT2El6meiJIUnxDWd2s1-qpZYHEqD_aONy1qevwk';

const config = {
  headers: { Authorization: `Bearer ${token}` }
};

export function fetchCountriesData() {
  return instance.get(`https://www.universal-tutorial.com/api/countries`, config);
}

export function fetchStatesData(country: string) {
  return instance.get(`https://www.universal-tutorial.com/api/states/${country}`, config);
}

export function fetchCitiesData(state: string) {
  return instance.get(`https://www.universal-tutorial.com/api/cities/${state}`, config);
}
