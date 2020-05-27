export default (state = [], action) => {
  // Rules for reducers
  // 1. reducers can never return undefined or it will break. Use null.
  // 2. produces 'state' or data used in app using only previous state + action
  // 3. reducer should not reach outside it's self. No api requests.
  // 4. must not mutate its input 'state' argument
  // Acceptable state updates in Reducers
  // Remove: state.filter(element => element !== 'hi')
  // Add: [ ...state, 'hi' ]
  // Replace: state.map(el => el === 'hi' ? 'bye':el)
  // Update property: { ...state, name: 'Sam'}
  // Add property: { ...state, age: 30 }
  // Remove property: { ...state, age: undefined } or _.omit(state, 'age')
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};
