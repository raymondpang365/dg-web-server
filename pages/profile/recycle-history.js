import React from 'react'
import Head from "@components/ecommerce/Head";
import Nav from "@components/Nav";
import appSt from '../home.module.scss'
import st from './recycle-history.module.scss'
import ProfileMenu from "@components/profile/profileMenu";

export default function RecycleHistory(){
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
        <Nav/>
        <div className={st.navPadding}>
          <div className={st.paginationBar}>
            <h6> Total </h6>
          </div>
          <div className={st.catalogPage}>
            <ProfileMenu/>
          </div>
        </div>
      </main>
    </div>
  )
}
