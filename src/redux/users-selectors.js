export const getUsers = (state) => {
  return state.usersPage.users
}

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage
}

export const getPageSize = (state) => {
  return state.usersPage.pageSize
}

export const getTotalPages = (state) => {
  return state.usersPage.totalPages
}

export const getIsFetching = (state) => {
  return state.usersPage.isFetching
}

export const getIsLoadingFollowHandler = (state) => {
  return state.usersPage.isLoadingFollowHandler
}

export const getFollowHandlerArrayOfUsers = (state) => {
  return state.usersPage.followHandlerArrayOfUsers
}