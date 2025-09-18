# Firebase Setup Guide for RecycleHub

## Creating a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter "RecycleHub" as the project name
4. Accept the terms and conditions
5. Choose whether to enable Google Analytics (optional)
6. Click "Create project"

## Setting up Firebase Authentication

1. In the Firebase Console, click "Authentication" in the left sidebar
2. Click "Get started"
3. Click the "Sign-in method" tab
4. Enable "Email/Password" sign-in provider
5. Click "Save"

## Setting up Firestore Database

1. In the Firebase Console, click "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Choose a location near you
5. Click "Enable"

## Setting up Firebase Storage

1. In the Firebase Console, click "Storage" in the left sidebar
2. Click "Get started"
3. Click "Next" to accept default security rules
4. Choose a location near you
5. Click "Done"

## Getting Firebase Configuration

1. In the Firebase Console, click the gear icon next to "Project Overview" and select "Project settings"
2. In the "General" tab, scroll down to "Your apps"
3. Click the "</>" icon to create a web app
4. Enter "RecycleHub" as the app name
5. Check "Also set up Firebase Hosting" (optional)
6. Click "Register app"
7. Copy the firebaseConfig object values:
   - apiKey
   - authDomain
   - projectId
   - storageBucket
   - messagingSenderId
   - appId

## Environment Variables

Create a `.env` file in your project root with the following variables:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
VITE_FIREBASE_PROJECT_ID=your_project_id_here
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
VITE_FIREBASE_APP_ID=your_app_id_here
```

Replace the placeholder values with the actual values from your Firebase configuration.

## Firebase Security Rules

### Firestore Rules

The application includes Firestore security rules in `firestore.rules` that should be deployed to Firebase:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Items collection
    match /items/{item} {
      // Allow read access to all users
      allow read: if true;
      
      // Allow create access to authenticated users
      allow create: if request.auth != null 
        && request.resource.data.keys().hasAll(['name', 'category', 'userId', 'userEmail'])
        && request.resource.data.name is string 
        && request.resource.data.category is string
        && request.resource.data.userId == request.auth.uid
        && request.resource.data.userEmail == request.auth.token.email;
      
      // Allow update access to item owners only
      allow update: if request.auth != null 
        && resource.data.userId == request.auth.uid;
      
      // Allow delete access to item owners only
      allow delete: if request.auth != null 
        && resource.data.userId == request.auth.uid;
    }
    
    // Users collection
    match /users/{user} {
      // Allow read access to the user themselves
      allow read: if request.auth != null 
        && request.auth.uid == user;
      
      // Allow create access to authenticated users
      allow create: if request.auth != null;
      
      // Allow update access to the user themselves
      allow update: if request.auth != null 
        && request.auth.uid == user;
      
      // No delete access for users
      allow delete: if false;
    }
    
    // Admin operations
    match /admin/{document} {
      // Only allow access to authenticated users with admin claims
      allow read, write: if request.auth != null 
        && request.auth.token.admin == true;
    }
  }
}
```

### Storage Rules

The application includes Firebase Storage rules in `storage.rules` that should be deployed to Firebase:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Items folder
    match /items/{image} {
      // Allow read access to all users
      allow read: if true;
      
      // Allow create access to authenticated users
      allow create: if request.auth != null
        && request.resource.size < 5 * 1024 * 1024  // 5MB limit
        && request.resource.contentType.matches('image/.*');  // Only images
      
      // Allow update and delete access to the image owner only
      allow update, delete: if request.auth != null
        && image.matches(request.auth.uid + '.*');
    }
    
    // Admin folder
    match /admin/{allPaths=**} {
      // Only allow access to authenticated users with admin claims
      allow read, write: if request.auth != null 
        && request.auth.token.admin == true;
    }
  }
}
```

## Deploying Security Rules

### Firestore Rules

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init firestore`
4. Deploy: `firebase deploy --only firestore`

### Storage Rules

1. Initialize: `firebase init storage`
2. Deploy: `firebase deploy --only storage`

## Testing the Setup

1. Start the development server: `npm run dev`
2. Visit `http://localhost:5173`
3. Try signing up for a new account
4. Try uploading an item
5. Verify items appear in the browse section

## Troubleshooting

### Common Issues

1. **Firebase Configuration Errors**: Ensure all environment variables are set correctly in your `.env` file
2. **CORS Errors**: Make sure your Firebase Storage rules allow read access
3. **Authentication Issues**: Verify Firebase Auth is enabled for email/password
4. **Permission Denied**: Check that your Firestore security rules are deployed

### Support

For additional help, refer to the [Firebase Documentation](https://firebase.google.com/docs) or check the browser console for detailed error messages.