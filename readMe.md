### problem No - 1 : ForbiddenError: Forbidden

```
ForbiddenError: Forbidden
    at createHttpError (F:\Projects\python problem solution\Nodejs\node_modules\send\index.js:979:12)
    at SendStream.error (F:\Projects\python problem solution\Nodejs\node_modules\send\index.js:270:31)
    at SendStream.pipe (F:\Projects\python problem solution\Nodejs\node_modules\send\index.js:549:12)
    at sendfile (F:\Projects\python problem solution\Nodejs\node_modules\express\lib\response.js:1130:8)
    at ServerResponse.sendFile (F:\Projects\python problem solution\Nodejs\node_modules\express\lib\response.js:449:3)
    at exports.getUsers (F:\Projects\python problem solution\Nodejs\controller\users.controller.js:6:7)
    at Layer.handle [as handle_request] (F:\Projects\python problem solution\Nodejs\node_modules\express\lib\router\layer.js:95:5)
    at next (F:\Projects\python problem solution\Nodejs\node_modules\express\lib\router\route.js:144:13)
    at Route.dispatch (F:\Projects\python problem solution\Nodejs\node_modules\express\lib\router\route.js:114:3)
    at Layer.handle [as handle_request] (F:\Projects\python problem solution\Nodejs\node_modules\express\lib\router\layer.js:95:5)
```

### solution of problem - 1 : ForbiddenError: Forbidden
`
const path = require("path") then sendFile(path.join(__dirname + "/../views/index.html"))
`
<hr />

### problem No - 2 : user is not allowed to do action [insert] on [backend_express_practice.users]

### solution of problem - 2 : 
`
Click on Database Access > Database Users > (EDIT) actions > Specific Privileges > Add Specific Privilege > readWriteAnyDatabase (Select Role) > Update User
`
<hr />

### Problem no - 3 : 
`
servers: Map(1) { 'localhost:27017' => [ServerDescription] },     type: 'Unknown',   reason: TopologyDescription {     at NativeConnection.openUri (/opt/render/project/src/node_modules/mongoose/lib/connection.js:784:11) {     at _handleConnectionErro }}
`

### solution of problem - 3 : Try with 127.0.0.1:27017 instead of localhost:27017

<hr />

### Problem no - 4 : mongoose.connect(), first argument should be String, received undefined

### solution of problem - 4 : dburl: process.env.DB_URL || `"mongodb://127.0.0.1:27017/[Database Name]"`
