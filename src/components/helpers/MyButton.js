export const MyButton = ({children, ...props}) => {
    return (
        <button className="btn btn-outline-secondary"{...props}>
        {children}
        </button>
    )
}