const crypto = require('crypto');

const saltRounds = 10000; // Number of iterations for more security

// Function to generate a salted hash for the given password
function generateHash(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = hashPasswordWithSalt(password, salt, saltRounds);
  return `${salt}.${saltRounds}.${hash}`;
}

// Function to compare the given password with the hashed password
function compareHash(password, hashedPassword) {
  const [salt, rounds, expectedHash] = hashedPassword.split('.');
  const hash = hashPasswordWithSalt(password, salt, parseInt(rounds, 10));
  return hash === expectedHash;
}

// Helper function to hash the password with the given salt and rounds
function hashPasswordWithSalt(password, salt, rounds) {
  let hash = password;
  for (let i = 0; i < rounds; i++) {
    hash = crypto.createHash('sha256').update(hash + salt).digest('hex');
  }
  return hash;
}

module.exports = { generateHash, compareHash };
