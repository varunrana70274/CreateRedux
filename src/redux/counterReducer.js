// counterReducer.js
const initialState = {
    objectData: null,
  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_OBJECT':
        return { ...state, objectData: action.payload };
      default:
        return state;
    }
  };
  
  export default counterReducer;
  