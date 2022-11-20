import React from "react"

export const Button = (props: ButtonProps) => {
    return (
        <button onClick={(event) => props.handleClick(event,1)}>Click</button>
    )
}

    type ButtonProps = {
        handleClick: (event: React.MouseEvent<HTMLButtonElement>, idparam: number) => void
}

// interface is reacttype MouseEvent and elementtype is HTMLButtonElement.