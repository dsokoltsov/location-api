import Selector from "../selector/Selector";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect, useState } from "react";
import { fetchCountriesAction } from "../../app/actions";
import { SelectorData } from "../../globals";

function Main() {

  const dispatch = useAppDispatch();
  const countries = useAppSelector(state => state?.country?.countries);

  const [selectedItem, setSelectedItem] = useState<SelectorData | null>(null);

  useEffect(() => {
    dispatch(fetchCountriesAction());
  }, [dispatch]);

  const handleSelect = (data: SelectorData) => {
    setSelectedItem(data);
  }

  return (
    <div>
      <Selector selectArray={countries} selectCallback={handleSelect} selected={selectedItem}></Selector>
    </div>
  );
}

export default Main;
