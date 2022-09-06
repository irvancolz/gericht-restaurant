import styles from './layout.module.css';
import {Topnav} from '../topnav';
import {Footer} from '../footer';

interface layoutProps{
    children?: JSX.Element,
}
export function Layout(props: layoutProps) {
  return (
    <div 
    className={styles.container}>
      <header>
        <Topnav />
      </header>
      <main>
        {props.children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
