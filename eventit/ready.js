const config = require('../config.json');
module.exports = client => {
	console.log('Valmis');
	client.user.setActivity(`.help | ${config.versio}`, { type: 'WATCHING' });
}
