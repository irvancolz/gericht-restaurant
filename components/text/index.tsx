
interface textProps{
    children?: String,
    ref?: JSX.Element,
}

export function TextGold(props: textProps) {
  return (
    <div ref={props.ref}>{props.children}</div>
  )
}
