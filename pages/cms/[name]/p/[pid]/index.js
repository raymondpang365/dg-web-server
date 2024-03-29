import React, { useEffect } from 'react'
import Head from "@components/ecommerce/Head";
import Nav from "@components/cms/cmsNav";
import appSt from '../../../../home.module.scss'
import {FETCH_ONE_INVENTORY} from "../../../../../redux/reducers/ecommerce/oneInventory";
import {END} from 'redux-saga';
import { wrapper } from "../../../../../redux/store";
import { useSelector} from "react-redux";
import { FETCH_ONE_INVENTORY_FAILURE } from "../../../../../redux/reducers/ecommerce/oneInventory";
import Product from "@components/cms/inventoryForm";
import {CONNECTION_ERROR, SERVER_ERROR} from "../../../../../helpers/handleErrors";

export default function ProductPage(){
  const oneInventory = useSelector(state => state.oneInventory);
  console.log(oneInventory)
  if(oneInventory.readyStatus === FETCH_ONE_INVENTORY_FAILURE){
    if(oneInventory.err.type === CONNECTION_ERROR){
      Router.push('/error/disconnected')
    }
    else{
      if(oneInventory.err.type === SERVER_ERROR){
        Router.push('/error/denied')
      }
    }
  }

  return (
    <div>
      <style jsx global>{`
    body {
      margin: 0;
      overflow-x: hidden;
    }
  `}</style>
      <Head/>
      <main className={appSt.app}>
        <Nav action={'update'}/>
        <Product oneInventory={oneInventory}/>
      </main>
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(async ({res, store, query}) => {
  const { pid } = query;
  console.log('the query');
  console.log(query);
  store.dispatch({type: FETCH_ONE_INVENTORY, pid: pid, res:res });
  store.dispatch(END);
  await store.sagaTask.toPromise();
  return {props: {custom: 'custom'}};
});



