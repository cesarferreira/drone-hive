const FileHound = require('filehound');
const log = console.log;
const fs = require('fs');

function getFiles(path) {	
	return FileHound.create()
	.path(path)
  .ext(`.json`)
  .find()
}

function writeObjectTo(obj) {
	log(JSON.stringify(obj, null, 2))
	fs.writeFileSync(`./tmp/${obj.name.toLowerCase()}.json`, JSON.stringify(obj, null, 2), 'utf-8');
}

// TODO o search tb devia procurar na description

getFiles('./hive/')
	.each(file => {

		let item = require(`./${file}`);

		item.author = {}

		// author name
		item.author.name = item.name.split(`/`)[0]

		// author homepage
		if (item.homepage !== undefined && item.homepage.indexOf(`github`) > -1) {
			var url = item.homepage
			var to = url.lastIndexOf('/');
			to = to == -1 ? url.length : to + 1;
			url = url.substring(0, to);
			item.author.webpage = url
		}

		item.name = item.name.split(`/`)[1]

		writeObjectTo(item)
		
		log(`-------------------------------------`)
	});