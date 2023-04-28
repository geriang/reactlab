export default function SumOfTwo(props){
    return (
        <div>
            <h2>{props.number1} + {props.number2} = {parseInt(props.number1)+parseInt(props.number2)}</h2>
        </div>
    )
    
    }