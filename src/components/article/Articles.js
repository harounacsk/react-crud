import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { getArticles, deleteArticle, backupArticle } from '../../service/articleApi';

function Articles() {
	const [articles, setArticles] = useState([]);
	const [name, setName] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		handleGetarticles();
	});

	let handleGetarticles = () => {
		getArticles().then(resp => setArticles(resp.data))
			.catch(err => console.log(err))
	};

	let handleDelete = (id) => {
		if (window.confirm("Wollen Sie wirklich den Artikel löschen?")) {
			deleteArticle(id).then(resp => setArticles([...articles].filter(article => article.id !== id)))
				.catch(err => console.log(err));
		}

	};


	let handleCheckarticle = (article) => {
		backupArticle(article).then(resp => {
			const newArticles = articles.map(art => {
				if (art.id === article.id)
					art.backup = !art.backup;
				return art;
			})
			setArticles(newArticles);
		}).catch(err => console.log(err))
	};

	return (
		<div className='card p-1 m-2'>
			<div className='card-body'>
				<h3>Artikel</h3>
				Artikelname : <input type='text' placeholder='Artikelname eingeben' value={name} onChange={e => setName(e.target.value)} />
				{
					articles.length > 0 ? <table className="table">
						<thead>
							<tr><th>ID</th><th>Name</th><th>Preis</th><th>Backup</th><th>Lagertyp</th><th>Aktion</th></tr>
						</thead>
						<tbody>
							{
								articles.filter(art => art.name.includes(name)).map(article =>
								(<tr key={article.id}>
									<td>{article.id}</td>
									<td>{article.name}</td>
									<td>{new Intl.NumberFormat('en-DE').format(article.price)} €</td>
									<td>
										<button className='btn btn-outline-success' onClick={() => handleCheckarticle(article)}>
											<FontAwesomeIcon icon={article.backup ? faCheckCircle : faCircle}></FontAwesomeIcon>
										</button>
									</td>
									<td>{article.depot.name}</td>
									<td>
										<button className="btn btn-outline-danger" onClick={() => handleDelete(article.id)}>
											<FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
										</button>&nbsp; &nbsp; &nbsp;
										<button className="btn btn-outline-primary" onClick={() => navigate(`/updatearticle/${article.id}`)}>
											<FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
										</button>
									</td>
								</tr>)
								)
							}
						</tbody>
					</table>
						: <p>No data found</p>
				}

			</div>
		</div>
	)
}

export default Articles