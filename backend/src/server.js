const app = require('./api');

const PORT = process.env.API_PORT || 3001;

app.listen(PORT, () => console.log('Application listening on port:', PORT));