import Selector from "../selector/Selector";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect } from "react";
import {
  fetchCountriesAction,
  setSelectedCountryAction,
  fetchStatesAction,
  setSelectedStateAction,
  fetchCitiesAction,
  setSelectedCityAction
} from "../../app/actions";
import { SelectorData } from "../../globals";

import './Main.css';

function Main() {

  const dispatch = useAppDispatch();
  const countries = useAppSelector(state => state?.country?.countries);
  const states = useAppSelector(state => state?.state?.states);
  const cities = useAppSelector(state => state?.city?.cities);
  const selectedCountry = useAppSelector(state => state?.country?.selected);
  const selectedState = useAppSelector(state => state?.state?.selected);
  const selectedCity = useAppSelector(state => state?.city?.selected);

  function getName(object: SelectorData | null) {
    if(object) {
      const name = Object.keys(object).filter((str: string) => str.toLowerCase().includes('name'))[0];
      return object[name];
    }
    return '';
  }

  useEffect(() => {
    dispatch(fetchCountriesAction());
  }, [dispatch]);

  const handleSelectCountry = (data: SelectorData) => {
    dispatch(setSelectedCountryAction(data))
    dispatch(setSelectedStateAction(null))
    dispatch(setSelectedCityAction(null))
    dispatch(fetchStatesAction(getName(data)));
  }

  const handleSelectState = (data: SelectorData) => {
    dispatch(setSelectedStateAction(data))
    dispatch(setSelectedCityAction(null))
    dispatch(fetchCitiesAction(getName(data)));
  }

  const handleSelectCity = (data: SelectorData) => {
    dispatch(setSelectedCityAction(data))
  }

  return (
    <div className="main">
      <div className="main__wrapper">
        <Selector name='country' selectArray={countries} selectCallback={handleSelectCountry} selected={selectedCountry}></Selector>
        <Selector name='state' selectArray={states} selectCallback={handleSelectState} selected={selectedState}></Selector>
        <Selector name='city' selectArray={cities} selectCallback={handleSelectCity} selected={selectedCity}></Selector>
        <div className="main__result">{`{"country":"${getName(selectedCountry) || 'None'}","state":"${getName(selectedState) || 'None'}","city":"${getName(selectedCity) || 'None'}"}`}</div>
      </div>
    </div>
  );
}

export default Main;
