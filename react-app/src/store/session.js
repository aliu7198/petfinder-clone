// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";

const setUser = (user) => ({
	type: SET_USER,
	payload: user,
});

const removeUser = () => ({
	type: REMOVE_USER,
});

const initialState = { user: null };

export const authenticate = () => async (dispatch) => {
	const response = await fetch("/api/auth/", {
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (response.ok) {
		const data = await response.json();
		if (data.errors) {
			return;
		}

		dispatch(setUser(data));
	}
};

export const login = (email, password) => async (dispatch) => {
	const response = await fetch("/api/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email,
			password,
		}),
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(setUser(data));
		return null;
	} else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};

export const logout = () => async (dispatch) => {
	const response = await fetch("/api/auth/logout", {
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (response.ok) {
		dispatch(removeUser());
	}
};

// export const signUp = (firstName, lastName, country, zipCode, email, password) => async (dispatch) => {
export const signUp = (first_name, last_name, email, password) => async (dispatch) => {
	// console.log("🚀 ~ file: session.js:72 ~ signUp ~ password:", password)
	// console.log("🚀 ~ file: session.js:72 ~ signUp ~ email:", email)
	// console.log("🚀 ~ file: session.js:72 ~ signUp ~ lastName:", lastName)
	// console.log("🚀 ~ file: session.js:72 ~ signUp ~ firstName:", firstName)
	// console.log(JSON.stringify({
	// 	first_name,
	// 	last_name,
	// 	email,
	// 	password,
	// }))
	const response = await fetch("/api/auth/signup", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			first_name,
			last_name,
			// country,
			// zipCode,
			email,
			password,
		}),
	});

	if (response.ok) {
		const data = await response.json();
		console.log("🚀 ~ file: session.js:93 ~ signUp ~ data:", data)
		dispatch(setUser(data));
		return null;
	} else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case SET_USER:
			return { user: action.payload };
		case REMOVE_USER:
			return { user: null };
		default:
			return state;
	}
}
