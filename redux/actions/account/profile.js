import {call, put, takeEvery} from "redux-saga/effects";

import userAPI from "../../../api/ecommerce/user";

import {
  FETCH_DETAIL_INFO_FAILURE,
  FETCH_DETAIL_INFO_SUCCESS,
  FETCH_DETAIL_INFO_REQUESTING
} from '../../reducers/account/profile'

export const FETCH_DETAIL_INFO='FETCH_DETAIL_INFO';

function *fetchUser(){
  yield put({ type: FETCH_DETAIL_INFO_REQUESTING });
  try {
    const json = yield call(userAPI.readSelf);
    if(typeof window === 'object'){
      yield put({ type: FETCH_DETAIL_INFO_SUCCESS, data: json.data.data })
    }
    else {
      return { data: json.data.data }
    }
  } catch (err) {
    if(typeof window === 'object'){
      yield put({ type: FETCH_DETAIL_INFO_FAILURE, err: err.message })
    }
    else {
      throw { err: err.message }
    }
  }
}

export default [
  takeEvery(FETCH_DETAIL_INFO, fetchUser )
]

