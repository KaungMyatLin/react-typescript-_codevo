export const Oscar = (props: OscarProps) => {
    return <div>{props.children}</div>
}

type OscarProps = {
    children: React.ReactNode
}

// what is the type of react component to be used as children.
// the safest bet is react.react, a type provided by react type package.
// dependncies: { @types/react }.