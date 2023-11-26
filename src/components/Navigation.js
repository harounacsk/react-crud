import { Link } from 'react-router-dom'

export default function Navigation() {
	return (
		<nav className='m-2'>
			<ul className='nav nav-pills'>
				<li><Link className="btn btn-outline-info ms-1" to="articles">Artikel</Link></li>
				<li><Link className="btn btn-outline-info ms-1" to="addarticle">Neu</Link></li>
			</ul>
		</nav>
	)
}
