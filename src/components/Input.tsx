export const Input = (props: InputProps) => {
    const handleInpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }
    return <input type="text" value={props.value} onChange={handleInpChange}/>
}

type InputProps = {
    value: string,
    handleChange:  (event: React.ChangeEvent<HTMLInputElement>) => void
}

// you can't have another way of writing with removing 
// InputProps while lefting only with handleInpChange.
// I have tested writing the above way and it became completely different.