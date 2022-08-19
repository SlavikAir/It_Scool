

export const MyInput = ({name,...props}) => {
    return (
        <div className="my-input">
            <span className="">{name}</span>
            <input className=""{...props}/>
        </div>
    )
}