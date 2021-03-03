import React, {useState} from 'react';
import {Card, ListGroup, Button} from 'react-bootstrap';
import TeamWrapper from './team-wrapper';

const UserWrapper = ({user}) => {
	let cardContent;
	if (user?.teams) {
		cardContent = (
			<ListGroup.Item>
				<div>Este es el usuario: {user.name}</div>
				{user.teams.map((team) => (
					<TeamWrapper team={team} />
				))}
			</ListGroup.Item>
		);
	} else {
		cardContent = ' cargando usuarios';
	}
	return (
		<>
			<Card style={{width: '18rem'}}>
				<ListGroup variant="flush">{cardContent}</ListGroup>
			</Card>
		</>
	);
};

export default UserWrapper;
