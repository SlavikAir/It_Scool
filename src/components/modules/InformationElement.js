import { Link } from 'react-router-dom';



function InformationElement(props) {
    return (
        <li className="information-element">
            <Link className='text-dark' to={`/`}>{props.name}</Link>
        </li>
    )
}

export { InformationElement }