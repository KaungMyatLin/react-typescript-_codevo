import { Greet } from './components/basicpropsTut/Greet'
import './App.css';
import { Person } from './components/basicpropsTut/Person'
import { PersonList } from './components/basicpropsTut/PersonList';
import { Status } from './components/status';
import { Heading } from './components/Heading'
import { Oscar } from './components/oscar';

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
      <Greet name='John' messageCount={20} isLoggedIn={false}/>
      <Person name={pName} />
      <PersonList names={nameList} />
      <Status status='loading' />
      <Heading>tut5 - adv props</Heading>
      <Oscar>
        <Heading>Oscar goes to Leo</Heading>
      </Oscar>
    </div>
  );
}

export default App;
