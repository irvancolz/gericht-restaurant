import type { ReactElement } from 'react';
import { NestedLayout } from '../components/layout nested';
import { NextPageWithLayout } from './_app';


const Home: NextPageWithLayout = () => {
  return (
    <>
      <h1>home</h1>
    </>
  )
}

Home.getLayout = function getLayout(page : ReactElement){
  return(
      <NestedLayout>{page}</NestedLayout>
  )
}

export default Home;
