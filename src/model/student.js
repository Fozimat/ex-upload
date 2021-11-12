import mongoose from 'mongoose'
const { Schema } = mongoose

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    nim: {
        type: Number,
        required: true,
        unique: true
    },
    major: {
        type: String,
        required: true
    },
    entrance_year: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Student = mongoose.model('student', studentSchema)

export default Student