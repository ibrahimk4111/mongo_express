const app = require('./app')
const config = require('./config/config')

PORT = config.app.port

app.listen(PORT, () => {
  console.log(`server is successfully running at http://localhost:${PORT}`);
});
