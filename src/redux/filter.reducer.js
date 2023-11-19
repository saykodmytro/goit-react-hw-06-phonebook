const initialState = { filter: '' };

export const filteredReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'filtered/Contacts': {
      return {
        ...state,
        filter: action.payload,
      };
    }

    default:
      return state;
  }
};
