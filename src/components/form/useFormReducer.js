export const initialState = {
  loading: false,
  success: false,
  error: null,
};

export function formReducer(state, action) {
  switch (action.type) {
    case "SUBMIT_START":
      return { loading: true, success: false, error: null };

    case "SUBMIT_SUCCESS":
      return { loading: false, success: true, error: null };

    case "SUBMIT_ERROR":
      return { loading: false, success: false, error: action.payload };

    default:
      return state;
  }
}
