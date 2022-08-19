import {connect} from 'react-redux';



function modulesGreetings(props) {
    return (
        <div className="modules-greetings">
            <span className='text-light'>Hello  </span>
            <span className='text-light'>{props.nick}</span>
        </div>
    )
}

const CModulesGreetings = connect (state=> ({nick: state.auth.payload?.sub.login || []}))(modulesGreetings)

export default CModulesGreetings;