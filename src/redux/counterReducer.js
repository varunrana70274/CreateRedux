import {ADD_TO_ARRAY, SAVE_STRING} from './actions';

// counterReducer.js
const initialState = {
  objectData: null,
  yourString: '',
  dataArray: [],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_OBJECT':
      return {...state, objectData: action.payload};
    case SAVE_STRING:
      return {...state, yourString: action.payload};
    case ADD_TO_ARRAY:
      const newData = action.payload;
      if (state && state.dataArray && !state.dataArray.includes(newData)) {
        return {
          ...state,
          dataArray: [...state?.dataArray, newData],
        };
      } else {
        return console.log('====================================',newData);
      }
    default:
      return state;
  }
};

export default counterReducer;
