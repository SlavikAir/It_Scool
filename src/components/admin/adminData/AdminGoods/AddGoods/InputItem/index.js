

const InputItem = ({ value, children, ...props }) => {
    return (
        <div className="add-goods-item">
            <span>{children}</span>
            <input type="text" value={value} {...props}></input>
        </div>

    )
}

export default InputItem