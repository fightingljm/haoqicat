function user(state={},action) {
  switch (action.type) {
    case 'SIGNIN':
      return action.userData
    default:
      return state
  }
}
export default user;
