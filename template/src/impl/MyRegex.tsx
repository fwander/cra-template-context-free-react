import {RegexInput, useFocusRef} from "../grammar-lib/lib";

const Regex: React.FC<RegexInput> = (props) => {
  const ref = useFocusRef<HTMLInputElement>();
  return <div><input ref={ref} onChange={(e) => { props.submit(e.target.value); }} defaultValue={props.text} /> {(props.isValid)? null : <div style = {{color: "red"}}>invalid input</div>}</div>
};

export default Regex;
