export const Container = (props: ContainerProps) => {
    return (
        <div style={props.styles}>
            Text go here.
        </div>
    )
}

type ContainerProps = {
    styles: React.CSSProperties
}