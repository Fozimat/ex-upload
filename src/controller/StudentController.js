import Student from '../model/student.js'
import fs from 'fs'
import path from 'path'

const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find()
        res.status(200).json(students)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const insertStudent = async (req, res) => {
    const students = req.body
    students.image = req.file.filename
    try {
        await Student.create(students)
        res.status(201).json({ message: 'Success' })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const getStudentById = async (req, res) => {
    const id = req.params.id
    try {
        const students = await Student.findById(id)
        res.status(200).json({ students })
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

const updateStudent = async (req, res) => {
    const id = req.params.id
    let new_image = ''
    if (req.file) {
        new_image = req.file.filename
        try {
            const filePath = path.resolve(path.dirname('..'), 'uploads', req.body.old_image)
            fs.unlinkSync(filePath)
        } catch (err) {
            console.log(err)
        }
    } else {
        new_image = req.body.old_image
    }
    const newStudent = req.body
    newStudent.image = new_image
    try {
        await Student.findByIdAndUpdate(id, newStudent)
        res.status(200).json({ message: 'Updated' })
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

const deleteStudent = async (req, res) => {
    const id = req.params.id
    try {
        const imageCheck = await Student.findByIdAndDelete(id)
        if (imageCheck.image != '') {
            try {
                const filePath = path.resolve(path.dirname('..'), 'uploads', imageCheck.image)
                fs.unlinkSync(filePath)
            } catch (err) {
                console.log(err)
            }
        }
        res.status(200).json({ message: 'Deleted' })
    } catch (err) {
        console.log(err)
    }
}

export { getAllStudents, insertStudent, getStudentById, updateStudent, deleteStudent }