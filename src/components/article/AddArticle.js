import React, { useEffect, useState } from 'react'
import { getDepots } from '../../service/depotApi';
import { addArticle } from '../../service/articleApi';


function AddArticle() {
	let [name, setName] = useState("");
	let [price, setPrice] = useState(0);
	let [backup, setBackup] = useState(false);
	let [depots, setDepots] = useState([]);
	let [depot, setDepot] = useState();


	useEffect(() => {
		setDepots(getDepots());
	},[])

	let handleAddProduct = (e) => {
		e.preventDefault();
		let article = { name, price, backup, depot: JSON.parse(depot) };
		addArticle(article).then(resp => { alert(JSON.stringify(`Artikel: ${resp.data.name} hinzugefügt!`)) })
			.catch(err => console.log(err));
	};

	return (
		<div className='card p-1 m-2'>
			<div className='card-body'>
				<form onSubmit={handleAddProduct}>
					<label className='form-label'>Name</label>
					<input onChange={(e) => setName(e.target.value)} value={name} className='form-control' />
					<label className='form-label'>Preis</label>
					<input onChange={(e) => setPrice(e.target.value)} value={price} className='form-control' />
					<input onChange={() => setBackup(!backup)} checked={backup} className='form-check-input' type='checkbox' />
					<label className='form-check-label'>&nbsp;Backup</label><br />
					<label className=''>Lagertyp</label>
					<select className="form-select" onChange={(e) => { setDepot(e.target.value); }}>
						<option disabled selected>Lagertyp auswählen</option>
						{depots.map(depot =>
							(<option key={depot.id} value={JSON.stringify(depot)}>{depot.name}</option>)
						)}
					</select><br />
					<button className='btn btn-success'>Speichern</button>
				</form>
			</div>
		</div>
	)
}
export default AddArticle