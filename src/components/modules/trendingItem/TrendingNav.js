import { NavItem } from "./NavItem";



function TrendingNav(props) {


    return (
        <ul className=" trending-nav-block">
           <NavItem name={props.first} />
           <NavItem name={props.second} />
           <NavItem name={props.third} />
        </ul>

    )
}

export default TrendingNav;