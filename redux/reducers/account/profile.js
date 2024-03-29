import fp from 'lodash/fp';

export const FETCH_BASIC_INFO_REQUESTING = 'FETCH_BASIC_INFO_REQUESTING';
export const FETCH_BASIC_INFO_FAILURE = 'FETCH_BASIC_INFO_FAILURE';
export const FETCH_BASIC_INFO_SUCCESS = 'FETCH_BASIC_INFO_SUCCESS';
export const FETCH_BASIC_INFO_INVALID = 'FETCH_BASIC_INFO_INVALID';

export const FETCH_DETAIL_INFO_REQUESTING = 'FETCH_DETAIL_INFO_REQUESTING';
export const FETCH_DETAIL_INFO_FAILURE = 'FETCH_DETAIL_INFO_FAILURE';
export const FETCH_DETAIL_INFO_SUCCESS = 'FETCH_DETAIL_INFO_SUCCESS';
export const FETCH_DETAIL_INFO_INVALID = 'FETCH_DETAIL_INFO_INVALID';
export const RESET_PROFILE = 'RESET_PROFILE'

const initialState = {
    readyStatus: FETCH_DETAIL_INFO_INVALID,
    err: null,
    data: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_PROFILE:
      return initialState;
    case FETCH_DETAIL_INFO_REQUESTING:
      return fp.assign(state, {
          readyStatus: FETCH_DETAIL_INFO_REQUESTING
      });
    case FETCH_DETAIL_INFO_FAILURE:
      return fp.assign(state, {
          readyStatus: FETCH_DETAIL_INFO_FAILURE,
          err: action.err
      });
    case FETCH_DETAIL_INFO_SUCCESS:
      return fp.assign(state, {
          readyStatus: FETCH_DETAIL_INFO_SUCCESS,
          data: action.data
      });
    default:
      return state;
  }
}
