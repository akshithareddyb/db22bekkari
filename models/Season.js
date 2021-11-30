const mongoose = require("mongoose") 
const SeasonSchema = mongoose.Schema({ Season_type: {type: String,maxlength: 9}, temperature: Number, Season_month: String }) 
 
module.exports = mongoose.model("Season", SeasonSchema) 