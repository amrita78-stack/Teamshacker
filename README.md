# RecycleHub - Online Waste Exchange

RecycleHub is a full-stack web application that allows users to upload and browse recyclable items (plastic, glass, paper, metal, e-waste). The platform connects community members to exchange items that would otherwise end up in landfills, promoting sustainability and reducing waste.

## Features

- **User Authentication**: Email/password authentication via Firebase Auth
- **Item Upload**: Users can upload items with photos, descriptions, and categories
- **Browse & Search**: View items in a responsive grid with search and filtering capabilities
- **Item Details**: Detailed view of individual items with contact options
- **Admin Dashboard**: Moderation features to manage listings
- **Responsive Design**: Mobile-first design that works on all devices
- **Environmental Impact**: Shows the positive environmental impact of exchanges

## Tech Stack

- **Frontend**: React (Vite), React Router, Tailwind CSS
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **State Management**: React Context API
- **Deployment**: Vercel (frontend) or Firebase Hosting

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account

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

## Project Structure

```
/src
  /components     # Reusable UI components
  /pages          # Page components
  /contexts       # React context providers
  /services       # Firebase and API services
  /styles         # Tailwind configuration
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

## Development

### Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Previews the production build locally

### Code Quality

- Follows React best practices
- Uses Tailwind CSS for consistent styling
- Implements proper error handling
- Includes client-side validation

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

This project is licensed under the MIT License.