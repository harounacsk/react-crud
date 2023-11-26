import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getDepots } from '../../service/depotApi';
import { getArticleById, updateArticle } from '../../service/articleApi';

function UpdateArticle() {
	let [name, setName] = useState("");
	let [price, setPrice] = useState(0);
	let [backup, setBackup] = useState(false);
	const { id } = useParams();
	let [depots, setDepots] = useState([]);
	let [depot, setDepot] = useState("");
	let [depotID, setDepotID] = useState("")

	useEffect(() => {
		handlegetArticleById(id);
		setDepots(getDepots());
	}, []);

	let handlegetArticleById = (id) => {
		getArticleById(id).then(resp => {
			let article = resp.data;
			setName(article.name);
			setBackup(article.backup);
			setPrice(article.price);
			setDepotID(article.depot.id);
			setDepot(JSON.stringify(article.depot))
		}
		);
	}

	let handleUpdateArticle = (e) => {
		e.preventDefault();
		let article = { id, name, price, backup, depot: JSON.parse(depot) };
		updateArticle(article).then(resp => { alert(`Artikel ${resp.data.name} geändert`); })
			.catch(err => console.log(err));
	};

	return (
		<div className='card p-1 m-2'>
			<div className='card-body'>
				<form onSubmit={handleUpdateArticle}>
					<label className='form-label'>Name</label>
					<input onChange={(e) => setName(e.target.value)} value={name} className='form-control' />
					<label className='form-label'>Preis</label>
					<input onChange={(e) => setPrice(e.target.value)} value={price} className='form-control' />
					<input onChange={(e) => setBackup(!backup)} checked={backup} className='form-check-input' type='checkbox' />
					<label className='form-check-label'>&nbsp;Backup</label><br />
					<label className='form-label'>Lagertyp</label>
					<select className="form-select" onChange={(e) => { setDepot(e.target.value); }}>
						<option disabled selected>Lagertyp auswählen</option>
						{depots.map(depot =>
							(<option key={depot.id} selected={depot.id === depotID ? true : false} value={JSON.stringify(depot)}>{depot.name}</option>)
						)}
					</select><br />
					<button className='btn btn-success'>Speichern</button>
				</form>
			</div>
		</div>
	)
}

export default UpdateArticle