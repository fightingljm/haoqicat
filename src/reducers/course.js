function cats(state=[],action) {
  switch (action.type) {
    case 'LOAD':
      return action.cats
    default:
      return state
  }
}
export default cats;
