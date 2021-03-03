import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserWrapper from './components/user-wrapper';
import Container from 'react-bootstrap/Container';
import {useEffect, useState} from 'react';

function App() {
	const [users, setUsers] = useState(() => []);
	useEffect(() => {
		fetch('http://localhost:3001/user/team')
			.then((response) => {
				return response.json();
			})
			.then((parsedResponse) => {
				setUsers((prevState) => parsedResponse);
			});
	}, []);
	return (
		<Container>
			<div className="App">
				{users.map((user) => (
					<UserWrapper user={user} key={user.id} />
				))}
			</div>
		</Container>
	);
}

export default App;
