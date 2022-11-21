import { useEffect, useRef, useState } from "react"

export const MutableRef = () => {
    const [timer, setTimer] = useState(0)
    const interValRef = useRef<number | null>(null)

    const stopTimer = () => {
// clearInterval expects param id:number|undefined. Argument of id:'number|null' is not assignable to.
        if (interValRef.current)    // solution.
            window.clearInterval(interValRef.current)
    }
    useEffect(() => {
// setInterval returns id:number, current holds identity. Type 'number' is not assignable to.
// make <number | null> instead of implicit typescript infers useRef(null).
        interValRef.current = window.setInterval(
            () => {
                setTimer(timer => timer + 1)
            },1000 )
        return () => {
            stopTimer();
        }
    }, [])
    return (
        <div>
            HookTimer - {timer} - 
            <button onClick={() => stopTimer()}>Stop Timer</button>
        </div>
    )
}