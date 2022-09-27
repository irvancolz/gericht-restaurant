import Section from '../../components/section'
import {FooterForm} from './footer-form';
import { FooterContent } from './footer-content';
export function Footer(){
    return(
        <Section>
            <FooterForm />
            <FooterContent />
        </Section>
    )
}