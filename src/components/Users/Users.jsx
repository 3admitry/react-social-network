import React from 'react';
import s from './Users.module.css';
import axios from "axios";
import defaultUserPhoto from '../../assets/images/user.jpg';

class Users extends React.Component {

    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                if(this.props.users.length === 0){
                    this.props.setUsers(response.data.items)
                }
            })
    }

    render() {
        return (
            <div style={{padding: '1rem'}}>
                {this.props.users.map(u => {
                    return (
                        <div key={u.id} style={{padding: '1rem'}} className={s.userBox}>
                            <div style={{width: '100px'}}>
                                <div>
                                    <img className={s.ava}
                                         src={u.photos.small !== null ? u.photos.small : defaultUserPhoto}/>
                                </div>
                                <div>
                                    {
                                        u.followed
                                            ? <button onClick={() => this.props.unfollowUser(u.id)}>Unfollow</button>
                                            : <button onClick={() => this.props.followUser(u.id)}>Follow</button>
                                    }
                                </div>
                            </div>
                            <div style={{width: '244px'}}>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.cityName'}</div>
                            </div>

                        </div>)
                })}
            </div>
        )

    }
}


export default Users;