import { useState, createContext } from 'react';

const CustomerContext = createContext();

const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  const [homeAlertText, setHomeAlertText] = useState("");
	const [homeAlertVisible, setHomeAlertVisible] = useState(false);
  const contextValue = {
    customers,
    setCustomers,
    homeAlertText,
    setHomeAlertText,
    homeAlertVisible,
    setHomeAlertVisible
  }
  return (
    <CustomerContext.Provider value={contextValue}>
      {children}
    </CustomerContext.Provider>
  );
};

export { CustomerContext, CustomerProvider };