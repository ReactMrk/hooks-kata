import './App.css';
import CustomerManagement from './customer/CustomerManagement';
import { CustomerProvider } from './customer/CustomerContext';

const App = () => {
  return (
    <div className="container">
      <h1>Customer Management System</h1>
      <CustomerProvider>
        <CustomerManagement />
      </CustomerProvider>
    </div>
  )
};

export default App