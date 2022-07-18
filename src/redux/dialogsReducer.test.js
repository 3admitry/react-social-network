import {addMessageAC, dialogsReducer, initialState} from "./dialogsReducer";

let initDialogsReducerState = initialState
let countMessagesinitDialogsReducerState = initDialogsReducerState.messages.length

test('count of messages should be increased', () => {
    let updateDialogsReducer = dialogsReducer(initDialogsReducerState, addMessageAC('Hello world'))

    expect(updateDialogsReducer.messages.length).toBe(countMessagesinitDialogsReducerState + 1)
})

test('new message text should be added', () => {
    let updateDialogsReducer = dialogsReducer(initDialogsReducerState, addMessageAC('Hello world'))

    expect(updateDialogsReducer.messages[updateDialogsReducer.messages.length - 1].message).toBe('Hello world')
})