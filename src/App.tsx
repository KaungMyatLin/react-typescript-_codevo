import { Greet } from './components/Greet'
import './App.css';
import { Person } from './components/Person'
import { PersonList } from './components/PersonList';

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
    </div>
  );
}

export default App;
