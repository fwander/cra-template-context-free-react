import {ListInput} from "../grammar-lib/lib";


const VariableList: React.FC<ListInput> = (props) => {
    return <ul className={props.odd? 'virtical' : 'horizontal'}>
        {props.elements.map((element, index) => <li key={index}>
            {element}
        </li>)} 
        <div className={!props.odd? 'virtical' : 'horizontal'}>
        <button onClick={()=>{props.push()}}>+</button>
        <button onClick={()=>{props.pop()}}>-</button>
        </div>
    </ul>
}

export default VariableList;
