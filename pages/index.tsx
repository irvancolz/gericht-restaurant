import type { ReactElement } from 'react';
import { UI } from '../ui';
import { NextPageWithLayout } from './_app';
import { Components } from '../components';

const Home: NextPageWithLayout = () => {
  const {Heading, Section, Button} = Components;
  return (
    <>
    <Section>
      <Heading>hamburgervons</Heading>
      <Button>test</Button>
    </Section>
    </>
  )
};

Home.getLayout = function getLayout(page : ReactElement){
  const {NestedLayout} = UI;
  return(
      <NestedLayout>{page}</NestedLayout>
  )
};

export default Home;
