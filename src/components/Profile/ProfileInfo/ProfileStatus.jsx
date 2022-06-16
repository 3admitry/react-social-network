import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        value: this.props.status,
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
    }

    changeInputHandler = (newValue) => {
        this.setState({
            value: newValue
        })
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onClick={this.activateEditMode}>{this.state.value}</span>
                    </div>
                }

                {this.state.editMode &&
                    <div>
                        <input  onChange={(e)=>this.changeInputHandler(e.currentTarget.value)} onBlur={this.deActivateEditMode} type="text" value={this.state.value} autoFocus/>
                    </div>
                }
            </>
        );
    }
}

export default ProfileStatus;