import React, {type ReactElement } from 'react'
import { Components } from '../components'
import { UI } from '../ui';
import { NextPageWithLayout } from './_app';


const NotFound: NextPageWithLayout = () => {
   const {Text} = Components;
  return (
    <Text color={'fade'} family='cormorant' size={'md'}>Not Found</Text>
  )
}


NotFound.getLayout = function getLayout(page: ReactElement){
  const {Layout} = UI;
  return(
    <Layout>
      {page}
    </Layout>
  )
}

export default NotFound;