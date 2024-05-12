import { styled } from '@stitches/react';

const TodosHeaderContainer = styled('div', {
	margin: '0 10px',
	display: 'flex',
	justifyContent: 'space-between',
	borderBottom: '1px solid black',
	// flexDirection: ''
});

const TodosHeaderText = styled('h1', {
	fontFamily: 'arial',
	fontWeight: '100',
});

const AddTodoButton = styled('button', {
	borderRadius: '50px',
	border: '1px solid grey',
	height: '40px',
	width: '40px',
	fontSize: '30px',
	fontWeight: '100',
	backgroundColor: 'inherit',
});

export const TodosHeader = () => {
	return (
		<TodosHeaderContainer>
			<TodosHeaderText>To Do</TodosHeaderText>
			<AddTodoButton>+</AddTodoButton>
		</TodosHeaderContainer>
	);
};
