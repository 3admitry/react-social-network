import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if(prevProps.status !== this.props.status){
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
                {!this.state.editMode &&
                    <div>
                        <span onClick={this.activateEditMode}>{this.state.status ? this.state.status:'Set your status'}</span>
                    </div>
                }

                {this.state.editMode &&
                    <div>
                        <input  onChange={(e)=>this.changeInputHandler(e.currentTarget.value)} onBlur={this.deActivateEditMode} type="text" value={this.state.status} autoFocus/>
                    </div>
                }
            </>
        );
    }
}

export default ProfileStatus;