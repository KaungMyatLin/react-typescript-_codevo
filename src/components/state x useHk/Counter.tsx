import { type } from 'os'
import { useReducer } from 'react'

const initialState = {count: 0}

type CounterState = {
    count: number
}

type UpdateAction = {
    type: 'increment' | 'decrement',
    payload: number
}

type ResetAction = {
    type: 'reset',
    // payload?: number  // if uncommeted, 'action.payload' is possibly 'undefined'.
}
// CounterAction x UpdateAction x  ResetAction combination is called discriminatd union
// , recmded approach for typing reducerFn.
type CounterAction = UpdateAction | ResetAction; 
function reducer (state: CounterState, action: CounterAction) {
    switch(action.type) {
        case 'increment':
            return {
                count: state.count + action.payload //(action.payload || 0)
            }
        case 'decrement':
            return {count: state.count - action.payload}
        case 'reset':
            return initialState
        default:
            return state
    }
}
type CounterProps = {
    reducer: (state: CounterState, action: CounterAction) => CounterState,
    initialState: {count: number} //must not use obj type.
}

export const Counter = (props: CounterProps) => {
    // const [state, dispatch] = useReducer(reducer, initialState)
    const [state, dispatch] = useReducer(props.reducer, props.initialState) //initialState is important.
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'increment', payload: 10})}>+10</button>
            <button onClick={() => dispatch({type: 'decrement', payload: 10})}>-10</button>
            <button onClick={() => dispatch({type: 'reset'})}>-10</button>
        </>
    )
}