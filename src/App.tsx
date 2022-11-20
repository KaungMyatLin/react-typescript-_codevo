import { Greet } from './components/basicpropsTut/Greet'
import './App.css';
import { Person } from './components/basicpropsTut/Person'
import { PersonList } from './components/basicpropsTut/PersonList';
import { Status } from './components/advpropsTut/Status';
import { Heading } from './components/advpropsTut/Heading'
import { Oscar } from './components/advpropsTut/Oscar';
import { Button } from './components/eventpropsTut/Button';
import { Input } from './components/eventpropsTut/Input';
import { Container } from './components/stylepropsTut/Container';

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
    </div>
  );
}

export default App;
