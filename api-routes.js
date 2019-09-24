//initialize express routes
let router = require('express').Router();

//set default API response
router.get('/', function(req, res){
    res.json({
       status: 'API its working',
       message: 'Welcome to RESThub crafter!'
    });
});

//import contact controller
var contactController = require('./contactController');

//contact routes
router.route('/contacts')
.get(contactController.index)
.post(contactController.new);
router.route('/contacts/:contact_id')
.get(contactController.view)
.patch(contactController.update)
.put(contactController.update)
.delete(contactController.delete);

//export API
module.exports = router;