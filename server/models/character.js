import pkg from 'mongodb';
const { MongoClient, ObjectId } = pkg;

const uri = 'mongodb+srv://<userName>:<password>@<url-link-to-database>';
const client = new MongoClient(uri, { useUnifiedTopology: true });

let charactersCollection;

async function connect() {
  try {
    await client.connect();
    const database = client.db('test'); // Ensure 'test' matches your database
    charactersCollection = database.collection('characters');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connect();

export const Character = {
  create: async (characterData) => {
    if (!charactersCollection) {
      throw new Error('Database not initialized');
    }
    const result = await charactersCollection.insertOne(characterData);
    return result;
  },
  findAll: async () => {
    if (!charactersCollection) {
      throw new Error('Database not initialized');
    }
    return await charactersCollection.find({}).toArray();
  },
  findById: async (id) => {
    if (!charactersCollection) {
      throw new Error('Database not initialized');
    }
    return await charactersCollection.findOne({ _id: new ObjectId(id) });
  },
};
