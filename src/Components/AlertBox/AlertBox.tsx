import type{AlertBoxProps, AlertType} from "../../types/index"

//export multiple
//export default one thing

export function AlertType(props: AlertBoxProps) {
    return(
        <div>
            {props.type}
            {props.message}
            {props.onClose}
            {props.children}
        </div>
    )
}