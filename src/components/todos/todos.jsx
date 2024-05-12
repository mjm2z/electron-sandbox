import { styled } from '@stitches/react';
import React from 'react';
import { Todo } from './todo';
import { TodosHeader } from './todos-header';

const TodosContainer = styled('div', {
	border: '1px solid #6e7f80',
	borderRadius: '5px',
	width: '90%',
	height: '90vh',
	// height: '90vh',
	// margin: '0 auto',
});

export const Todos = () => {
	return (
		<TodosContainer>
			<TodosHeader />
			<Todo />
		</TodosContainer>
	);
};
