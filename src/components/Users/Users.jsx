import React from 'react';
import s from './Users.module.css';
import axios from "axios";
import defaultUserPhoto from '../../assets/images/user.jpg';

class Users extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                if (this.props.users.length === 0) {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalPages(response.data.totalCount)
                }
            })
    };


    paginationClickHandler = (newPage) => {
        this.props.setCurrentPage(newPage);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${newPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {

        let countPages = Math.ceil(this.props.totalPages / this.props.pageSize);
        let pages = [];
        for (let i = 1; i < countPages; i++) {
            pages.push(i)
        }

        return (
            <div style={{padding: '1rem'}}>
                <ul className={s.pagination}>
                    {pages.map(el => {
                        return <li key={'paginationItem-' + el}
                                   className={`${s.item} ` + (this.props.currentPage === el && s.selectedPage)}
                                   onClick={() => (this.paginationClickHandler(el))}
                        >
                            {el}
                        </li>
                    })}
                </ul>
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