import React from 'react';
import s from './Users.module.css';
import axios from "axios";
import defaultUserPhoto from '../../assets/images/user.jpg';

const Users = (props) => {
    debugger
    console.log('RENDER USERS')
    if(props.users.length===0){

        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            })

       /* props.setUsers([
            {
                id: '1',
                followed: false,
                avaUrl: 'https://html5css.ru/howto/img_avatar2.png',
                fullName: 'Ivanov D.',
                status: 'Dont worry be happy',
                location: {
                    cityName: 'Minsk',
                    country: 'Belarus'
                },
            },
            {
                id: '2',
                followed: false,
                avaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLg7YYue_VyRsQLCwmguYP8nSLBwe24G8WgqJr8i_YxHwyHXbn9wqkZXAwdAvSGF9kVMk&usqp=CAU',
                fullName: 'Petrov F.',
                status: 'Dont worry be happy too',
                location: {
                    cityName: 'Kiev',
                    country: 'Ukraine'
                },
            },
            {
                id: '3',
                followed: false,
                avaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUHK_xd4GHWvzXkA3DygGiU3---JdQdHXbA_uTguFvckcwsMDakFodlYlaQMv4p6fWM5I&usqp=CAU',
                fullName: 'Vetrov M.',
                status: 'Have a good day',
                location: {
                    cityName: 'Grodno',
                    country: 'Belarus'
                },
            },
            {
                id: '4',
                followed: true,
                avaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyuCwSGCSFDd2fiwEJIivTZMtyi_C-rJviL6eaNYj_D6JSCsqGeNKxGSikjn8QcPqPvWQ&usqp=CAU',
                fullName: 'Dontsov C.',
                status: 'Dont worry be happy',
                location: {
                    cityName: 'Tbilisi',
                    country: 'Georgia'
                },
            }
        ])*/
    }



    return (
        <div style={{padding: '1rem'}}>
            {props.users.map(u => {
                return (
                    <div key={u.id} style={{padding: '1rem'}} className={s.userBox}>
                        <div style={{width: '100px'}}>
                            <div>
                                <img className={s.ava} src={u.photos.small !== null ? u.photos.small:defaultUserPhoto}/>
                            </div>
                            <div>
                                {
                                    u.followed
                                    ? <button onClick={() => props.unfollowUser(u.id)}>Unfollow</button>
                                    : <button onClick={() => props.followUser(u.id)}>Follow</button>
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
    );
};

export default Users;