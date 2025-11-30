# Frontend Application

React + Vite application with authentication and Google OAuth.

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

```bash
# Copy the example env file
cp .env.example .env
```

**Important**: Edit `.env` and add your Google Client ID:
```env
VITE_GOOGLE_CLIENT_ID=your-actual-client-id.apps.googleusercontent.com
```

**Don't have a Google Client ID yet?** See: `SETUP_GOOGLE_CLIENT_ID.md`

### 3. Run Development Server

```bash
npm run dev
```

Visit: http://localhost:5173

## Features

- ✅ Login / Register with email & password
- ✅ Google OAuth Sign-In
- ✅ Toast notifications
- ✅ Forgot password flow
- ✅ User profile with avatar
- ✅ Responsive design

## Pages

- `/login` - Login page
- `/register` - Registration page
- `/forgot-password` - Password reset
- `/` - Home/Dashboard

## Google OAuth Setup

If you see "Missing required parameter: client_id" error:

1. **Quick fix**: Follow `SETUP_GOOGLE_CLIENT_ID.md`
2. **Detailed guide**: See `GOOGLE_OAUTH_SETUP.md` in root directory

Or skip Google login and use email/password authentication.

## Tech Stack

- React 19.1.1
- Vite 7.1.7
- React Router DOM 7.9.6
- Tailwind CSS 4.1.14
- Axios 1.13.2
- Lucide React 0.555.0

## Documentation

- `SETUP_GOOGLE_CLIENT_ID.md` - How to get Google Client ID (5 min setup)
- `GOOGLE_LOGIN_USAGE.md` - Using Google login in your app
- `src/components/Toast/README.md` - Toast notification system

## Troubleshooting

### Google Sign-In not working?
1. Check that `VITE_GOOGLE_CLIENT_ID` is set in `.env`
2. Restart the dev server after changing `.env`
3. Clear browser cache
4. See `SETUP_GOOGLE_CLIENT_ID.md` for detailed setup

### API connection issues?
- Make sure backend is running on `http://localhost:8001`
- Check `VITE_API_URL` in `.env`
