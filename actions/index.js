export const LOGIN_SUCCESS = "LOGIN_SUCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export function login(userCredentials) {
  if (
    userCredentials.username == "devuser" &&
    userCredentials.password == "123456"
  ) {
    return { type: LOGIN_SUCCESS };
  } else {
    return { type: LOGIN_FAILURE };
  }
}
