export const Status = (props: StatusProps) => {
    return (
        <div>
            <h2>Status - {props.status}</h2>
        </div>
    )
}

type StatusProps = {
    status: 'loading' | 'success' | 'error'
}