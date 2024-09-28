// utils/redis.js

import { createClient } from 'redis';

class RedisClient {
  constructor() {
    // Create Redis client
    this.client = createClient();

    // Handle Redis connection errors
    this.client.on('error', (err) => {
      console.error(`Redis client not connected to the server: ${err.message}`);
    });

    // Connect to Redis server
    this.client.connect()
      .then(() => {
        console.log('Redis client connected to the server');
      })
      .catch((err) => {
        console.error(`Failed to connect to Redis server: ${err.message}`);
      });
  }

  // Check if Redis is alive
  isAlive() {
    return this.client.isOpen;
  }

  // Get a value from Redis by key
  async get(key) {
    try {
      const value = await this.client.get(key);
      return value;
    } catch (err) {
      console.error(`Error getting value from Redis: ${err.message}`);
      return null;
    }
  }

  // Set a value in Redis with expiration
  async set(key, value, duration) {
    try {
      await this.client.setEx(key, duration, value);
    } catch (err) {
      console.error(`Error setting value in Redis: ${err.message}`);
    }
  }

  // Delete a value from Redis by key
  async del(key) {
    try {
      await this.client.del(key);
    } catch (err) {
      console.error(`Error deleting key from Redis: ${err.message}`);
    }
  }
}

// Create and export an instance of RedisClient
const redisClient = new RedisClient();
export default redisClient;
