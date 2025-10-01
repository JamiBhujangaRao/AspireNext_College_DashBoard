# College Dashboard

A comprehensive web application for exploring, comparing, and managing college information. This dashboard helps students and parents make informed decisions about colleges by providing detailed information about courses, fees, locations, and reviews.

## 🚀 Features

### Core Functionality
- **College Search & Filtering**: Advanced search with filters for location, course, and fee range
- **Favorites Management**: Add and remove colleges from your favorites list
- **Reviews System**: Read and submit reviews for colleges with ratings
- **Responsive Design**: Modern UI built with React and styled-components
- **Real-time Updates**: Dynamic filtering and sorting capabilities

### Search & Filter Options
- Search by college name
- Filter by location (Hyderabad, Bangalore, Chennai)
- Filter by course (CSE, ECE, MBA)
- Fee range filtering (minimum and maximum)
- Sort by fee (ascending/descending)

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Modern React with hooks
- **React Router DOM 7.9.3** - Client-side routing
- **Styled Components 6.1.19** - CSS-in-JS styling
- **Axios 1.12.2** - HTTP client for API calls

### Backend
- **Node.js** - Runtime environment
- **Express.js 4.21.2** - Web framework
- **SQLite3 5.1.7** - Lightweight database
- **CORS 2.8.5** - Cross-origin resource sharing

## 📁 Project Structure

```
collegeDashboard/
├── backend/
│   ├── app.js                 # Main server file
│   ├── collegeInformation.db  # SQLite database
│   └── package.json          # Backend dependencies
├── frontend/
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── api/             # API service files
│   │   │   ├── config.js    # Centralized API configuration
│   │   │   ├── colleges.js  # College API calls
│   │   │   ├── favorites.js # Favorites API calls
│   │   │   └── reviews.js   # Reviews API calls
│   │   ├── components/      # React components
│   │   │   ├── CollegeCard/ # Individual college card
│   │   │   ├── Colleges/    # Colleges listing page
│   │   │   ├── Favorites/   # Favorites page
│   │   │   ├── Filters/     # Search filters
│   │   │   ├── Header/      # Navigation header
│   │   │   ├── Home/        # Landing page
│   │   │   ├── Reviews/     # Reviews page
│   │   │   └── NotFound/    # 404 page
│   │   ├── App.js           # Main App component
│   │   └── index.js         # App entry point
│   └── package.json         # Frontend dependencies
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd collegeDashboard
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

#### Option 1: Using Deployed Backend (Recommended)
The frontend is configured to use the deployed backend on Render. Simply start the frontend:

```bash
cd frontend
npm start
# Application will open at http://localhost:3001
# Backend API: https://aspirenext-college-dashboard-backend.onrender.com
```

#### Option 2: Local Development
If you want to run the backend locally:

1. **Start the Backend Server**
   ```bash
   cd backend
   npm start
   # Server will run on http://localhost:3000
   ```

2. **Update API Configuration** (if running locally)
   ```bash
   # Edit frontend/src/api/config.js
   # Change API_BASE_URL to "http://localhost:3000"
   ```

3. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm start
   # Application will open at http://localhost:3001
   ```

## 🎯 Usage

### Navigation
- **Home**: Landing page with project overview
- **Colleges**: Browse and search colleges with advanced filters
- **Favorites**: View your saved favorite colleges
- **Reviews**: Read and submit college reviews
- **Logout**: End session (placeholder functionality)

### Adding Colleges to Favorites
1. Navigate to the Colleges page
2. Use the "Add to Favorites" button on any college card
3. View your favorites in the Favorites page
4. Remove favorites using the "Remove from Favorites" button

### Submitting Reviews
1. Go to the Reviews page
2. Fill out the review form with:
   - College name
   - Your name
   - Rating (1-5 stars)
   - Comment
3. Submit to add your review

## 🔧 API Endpoints

### Colleges
- `GET /colleges` - Get all colleges with optional filters
- `POST /colleges` - Add a new college
- `GET /colleges/:collegeId` - Get specific college details
- `PUT /colleges/:collegeId` - Update college information
- `DELETE /colleges/:collegeId` - Delete a college

### Favorites
- `GET /favorites` - Get all favorite colleges
- `PUT /favorites/:collegeId` - Mark college as favorite
- `DELETE /favorites/:collegeId` - Remove from favorites

### Reviews
- `GET /reviews` - Get all reviews
- `POST /reviews` - Add a new review

## 🗄️ Database Schema

The application uses SQLite with the following main tables:

### College Table
- `college_id` (Primary Key)
- `college_name` (Text)
- `location` (Text)
- `course` (Text)
- `fee` (Number)
- `is_favorite` (Boolean)

### Reviews Table
- `review_id` (Primary Key)
- `collegename` (Text)
- `username` (Text)
- `rating` (Number)
- `comment` (Text)

## 🔍 Filtering & Search

The application supports comprehensive filtering:

### Search Options
- **Text Search**: Search colleges by name
- **Location Filter**: Hyderabad, Bangalore, Chennai
- **Course Filter**: CSE, ECE, MBA
- **Fee Range**: Minimum and maximum fee filtering
- **Sorting**: Sort by fee (ascending/descending)

### Example API Calls
```javascript
// Get colleges in Hyderabad offering CSE
GET /colleges?location=Hyderabad&course=CSE

// Get colleges with fees between 50000 and 100000
GET /colleges?minFee=50000&maxFee=100000

// Search for colleges containing "Engineering"
GET /colleges?searchQuery=Engineering
```

## 🎨 UI Components

### Styled Components
All components use styled-components for consistent theming:
- Responsive design for mobile and desktop
- Modern card-based layout
- Intuitive navigation
- Form validation and user feedback

### Key Components
- **CollegeCard**: Displays college information with action buttons
- **Filters**: Advanced search and filtering interface
- **Header**: Navigation and branding
- **ReviewCard**: Displays individual reviews

## 🚀 Development

### Available Scripts

#### Frontend
- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

#### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

### Environment Setup

#### Production Configuration
- **Backend**: Deployed on Render at `https://aspirenext-college-dashboard-backend.onrender.com`
- **Frontend**: Runs on port 3001 (default React port)
- **API Configuration**: Centralized in `frontend/src/api/config.js`

#### Local Development
- Backend runs on port 3000
- Frontend runs on port 3001 (default React port)
- CORS is enabled for cross-origin requests
- To switch to local backend, update `API_BASE_URL` in `config.js`

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🔮 Future Enhancements

- User authentication and profiles
- Advanced analytics and reporting
- College comparison features
- Integration with college APIs
- Mobile app development
- Enhanced review system with images
- Email notifications for favorites
- College application tracking

## 📞 Support

For support or questions, please contact the development team or create an issue in the repository.

---

**Note**: This is a college dashboard application designed for educational and informational purposes. Always verify college information from official sources before making decisions.
