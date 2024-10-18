import { useState, useContext } from 'react';
import { CustomerContext } from './CustomerContext';
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';
import Alert from './Alert';

const CustomerManagement = () => {
	const [loggedIn, setLoggedIn] = useState(true);
	const { homeAlertVisible, homeAlertText, setCustomers } = useContext(CustomerContext);
	const handleLogin = loggedIn => () => {
		!loggedIn && setCustomers([]);
		setLoggedIn(!loggedIn);
	};
	
	return (
		<>
			<button onClick={handleLogin(loggedIn)}>{loggedIn ? "Log out" : "Log in"}</button>
			<Alert visible={homeAlertVisible} text={homeAlertText}/>
			{loggedIn && (
				<>
					<CustomerForm />
					<CustomerList />
				</>
			)}
		</>
	)
};

export default CustomerManagement;