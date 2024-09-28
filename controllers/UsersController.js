import dbClient from '../utils/db.js';
import { ObjectId } from 'mongodb';
import sha1 from 'sha1';

class UsersController {
  // POST /users: create a new user
  static async postNew(req, res) {
    const { email, password } = req.body;

    // Check if email is missing
    if (!email) {
      return res.status(400).json({ error: 'Missing email' });
    }

    // Check if password is missing
    if (!password) {
      return res.status(400).json({ error: 'Missing password' });
    }

    // Check if email already exists in the database
    const userCollection = dbClient.db.collection('users');
    const existingUser = await userCollection.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: 'Already exist' });
    }

    // Hash the password using SHA1
    const hashedPassword = sha1(password);

    // Insert the new user into the database
    const newUser = {
      email,
      password: hashedPassword,
    };

    const result = await userCollection.insertOne(newUser);

    // Return the new user with only the email and id
    res.status(201).json({
      id: result.insertedId,
      email: newUser.email,
    });
  }
}

export default UsersController;