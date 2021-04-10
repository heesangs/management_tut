import Customer from './components/Customer'
import './App.css';

const customer = {
  'name' : '홍길동',
  'birthday' : '12345',
  'gender' : 'W',
  'job' : 'teacher'
}

function App() {
  return (
    <Customer
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
    />
  );
}

export default App;
