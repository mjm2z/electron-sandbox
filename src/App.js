import { styled } from '@stitches/react';
import { Market } from './components/market';

const AppContainer = styled('div', {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100vh',

	// alignItems: 'center',
	// alignContent: 'center',
});

function App() {
	return (
		<AppContainer>
			{/* <Todos /> */}
			<Market />
		</AppContainer>
	);
}

export default App;
