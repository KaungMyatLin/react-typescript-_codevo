export const Heading = (props: HeadingProps) => {
    return <h2>props.children</h2>
}

type HeadingProps = {
    children: string,
}

// for this tut5 - try remove props: HeadingProps & see in App.tsx

