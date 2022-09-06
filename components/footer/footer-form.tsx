import styles from './footer.module.css';
import {Text} from '../text';
import spoon from '../../public/assets/global/spoon-logo.svg'
import Image from 'next/image';
import { Button } from '../button';

export function FooterForm(){
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <Text fF='var(--title-font)' fS='var(--subtitle-size)'>Newsletter</Text>
                <span className="img">
                    <Image src={spoon} alt='logo' layout='fixed' priority/>
                </span>
            </div>
            <div className="body">
            <Text variant='title'>Subscribe To Our Newsletter</Text>
                <Text>And never miss latest updates!</Text>
            </div>
            <div className="form">
                <form>
                    <input type="text" />
                    <Button variant='primary' type='submit'>Subscribe</Button>
                </form>
            </div>
        </div>
    )
}