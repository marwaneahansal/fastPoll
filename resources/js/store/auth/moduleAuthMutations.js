export default {
  SET_LOGGED_IN_USER_INFO (state, user) {
    state.loggedInUser = user;
    state.isUserLoggedIn = true;
  },
  LOGOUT_USER (state) {
    state.loggedInUser = null;
    state.isUserLoggedIn = false;
  }
}