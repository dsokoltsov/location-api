// import { ReactComponent as Chevron } from '../../assets/icons/chevron-down.svg';
import './Selector.css';

interface SelectorData {
  [name: string]: string;
}

type SelectorName = 'country' | 'state' | 'city';

function Selector(props: {selectArray: SelectorData[], selectCallback: (arg: SelectorData) => void, selected: SelectorData | null, name: SelectorName}) {

  function getName(object: SelectorData | null) {
    if(object) {
      const name = Object.keys(object).filter((str: string) => str.toLowerCase().includes('name'))[0];
      return object[name];
    }
    return '';
  }

  const getDataFromName = (name: string) => {
    return props.selectArray.find((item) => Object.values(item).some((value) => value === name));
  }

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.currentTarget.value, getDataFromName(e.currentTarget.value))
    const selectedValue = getDataFromName(e.currentTarget.value);
    if(selectedValue) props.selectCallback(selectedValue)
  }

  return (
    <div className="selector">
      <select value={ getName(props.selected) } onChange={ (e: React.ChangeEvent<HTMLSelectElement>) => handleSelect(e) }>
        <option value="" selected disabled hidden>Choose {props.name}</option>
        {
          props.selectArray.map((item: SelectorData) => {
            return (
              <option value={ getName(item) } key={ getName(item) }>{ getName(item) }</option>
            )
          })
        }
      </select>
    </div>
  );
}

export default Selector;
