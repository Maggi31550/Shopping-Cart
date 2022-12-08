import 'bootstrap/scss/bootstrap.scss'
import './style.sass';
import Cart from './components/Cart';
import Header from './components/Header';


function App() {

	return (
		
		<div className="page-cart">
			<Header/>

			<main className='site-main'>
				<div className="container">
					<Cart/>

				</div>
			</main>

		</div>
	);
}

export default App;
