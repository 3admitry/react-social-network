import React from 'react';
import {addMessageActionCreator, changeTextAreaPostActionCreator} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onChangeTextArea: (value) => {
            dispatch(changeTextAreaPostActionCreator(value))
        }
    }
}

// const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(Dialogs);
