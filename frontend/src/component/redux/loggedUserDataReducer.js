const initialState = {
  LoggedUserData: {},
};

export const loggedInReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(type, "reducer T");
  console.log(payload,"reducer P");
  console.log(action,"reducer A");
  switch (type) {
    case "LOGGED_USER_DATA": {
        // let { data } = payload;
      console.log(payload);
      return {
        ...state,
        LoggedUserData: {
          ...state.LoggedUserData,
          LoggedUserData: payload?.data,
        },
      };
    }
    // console.log(state.userData);

    default:
      return state;
  }
};
