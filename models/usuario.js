const { Schema, model } = require('mongoose')

const UsuarioSc = Schema({
    nom: { type: String, require: true },
    cor: { type: String, unique: true, require: true },
    pwd: { type: String, require: true },
    online: { type: Boolean, default: false }
}, { versionKey: !1 })

UsuarioSc.methods.toJSON = function () {
    let userObject = this.toObject();
    delete userObject.pwd;
    return userObject;
}
module.exports = model('usuario', UsuarioSc);
