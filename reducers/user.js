import { LOGIN_SUCCESS } from "../actions/";

let cloneObject = function(obj) {
  console.log("sdfsdfsdfsdf" + obj);
  return JSON.parse(JSON.stringify(obj));
};
let newState = { user: { loggedIn: false } };

// the user reducer needs to be aware of when the user is logged in. Because of that,
//it needs to import the LOGIN_SUCCESS constant we defined in our actions before and export a default function,
//which will be called by Redux every time an action occurs in the app.
// Redux will automatically pass the current state of the app and the action occurred
//It’s up to the reducer to realize if it needs to modify the state or not based on the action.type.
//That’s why almost every time our reducer will be a function containing a switch statement,
//which modifies and returns the state based on what action occurred.
export default function(state = newState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      newState = cloneObject(state);
      newState.user.loggedIn = true;
      return newState;

    default:
      return state || newState;
  }
}
