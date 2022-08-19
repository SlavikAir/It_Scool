
export const NavItem = ({name, ...props}) => {
    return (
        <li className="trending-nav-item smallColor" {...props}>{name}</li>
    )
}