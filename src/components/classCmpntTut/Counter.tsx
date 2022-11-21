import { Component } from "react";

type CounterProps = {
    message: string
}
type CounterState = {
    count: number
}
/* wants to show count value is 5. */
export class Counter extends Component<CounterProps, CounterState> {
/* ---- if y don't have props, place empty {}. No state, d CounterState. ---- */
    state = {
        count: 0
    }

    handleClick = () => {
        this.setState( prevState => ({count: prevState.count +1}))
    },
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Increment</button>
                {this.props.message} {this.state.count}
            </div>
        )
    }
}