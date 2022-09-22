import {Section} from '../section'
import {FooterForm} from './footer-form';
import { FooterContent } from './footer-content';
export function Footer(){
    return(
        <Section gap='8rem'>
            <FooterForm />
            <FooterContent />
        </Section>
    )
}