// utils/db.js

import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';

    const url = `mongodb://${host}:${port}`;
    this.client = new MongoClient(url, { useUnifiedTopology: true });

    this.client.connect()
      .then(() => {
        console.log('MongoDB client connected to the server');
        this.db = this.client.db(database);
      })
      .catch((err) => {
        console.error(`Failed to connect to MongoDB server: ${err.message}`);
      });
  }

  // Check if MongoDB connection is alive
  isAlive() {
    return this.client && this.client.topology && this.client.topology.isConnected();
  }

  // Get the number of users in the 'users' collection
  async nbUsers() {
    try {
      const usersCollection = this.db.collection('users');
      const count = await usersCollection.countDocuments();
      return count;
    } catch (err) {
      console.error(`Error counting users: ${err.message}`);
      return 0;
    }
  }

  // Get the number of files in the 'files' collection
  async nbFiles() {
    try {
      const filesCollection = this.db.collection('files');
      const count = await filesCollection.countDocuments();
      return count;
    } catch (err) {
      console.error(`Error counting files: ${err.message}`);
      return 0;
    }
  }
}

// Create and export an instance of DBClient
const dbClient = new DBClient();
export default dbClient;
