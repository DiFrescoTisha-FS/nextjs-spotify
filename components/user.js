import User from './user';

function UserList({ users }) {
    return (
        <>
            <h1>List of users</h1>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <User user={user} />
                    </div>
                )
            })}
        </>
    )
}