const app = require('@app');
const config = require('@config');

module.exports = (err) => {
    console.clear();
    if (err) {
        return console.log(err);
    }
    app.listen(config.app.port, (err) => {
        if (err) {
            return console.log('erro');
        }
        console.log(`serviço iniciou na parta ${config.app.port}`);
    });
};