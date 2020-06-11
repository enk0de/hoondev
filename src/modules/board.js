import { firestore } from '../api/firebase';

const BOARD_SAVE = 'board/SAVE';
const BOARD_REMOVE = 'board/REMOVE';
const BOARD_READ = 'board/READ';
const BOARD_TOGGLE = 'board/TOGGLE';

const BOARD_LIST = 'board/LIST';
const BOARD_LIST_SUCCESS = 'board/LIST_SUCCESS';
const BOARD_LIST_FAILURE = 'board/LIST_FAILURE';

export const save = (data) => ({
  type: BOARD_SAVE,
  data: data,
});

export const remove = (id) => ({
  type: BOARD_REMOVE,
  id: id,
});

export const toggle = (id) => ({
  type: BOARD_TOGGLE,
  id: id,
});
// export const list = (b_id) => ({
//   type: BOARD_LIST,
//   board_id: b_id,
// });

const initialState = {
  maxNo: 1,
  documents: [],
  selectedDocument: {},
  loading: {
    get: false,
  },
};

export const listingAsync = () => async (dispatch) => {
  dispatch({ type: BOARD_LIST });
  try {
    const response = await firestore
      .collection('documents')
      .get()
      .then((querySnapshot) => {
        const respData = [];
        querySnapshot.forEach((doc) => {
          respData.push(doc.data());
        });
        return respData;
      });
    dispatch({
      type: BOARD_LIST_SUCCESS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: BOARD_LIST_FAILURE,
      payload: e,
      error: true,
    });
  }
};

const board = (state = initialState, action) => {
  switch (action.type) {
    case BOARD_SAVE:
      return {};
    case BOARD_REMOVE:
      return {
        ...state,
        documents: state.documents.filter((doc) => doc.id !== action.id),
      };
    case BOARD_TOGGLE:
      return {
        ...state,
        selectedDocument: state.documents.find((doc) => doc.id === action.id),
      };
    case BOARD_LIST:
      return {
        ...state,
        loading: {
          ...state.loading,
          get: false,
        },
      };
    case BOARD_LIST_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          get: true,
        },
        documents: action.payload,
      };
    case BOARD_LIST_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          get: false,
        },
      };
    default:
      return state;
  }
};

export default board;
