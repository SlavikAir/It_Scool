
const UsersItem = ({ users: { _id, login, nick, createdAt} = {} }) => {
    return (
        <div className="user-item">
            <span>{_id}</span>
            <span>{login}</span> 
            <span>{nick}</span>
            <mark>{createdAt}</mark>


        </div>
    )
}

export default UsersItem