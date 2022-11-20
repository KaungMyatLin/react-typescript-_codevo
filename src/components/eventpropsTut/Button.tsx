export const Button = (props: ButtonProps) => {
    return (
        <button onClick={(event) => props.propOnClick(event,1)}>Click</button>
    )
}

type ButtonProps = {
    propOnClick: (event: React.MouseEvent<HTMLButtonElement>, idparam: number) => void
}

// interface is reacttype MouseEvent and elementtype is HTMLButtonElement.