import { useEffect, useRef } from "react"


export const DomRef = () => {
    const inpRef = useRef<HTMLInputElement>(null!) 
    // without non-null assertion, 'inpRef.current' is possibly 'null'.

    useEffect(() => {
        inpRef.current.focus()
    }, [])

    return (
        <div>
            <input type="text" ref={inpRef} />
        </div>
    )
}