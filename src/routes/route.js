import express from 'express'
import { getAllStudents, insertStudent, getStudentById, updateStudent, deleteStudent } from '../controller/StudentController.js'
import uploadImage from '../middleware/upload.js'

const router = express.Router()

router.get('/student', getAllStudents)
router.get('/student/:id', getStudentById)
router.post('/student', uploadImage, insertStudent)
router.patch('/student/:id', uploadImage, updateStudent)
router.delete('/student/:id', deleteStudent)

export default router