// Seed script to add sample items to Firestore
// This script should be run in a Node.js environment with Firebase Admin SDK

const admin = require('firebase-admin');
const fs = require('fs');

// Initialize Firebase Admin SDK
// You need to download your service account key from Firebase Console
// and save it as serviceAccountKey.json in the project root
try {
  const serviceAccount = JSON.parse(fs.readFileSync('./serviceAccountKey.json', 'utf8'));
  
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: serviceAccount.project_id + '.appspot.com'
  });
} catch (error) {
  console.error('Error reading service account key. Make sure serviceAccountKey.json exists in the project root.');
  console.error('Download it from Firebase Console > Project Settings > Service Accounts > Generate new private key');
  process.exit(1);
}

const db = admin.firestore();

// Sample items data
const sampleItems = [
  {
    name: 'Plastic Water Bottles',
    category: 'Plastic',
    description: 'Collection of clean plastic water bottles, various sizes. Perfect for recycling.',
    quantity: '50 bottles',
    condition: 'Clean, labels removed',
    location: 'Downtown',
    phone: '(555) 123-4567',
    userEmail: 'user1@example.com',
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  },
  {
    name: 'Glass Jars',
    category: 'Glass',
    description: 'Assorted glass jars in good condition. Great for storage or crafts.',
    quantity: '20 jars',
    condition: 'Good',
    location: 'Westside',
    phone: '(555) 234-5678',
    userEmail: 'user2@example.com',
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  },
  {
    name: 'Old Newspapers',
    category: 'Paper',
    description: 'Stack of old newspapers from the past month. Good for recycling or composting.',
    quantity: 'Large stack',
    condition: 'Used',
    location: 'Eastside',
    userEmail: 'user3@example.com',
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  },
  {
    name: 'Aluminum Cans',
    category: 'Metal',
    description: 'Collection of clean aluminum cans from beverages. Ready for recycling.',
    quantity: '100+ cans',
    condition: 'Clean',
    location: 'Northside',
    phone: '(555) 345-6789',
    userEmail: 'user4@example.com',
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  },
  {
    name: 'Old Laptop',
    category: 'E-Waste',
    description: 'Functional laptop from 2018. Good for parts or repair.',
    quantity: '1 laptop',
    condition: 'Functional',
    location: 'Southside',
    userEmail: 'user5@example.com',
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  },
  {
    name: 'Cardboard Boxes',
    category: 'Paper',
    description: 'Clean cardboard boxes in various sizes. Perfect for moving or storage.',
    quantity: '15 boxes',
    condition: 'Good',
    location: 'Central',
    phone: '(555) 456-7890',
    userEmail: 'user6@example.com',
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  },
  {
    name: 'Steel Cans',
    category: 'Metal',
    description: 'Collection of steel food cans. Clean and ready for recycling.',
    quantity: '75 cans',
    condition: 'Clean',
    location: 'Downtown',
    userEmail: 'user7@example.com',
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  },
  {
    name: 'Plastic Containers',
    category: 'Plastic',
    description: 'Assorted plastic food containers. Great for organizing or crafts.',
    quantity: '30 containers',
    condition: 'Good',
    location: 'Westside',
    phone: '(555) 567-8901',
    userEmail: 'user8@example.com',
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  }
];

// Function to add sample items to Firestore
async function seedDatabase() {
  try {
    console.log('Starting to seed database with sample items...');
    
    for (const item of sampleItems) {
      // Add item to Firestore
      const docRef = await db.collection('items').add(item);
      console.log(`Added item with ID: ${docRef.id}`);
    }
    
    console.log('Database seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Exit the process
    process.exit(0);
  }
}

// Run the seed function
seedDatabase();