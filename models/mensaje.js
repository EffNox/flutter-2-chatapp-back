const { Schema, model } = require('mongoose')

const MensajeSc = Schema({
    from: { type: Schema.Types.ObjectId, ref: 'usuario', require: true },
    to: { type: Schema.Types.ObjectId, ref: 'usuario', require: true },
    msg: { type: String, require: true },
}, { versionKey: !1, timestamps: true })

MensajeSc.methods.toJSON = function () {
    let userObject = this.toObject();
    delete userObject.id;
    return userObject;
}
module.exports = model('mensaje', MensajeSc);
