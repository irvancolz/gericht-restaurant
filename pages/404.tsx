import React, {type ReactElement } from 'react'
import { Components } from '../components'
import { NextPageWithLayout } from './_app';

const {Layout,Text} = Components;

 const NotFound: NextPageWithLayout = () => {
  return (
    <Text color={'fade'} family='cormorant' size={'md'}>Not Found</Text>
  )
}


NotFound.getLayout = function getLayout(page: ReactElement){
  return(
    <Layout>
      {page}
    </Layout>
  )
}

export default NotFound;