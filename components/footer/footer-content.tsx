import styles from './footer.module.css'
import {Text} from '../text'
export function FooterContent(){
    return(
        <div className={styles.container}>
            <Text variant='title'>
            footer
            </Text>
        </div>
    )
}