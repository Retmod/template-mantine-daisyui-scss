import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import Wrappers from './wrappers';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
root.render(
	<BrowserRouter>
		<Wrappers />
	</BrowserRouter>,
);
