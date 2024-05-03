const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const uri = "mongodb+srv://mern-library:thivvijavearl2001@thivvi.fh1ztdw.mongodb.net/";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}

async function getAllBooks(category = null) {
    let query = {};
    if (category) {
        query = { category };
    }
    const bookCollections = client.db("BookInventory").collection("Books");
    const result = await bookCollections.find(query).toArray();
    return result;
}

async function getBookById(id) {
    const bookCollections = client.db("BookInventory").collection("Books");
    const filter = { _id: new ObjectId(id) };
    const result = await bookCollections.findOne(filter);
    return result;
}

async function insertBook(data) {
    const bookCollections = client.db("BookInventory").collection("Books");
    const result = await bookCollections.insertOne(data);
    return result;
}

async function updateBook(id, updateData) {
    const bookCollections = client.db("BookInventory").collection("Books");
    const filter = { _id: new ObjectId(id) };
    const updatedDoc = {
        $set: { ...updateData }
    };
    const options = { upsert: true };
    const result = await bookCollections.updateOne(filter, updatedDoc, options);
    return result;
}

async function deleteBook(id) {
    const bookCollections = client.db("BookInventory").collection("Books");
    const filter = { _id: new ObjectId(id) };
    const result = await bookCollections.deleteOne(filter);
    return result;
}

module.exports = {
    connectDB,
    getAllBooks,
    getBookById,
    insertBook,
    updateBook,
    deleteBook
};
