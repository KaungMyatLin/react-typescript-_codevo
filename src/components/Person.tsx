export const Person = (props: PersonProps) => {
    return <div> {props.name.first} {props.name.last} </div>
}

type PersonProps = {
    name: {
        first: string,
        last: string
    }
}