import produce from 'immer'
import createReducer from './reducerUtills'
const intioanalState = {
  users:
  { name: 'enter fullname', age: 'enter age', city: 'enter city', email: 'enter email', phone: 'enter phone' }
}
const users = {
  setUserName(state, action) {
    state.users.name = action.payload
  },
  setAge(state, action) {
    state.users.age = action.payload
  },
  setCity(state, action) {
    state.users.city = action.payload
  },
  setUserEmail(state, action) {
    state.users.email = action.payload
  },
  setPhone(state, action) {
    state.users.phone = action.payload
  },
}
export default produce((state, action) => createReducer(state, action, users), intioanalState);