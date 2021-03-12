import inventoryAPI from '../../../api/ecommerce/inventories'
import { normalize, schema } from "normalizr";
import { arrayOfInventories } from '../../../schemas'
import {
  FETCH_INVENTORIES_REQUESTING,
  FETCH_INVENTORIES_SUCCESS,
  FETCH_INVENTORIES_FAILURE, FETCH_INVENTORIES
} from "../../reducers/ecommerce/inventories";
import {
  FETCH_ONE_INVENTORY_FAILURE,
  FETCH_ONE_INVENTORY_SUCCESS,
  FETCH_ONE_INVENTORY_REQUESTING, FETCH_ONE_INVENTORY, SELECT_INVENTORY_ID
} from "../../reducers/ecommerce/oneInventory";

import { all, select, put, call, fork, takeEvery } from "redux-saga/effects"
import {CLONE_INVENTORY} from "../../reducers/cms/editInventory";


function *fetchInventories(){
  const status = select( state => state.inventories.readyStatus);
  if(status === FETCH_INVENTORIES_SUCCESS ||
    status ===  FETCH_INVENTORIES_REQUESTING
  ) return
  yield put({type: FETCH_INVENTORIES_REQUESTING});

  try {
    const json = yield call(inventoryAPI.list, { data: { filter: {} }});
    const normalizedData = yield call(normalize, json.data.data, arrayOfInventories);
    let data = normalizedData.entities.inventories;
    if(typeof data === 'undefined') data = {};

    yield put({type: FETCH_INVENTORIES_SUCCESS, data: data})
  } catch (err) {
    yield put({type: FETCH_INVENTORIES_FAILURE, data: data})
  }
}

function *fetchOneInventory({ pid }){
  console.log('lolololololololol')
  let oneInventory = select(state => state.oneInventory);

  if(pid in oneInventory &&
    (oneInventory[pid].readyStatus === FETCH_ONE_INVENTORY_SUCCESS ||
      oneInventory[pid].readyStatus ===  FETCH_ONE_INVENTORY_REQUESTING)
  ) return;

  yield put({type: SELECT_INVENTORY_ID, id: parseInt(pid)});
  yield put({type: FETCH_ONE_INVENTORY_REQUESTING});

  try {
    const json = yield call(inventoryAPI.get, pid);
    yield all([
      put({type: CLONE_INVENTORY, pid: pid, data: json.data.data}),
      put({type: FETCH_ONE_INVENTORY_SUCCESS, data: json.data.data}),
    ]);
  } catch (err) {
    yield put({type: FETCH_ONE_INVENTORY_FAILURE, err: err})
  }
}

export default [
  takeEvery(FETCH_INVENTORIES, fetchInventories),
  takeEvery(FETCH_ONE_INVENTORY, fetchOneInventory)
]