##  what tutorial taught me.
1.  tsx file requires you to supply atype on props param.
2.  tsx file warn you when you missed to supply a prop.
3.  aPropType defined with composition of multiprops under a common prop-objname. aPropType={'nameobj'} has composition of two props; f and l.
Note: {f:,l:} is supplied by you. aPropType={'nameobj'} is defined by you.
4.  Arrof-eachobj is supplied by you. aPropType={'nameobj'[]} is defined by you.
5.  React.ReactNode for nodes of react to input as props.children.
6.  set optional property by setting '?' value on propsType.
7.  set 'fallback empty or numberdefault' aproperty on destructuring of props.
8.  set union of types on status property of propType.
9.  propOnClick is a property of type. propOnClick has function and param 'event'. That event must have type. The type is interface MouseEvent (@types/react) and its type is another interface HTMLButtonElement(@types/react-dom).
10. stylePropType.
11. 