/* eslint-disable import/no-unresolved */
import axios from '@js/axios.js';

export default {
	SET_LOGGED_IN_USER_INFO(state, user) {
		state.loggedInUser = user;
		state.isUserLoggedIn = true;
	},
	LOGOUT_USER(state) {
		state.loggedInUser = null;
		state.isUserLoggedIn = false;
	},
	SET_BEARER(_, accessToken) {
		axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
	},
};
