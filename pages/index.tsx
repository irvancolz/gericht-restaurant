import type { ReactElement } from 'react';
import { NestedLayout } from '../components/layout nested';``
import { NextPageWithLayout } from './_app';
import Text from '../components/text';


const Home: NextPageWithLayout = () => {
  return (
    <>
      <Text size='xl' color='gold' family='open'>hamburgervons</Text>
    </>
  )
}

Home.getLayout = function getLayout(page : ReactElement){
  return(
      <NestedLayout>{page}</NestedLayout>
  )
}

export default Home;
