import Section from '../../components/section'
import { FooterForm } from '../foooter form'
import { FooterContent } from '../footer content'
export function Footer(){
    return(
        <Section as="div">
            <FooterForm />
            <FooterContent />
        </Section>
    )
}