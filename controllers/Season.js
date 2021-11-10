var Season = require('../models/Season'); 
 
// List of all Seasons 
exports.Season_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Season list'); 
}; 
 
// for a specific Season. 
exports.Season_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Season detail: ' + req.params.id); 
}; 
 
// Handle Season create on POST. 
exports.Season_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Season create POST'); 
}; 
 
// Handle Season delete form on DELETE. 
exports.Season_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Season delete DELETE ' + req.params.id); 
}; 
 
// Handle Season update form on PUT. 
exports.Season_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Season update PUT' + req.params.id); 
}; 