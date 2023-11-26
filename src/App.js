import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Articles from './components/article/Articles';
import AddArticle from './components/article/AddArticle';
import UpdateArticle from './components/article/UpdateArticle';



function App() {
	return (
		<BrowserRouter>
		<Navigation/>
			<Routes>
				<Route path='/' element={<Articles/>}/>
				<Route path='/articles' element={<Articles/>}/>
				<Route path='/addarticle' element={<AddArticle />}/>
				<Route path='/updatearticle/:id' element={<UpdateArticle/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
