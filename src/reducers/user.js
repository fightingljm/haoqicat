export function user(state='',action) {
  switch (action.type) {
    case 'SIGNIN':
      console.log('SIGNIN',action.currentUser)
      return action.currentUser
    case 'SIGNOUT':
      console.log('SIGNOUT',action.user)
      return action.user
    case 'FETCH_NAME':
      console.log('FETCH_NAME',action.username)
      return action.username
    default:
      return state
  }
}
