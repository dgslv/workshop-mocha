const userModel = require('../models/userModel');
const mongoose = require('mongoose');

/**
 * @name getUser - busca um usuário pelo id e retorna
 * 
 * @param {String} user - string referente ao id do user
 * 
 * @returns {Promise}
 */
const getUser = (user) => {
    return userModel.find({
        _id: new mongoose.Types.ObjectId(user)
    }).exec();
}

/**
 * @name getUsers - retorna os usuarios cadastrados
 * 
 * @returns {Promise}
 */
const getUsers = () => {
    return userModel.find().exec();
}


/**
 * @name newUser - cadastra novo usuario
 * 
 * @property {String} name - nome do usuario a ser cadastrado
 * @property {Number} age - idade do usuario a ser cadastrada
 * 
 * @returns {Promise}
 */
const newUser = ({
    name,
    age
}) => {
    if (typeof name != 'undefined' && typeof age && 'undefined')
        return new userModel({
            name,
            age
        }).save();
}

/**
 * @name updateUser - altera informações de um usuário
 * 
 * @param {String} user - id do usuario
 * @param {Object} updateObject - objeto contendo as mudanças desejadas para o usuário
 * 
 * @returns {Promise} 
 */
const updateUser = (user, updateObject) => {
    return userModel.update({
        _id: user
    }, updateObject).exec();
}

/**
 * @name removeUser - deleta um usuario a partir do id passado por parametro
 * 
 * @param {String} user - id do usuario
 * 
 * @returns {Promise}
 */
const removeUser = (user) => {
    return userModel.deleteOne({
        _id: user
    }).exec();
}

module.exports = {
    getUser,
    getUsers,
    newUser,
    updateUser,
    removeUser
}