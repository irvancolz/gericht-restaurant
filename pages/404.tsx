import React, {type ReactElement } from 'react'
import { Layout } from '../components'
import { NextPageWithLayout } from './_app';
import Text from '../components/text';

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