import React, {Fragment, useState} from 'react'
import Head from 'next/head'
import BoatLayout from '../components/BoatLayout'

import Router from 'next/router'
import fetch from 'isomorphic-unfetch'
import nextCookie from 'next-cookies'
import { withAuthSync, logout } from '../utils/auth'
import getHost from '../utils/get-host'

import { useRouter } from 'next/router';

import URLSafeBase64 from 'urlsafe-base64';

function Boat(props){
    const router = useRouter();
    const imageSrcBuff = URLSafeBase64.decode(router.query.src);
    const imageSrcBase64 = URLSafeBase64.decode(router.query.src).toString('base64');
    
  return (
      <Fragment>
        <Head>
            <title>Kamera App</title>
        </Head>
        <BoatLayout data={props} imageSrcBase64={imageSrcBase64} imageSrcBuff={imageSrcBuff} logout={logout} imgSrcId={router.query.id} />
      </Fragment>
  )
}

Boat.getInitialProps = async ctx => {

    const { token }  = nextCookie(ctx)
    const apiUrl = getHost(ctx.req) + '/api/index'
  
    const redirectOnError = () =>
      typeof window !== 'undefined'
        ? Router.push('/login')
        : ctx.res.writeHead(302, { Location: '/login' }).end()
  
    try {
      const response = await fetch(apiUrl, {
        credentials: 'include',
        headers: {
          Authorization: JSON.stringify({ token })
        }
      });
  
      //console.log(response.statusText);
  
      if (response.statusText === 'OK') {
        const js = await response.json()
        //console.log('js', js)
        return js
      } else {
        // https://github.com/developit/unfetch#caveats
        return await redirectOnError()
      }
    } catch (error) {
      // Implementation or Network error
      return redirectOnError()
    }
  }
  

export default withAuthSync(Boat)