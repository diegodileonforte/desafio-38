const mongoose = require ('mongoose');
const bcrypt = require ('bcryptjs');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    photo: String,
    userName: String
})

const UserModel = mongoose.model('UserModel', UserSchema);
module.exports =  UserModel