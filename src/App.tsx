import { Greet } from './components/basicpropsTut/multipropsfromcmpnt'
import './App.css';
import { Person } from './components/basicpropsTut/multipropsnestedasone/Person'
import { PersonList } from './components/basicpropsTut/PersonList';
import { Status } from './components/advpropsTut/Status';
import { Heading } from './components/advpropsTut/Heading'
import { Oscar } from './components/advpropsTut/Oscar';
import { Button } from './components/eventpropsTut/onClickOfbtnfromcmpntProps';
import { Input } from './components/eventpropsTut/onChngeOfinpfromcmpntProps';
import { Container } from './components/stylepropsTut/cssPropertiesfordivstylesfromcmpntProps';

import { ThemeContextProvider } from './components/contextTut/reactNodeforchildrenpropsfromcmpntProps'
import { Box } from './components/contextTut/Box'
import { Counter } from './components/classCmpntTut/propsxstateofclassCmpnt';

function App() {
  const pName = {
    first: 'Bruce',
    last: 'Wayne'
  }
  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]

  return (
    <div className="App">
      <Greet name='John' isLoggedIn={false}/>
      <Person name={pName} />
      <PersonList names={nameList} />
      <Status status='loading' />
      <Heading>tut5 - adv props</Heading>
      <Oscar>
        <Heading>Oscar goes to Leo</Heading>
      </Oscar>
      <Button propOnClick={(event) => {console.log(event)}} />
      <Input value='' handleChange={event => console.log(event)} />
      <Container styles={{border:'1px solid black', padding: '1rem'}} />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <Counter message='count value is ' />
    </div>
  );
}

export default App;
