import styles from './section.module.css'

interface sectionProps{
    children?: JSX.Element | JSX.Element[],
    padding?: string,
    paddingY?: string,
    paddingX?: string,
    overflow?: string,
    justify?: string,
}

const defaultSectionProps: sectionProps ={
    children: <div>helo</div>,
    padding: '0px',
    overflow: 'auto',
    justify: 'center',
}

export function Section(props: sectionProps = defaultSectionProps){
    return(
        <section 
            className={styles.container}
            style={{
                padding: `${props.paddingX && props.paddingY ? `${props.paddingY} ${props.paddingX}` : `${props.padding}`}`,
                justifyContent: `${props.justify}`
            }}>
            {props.children}
        </section>
    )
}