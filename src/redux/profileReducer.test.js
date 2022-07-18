import {addPostAC, deletePostAC, initialState, profileReducer} from "./profileReducer";

let initProfileReducerState = initialState
let countPosts = initProfileReducerState.posts.length

test('count of posts should be increased', () => {
    let resultProfileReducerState = profileReducer(initProfileReducerState, addPostAC('new post'))

    expect(resultProfileReducerState.posts.length).toBe(countPosts + 1)
})

test('new post text should be added', () => {
    let resultProfileReducerState = profileReducer(initProfileReducerState, addPostAC('new post'))

    expect(resultProfileReducerState.posts[resultProfileReducerState.posts.length - 1].message).toBe('new post')
})

test('after deleting length of messages should be decrement', () => {
    let resultProfileReducerState = profileReducer(initProfileReducerState, deletePostAC(1))

    expect(resultProfileReducerState.posts.length).toBe(5)
})

test('after deleting length of messages shouldn\'t be decrement if id is incorrect', () => {
    let resultProfileReducerState = profileReducer(initProfileReducerState, deletePostAC(123))

    expect(resultProfileReducerState.posts.length).toBe(6)
})