interface layoutProps{
    children?: JSX.Element,
}
export function Layout(props: layoutProps) {
  return (
    <div>{props.children}</div>
  )
}
