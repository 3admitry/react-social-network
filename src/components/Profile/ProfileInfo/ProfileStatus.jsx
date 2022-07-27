import React from 'react';
import style from "./ProfileInfo.module.scss"
import {EditOutlined} from "@ant-design/icons";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    changeInputHandler = (newStatus) => {
        this.setState({
            status: newStatus
        })
    }

    render() {
        return (
            <>
                <div className={style.statusTitle}>My status:</div>
                {!this.state.editMode &&
                    <div className={style.statusText}>
                            <span
                                onClick={this.props.isOwner ? this.activateEditMode : ''}>{this.state.status ? this.state.status : 'Set your status'}
                            </span>
                            <EditOutlined  onClick={this.props.isOwner ? this.activateEditMode : ''}/>
                    </div>
                }
                {this.state.editMode && this.props.isOwner &&
                    <div>
                        <input onChange={(e) => this.changeInputHandler(e.currentTarget.value)}
                               onBlur={this.deActivateEditMode} type="text" value={this.state.status} autoFocus/>
                    </div>
                }

            </>
        );
    }
}

export default ProfileStatus;