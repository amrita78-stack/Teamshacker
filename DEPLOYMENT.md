# RecycleHub Deployment Guide

## Project Overview

RecycleHub is a full-stack web application that allows users to upload and browse recyclable items. The platform connects community members to exchange items that would otherwise end up in landfills, promoting sustainability and reducing waste.

## Tech Stack

- **Frontend**: React (Vite), React Router, Tailwind CSS
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **State Management**: React Context API
- **Deployment**: Vercel (frontend) or Firebase Hosting

## Setup Instructions

### Prerequisites

1. Node.js (v14 or higher)
2. npm or yarn
3. Firebase account

### Firebase Setup

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firebase Authentication (Email/Password)
3. Create a Firestore database
4. Enable Firebase Storage
5. Copy your Firebase configuration keys

### Environment Variables

Create a `.env` file in the root directory and add your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
VITE_FIREBASE_PROJECT_ID=your_project_id_here
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
VITE_FIREBASE_APP_ID=your_app_id_here
```

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Deployment

#### Vercel Deployment

1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel --prod`

#### Firebase Hosting Deployment

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Deploy: `firebase deploy`

## Firebase Security Rules

### Firestore Rules

The application includes Firestore security rules in `firestore.rules` that:
- Allow read access to all users for items
- Restrict create, update, and delete operations to authenticated users
- Ensure users can only modify their own items
- Include admin access controls

### Storage Rules

The application includes Firebase Storage rules in `storage.rules` that:
- Allow read access to all users for item images
- Restrict upload operations to authenticated users
- Limit file size to 5MB
- Only allow image files
- Include admin access controls

## Testing

Run the unit tests with:

```bash
npm run test
```

## Project Structure

```
/src
  /components     # Reusable UI components
  /pages          # Page components
  /contexts       # React context providers
  /services       # Firebase and API services
  /styles         # Tailwind configuration
  /__tests__      # Unit tests
```

## Demo Script

1. **Home Page**: Show the landing page with statistics and how it works section
2. **Sign Up**: Create a new account
3. **Upload Item**: Demonstrate uploading an item with image
4. **Browse Items**: Show the item grid with filtering
5. **Item Detail**: View a specific item and contact the owner
6. **Admin Dashboard**: Show moderation features

## Environmental Impact

Each item exchanged on RecycleHub contributes to reducing landfill waste and carbon emissions. The platform tracks and displays the positive environmental impact of community exchanges.

## Adding Sample Data

To add sample items to your database:

1. Download your Firebase service account key
2. Save it as `serviceAccountKey.json` in the project root
3. Update the storage bucket name in `seed.js`
4. Run: `node seed.js`

## Customization

### Color Scheme

The application uses a green color scheme for environmental themes:
- Primary Green: `#4ade80` (Tailwind class: `recycle-green`)
- Dark Green: `#22c55e` (Tailwind class: `recycle-green-dark`)
- Neutral: `#f3f4f6` (Tailwind class: `recycle-neutral`)
- Dark Neutral: `#9ca3af` (Tailwind class: `recycle-neutral-dark`)

### Responsive Design

The application is fully responsive with:
- 1 column on mobile
- 2 columns on tablet
- 3 columns on desktop

## Troubleshooting

### Common Issues

1. **Firebase Configuration Errors**: Ensure all environment variables are set correctly
2. **Image Upload Failures**: Check file size limits (5MB) and file types (images only)
3. **Authentication Issues**: Verify Firebase Auth is enabled for email/password

### Support

For issues with the application, check the browser console for error messages and verify your Firebase configuration.