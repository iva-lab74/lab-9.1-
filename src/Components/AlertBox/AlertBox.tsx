import type{AlertBoxProps} from "../../types/index"
//make the alert message popup and show a message

export default function AlertBox(props: AlertBoxProps) {
    return(
        <div className={`alert alert-${props.type}`} role="alert">
            <p>{props.message}</p>
            {props.onClose && (
            <button onClick={props.onClose}>x</button> 
            )}
            {props.children}  //show everything else as well
        </div>
    )
}