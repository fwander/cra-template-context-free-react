import {SelectInput, useFocusRef } from "../grammar-lib/lib"

const BasicSelect: React.FC<SelectInput> = (props) => {
  const ref = useFocusRef<HTMLSelectElement>();

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.handleSelect(event.target.value);
  }
  return <select onChange={selectChange} ref={ref} defaultValue="None">
    <option value="None" key="None" disabled hidden>select</option>
    {(props.isFocused())? props.names.map((n: string)=>{return <option key={n} value={n}>{n}</option>}) : null}
  </select>
}

export default BasicSelect;

