# Create react project
npm create react-app appName

# Install bootstrap
npm install bootstrap

# Install 
npm i react-router-dom

# Install font awesone react
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome

# Install json-server(open cmd as admin)
npm i -g json-server

# Create file db.json in folder data
projectname/data/db.json

# Add in db.json:
{
	"articles":[
		
		{ "id": 1, "name": "Ordinateur", "price": 789.98, "backup": true, "depot":{"id": 3 } },
		{ "id": 2, "name": "Écran", "price": 109.75, "backup": false, "depot":{"id": 3 } },
		{ "id": 3, "name": "Imprimante", "price": 150, "backup": false, "depot":{"id": 2 } },
		{ "id": 4, "name": "Cartouche", "price": 43.55, "backup": true, "depot":{"id": 2 } },
		{ "id": 5, "name": "Papier", "price": 9.99, "backup": true, "depot":{"id": 1 } },
		{ "id": 6, "name": "Chemisier", "price": 9.98, "backup": false, "depot":{"id": 1 } }
	]
}

# Run db.json as backend
json-server -w data/db.json -p 9000

# Install axios
npm i axios