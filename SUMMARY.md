# RecycleHub - Online Waste Exchange

## Project Summary

RecycleHub is a complete, hackathon-ready full-stack web application that enables users to upload and browse recyclable items. The platform connects community members to exchange items that would otherwise end up in landfills, promoting sustainability and reducing waste.

## Key Features Implemented

### 1. Home Page
- Engaging headline and description
- "How it works" section (Upload → Browse → Exchange)
- Demo CTA buttons (Upload item, Browse items)
- Environmental impact statistics

### 2. Authentication
- Email/password authentication via Firebase Auth
- Sign up, login, and logout functionality
- Protected Upload page

### 3. Upload Item Page (Protected)
- Form fields: Item Name, Category, Photo upload, Quantity/Condition, Description, Location, Contact method
- Image upload to Firebase Storage with client-side preview
- Client-side validation and image size limits (5MB)

### 4. Browse/Items Page
- Paginated list of items in card layout
- Multi-select category filters and search box
- URL query params for sharing filtered views
- Responsive grid (1 column on mobile, 2 on tablet, 3 on desktop)

### 5. Item Detail Page
- Full view of a single item with larger image
- Complete description and poster info
- "I'm interested" button that opens a modal to send a message

### 6. Admin/Moderation
- Admin dashboard with ability to remove listings
- Simple admin flag implementation

### 7. Responsive & Accessible UI
- Mobile-first design with Tailwind CSS
- Semantic HTML and ARIA labels
- Accessible forms and keyboard focus states

### 8. Developer Essentials
- .env.example with required Firebase config keys
- Comprehensive README with setup and deployment instructions
- Sample seed script for demo items
- Unit tests for ItemCard component
- Firebase security rules for Firestore and Storage

## Tech Stack

- **Frontend**: React (Vite), React Router, Tailwind CSS
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **State Management**: React Context API
- **Deployment**: Vercel or Firebase Hosting

## Project Structure

```
/src
  /components     # Reusable UI components
    - Header.jsx
    - Footer.jsx
    - ItemCard.jsx
    - Filters.jsx
    - Modal.jsx
  /pages          # Page components
    - Home.jsx
    - Login.jsx
    - Signup.jsx
    - Upload.jsx
    - Browse.jsx
    - ItemDetail.jsx
    - Admin.jsx
  /contexts       # React context providers
    - AuthContext.jsx
  /services       # Firebase configuration
    - firebase.js
  /__tests__      # Unit tests
    - ItemCard.test.jsx
  - App.jsx
  - main.jsx
```

## Color Palette

- Fresh Green: `#4ade80` and `#22c55e`
- Muted Neutrals: `#f3f4f6` and `#9ca3af`

## Performance & Security

- Client-side image preview and validation
- 5MB image size limit
- Firebase security rules to prevent unauthorized access
- Input sanitization to prevent script injection

## Demo Checklist

✅ Live site home page with problem explanation
✅ Sign up & login flow
✅ Upload an item with image and immediate listing
✅ Browse and filter by category with search
✅ Open item detail and "Contact Owner" functionality
✅ Admin deletes a spam listing
✅ README with setup instructions and deployment guide

## Stretch Features (Optional)

- Map integration for nearby items
- In-app chat instead of mailto
- Exchange request system with accept/reject
- Karma system for active recyclers
- Export CSV of listings for admin

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Create Firebase project and configure environment variables
4. Run locally: `npm run dev`
5. Visit `http://localhost:5173`

## Deployment

The application can be deployed to:
- Vercel: `vercel --prod`
- Firebase Hosting: `firebase deploy`

## Testing

Run unit tests: `npm run test`

## License

This project is open source and available under the MIT License.