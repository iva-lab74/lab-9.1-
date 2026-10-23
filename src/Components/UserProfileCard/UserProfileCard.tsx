import type { UserProfileCardProps } from "../../types/index"


export default function UserProfileCard(props: UserProfileCardProps) {
    //values need to be used in the prop
    const {user, showEmail= true, showRole = true, onEdit, children}= props;
    //take and show/ it needs to be called in order to be used
    return (
        <div className="user-profile-card">
            
            {props.user.id}
            {props.user.name}
            {props.user.email}
            {props.user.role}
            {props.user.avatarUrl}
            <img src={props.user.avatarUrl}></img>
            <p>
                <h1>Name:{props.user.name}</h1>
                

                {showEmail && <p>Email:{props.user.email}</p>}
                {showRole && <p>Role:{props.user.role}</p>}
            </p>
            {onEdit && (<button onClick={() => onEdit(user.id)}>Edit</button>)}
            {children}
        </div>
    ) 
}
