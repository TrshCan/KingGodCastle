import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../contexts/ToastContext';
import { loginWithGoogle } from '../api/graphql/user';

const GoogleLoginButton = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const googleButtonRef = useRef(null);
  const [isConfigured, setIsConfigured] = useState(true);

  useEffect(() => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

    // Check if Google Client ID is configured
    if (!clientId || clientId === 'your-google-client-id-here.apps.googleusercontent.com') {
      console.warn('Google Client ID not configured. Please set VITE_GOOGLE_CLIENT_ID in .env file');
      setIsConfigured(false);
      return;
    }

    // Check if script already exists
    const existingScript = document.querySelector('script[src="https://accounts.google.com/gsi/client"]');
    
    if (existingScript) {
      initializeGoogleButton(clientId);
      return;
    }

    // Load Google Sign-In script
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      initializeGoogleButton(clientId);
    };

    script.onerror = () => {
      console.error('Failed to load Google Sign-In script');
      setIsConfigured(false);
    };

    return () => {
      // Don't remove script on unmount to avoid re-loading
    };
  }, []);

  const initializeGoogleButton = (clientId) => {
    if (window.google && googleButtonRef.current) {
      try {
        window.google.accounts.id.initialize({
          client_id: clientId,
          callback: handleCredentialResponse,
        });

        // Get the container width to set button width
        const containerWidth = googleButtonRef.current.offsetWidth || 400;

        window.google.accounts.id.renderButton(
          googleButtonRef.current,
          {
            theme: 'outline',
            size: 'large',
            width: Math.min(containerWidth, 400), // Max 400px, or container width
            text: 'continue_with',
            shape: 'rectangular',
            logo_alignment: 'left',
          }
        );
      } catch (error) {
        console.error('Error initializing Google button:', error);
        setIsConfigured(false);
      }
    }
  };

  const handleCredentialResponse = async (response) => {
    try {
      const { token, user } = await loginWithGoogle(response.credential);
      
      if (token) {
        localStorage.setItem('token', token);
      }
      localStorage.setItem('user', JSON.stringify(user));
      
      toast.success(`Welcome, ${user.username}!`);
      navigate('/');
    } catch (error) {
      toast.error(error.message || 'Google login failed. Please try again.');
    }
  };

  if (!isConfigured) {
    return (
      <div className="w-full p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
        <p className="text-sm text-yellow-800">
          Google Sign-In is not configured. Please set up your Google Client ID.
        </p>
        <a 
          href="https://console.cloud.google.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline"
        >
          Get Google Client ID →
        </a>
      </div>
    );
  }

  return <div ref={googleButtonRef} className="w-full"></div>;
};

export default GoogleLoginButton;
