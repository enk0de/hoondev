const BOARD_SAVE = 'board/SAVE';
const BOARD_REMOVE = 'board/REMOVE';
const BOARD_READ = 'board/READ';
const BOARD_TOGGLE = 'board/TOGGLE';

const BOARD_LIST = 'board/LIST';

export const save = (data) => ({
  type: BOARD_SAVE,
  data: data,
});

export const remove = (id) => ({
  type: BOARD_REMOVE,
  id: id,
});

export const read = (id) => ({
  type: BOARD_READ,
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
  documents: [
    {
      id: 0,
      date: new Date(2020, 1, 29, 3, 30),
      title: '테스트',
      desc: '데스크테스트',
      contents: 'zz',
    },
    {
      id: 1,
      date: new Date(2020, 1, 30),
      title: '테스트',
      desc: '데스크테스트',
      contents: 'dd',
    },
  ],
  selectedDocument: {},
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
    case BOARD_READ:
      return {};
    default:
      return state;
  }
};

export default board;
