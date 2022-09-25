import type { ReactElement } from 'react';
import { NestedLayout } from '../components/layout nested';``
import { NextPageWithLayout } from './_app';
import { Components } from '../components';

const Home: NextPageWithLayout = () => {
  const {Text} = Components
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
