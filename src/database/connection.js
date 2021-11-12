import monggose from 'mongoose'

const dbConnection = async (DB_URI) => {
    try {
        await monggose.connect(DB_URI)
        console.log('Database connected')
    } catch (err) {
        console.log(err)
    }
}

export default dbConnection