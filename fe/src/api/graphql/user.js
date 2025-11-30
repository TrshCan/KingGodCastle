import graphqlClient from './client';

/**
 * Extract error message from GraphQL error response
 * @param {Array} errors 
 * @returns {string}
 */
const extractErrorMessage = (errors) => {
  if (errors && errors.length > 0) {
    const firstError = errors[0];
    if (firstError.message === 'Internal server error' && firstError.extensions?.debugMessage) {
      return firstError.extensions.debugMessage;
    }
    return firstError.message;
  }
  return 'An unknown error occurred';
};

/**
 * Login user with email and password
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<{token: string|null, user: object}>}
 */
export const login = async (email, password) => {
  try {
    const response = await graphqlClient.post('', {
      query: `
        mutation login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
            token
            user {
              id
              email
              username
              role
            }
          }
        }
      `,
      variables: {
        email,
        password,
      },
    });

    if (response.data.errors) {
      throw new Error(extractErrorMessage(response.data.errors));
    }

    const loginData = response.data.data.login;
    
    // Handle case where token might be null (if backend doesn't implement token generation yet)
    return {
      token: loginData.token || null,
      user: loginData.user,
    };
  } catch (error) {
    if (error.response?.data?.errors) {
      throw new Error(extractErrorMessage(error.response.data.errors));
    }
    throw error;
  }
};

/**
 * Register a new user
 * @param {string} email - User email
 * @param {string} password - User password
 * @param {string} username - User username
 * @returns {Promise<{token: string, user: object}>}
 */
export const register = async (email, password, username) => {
  try {
    const response = await graphqlClient.post('', {
      query: `
        mutation Register($input: RegisterInput!) {
          register(input: $input) {
            id
            email
            username
            role
          }
        }
      `,
      variables: {
        input: {
          email,
          password,
          username,
        },
      },
    });

    if (response.data.errors) {
      throw new Error(extractErrorMessage(response.data.errors));
    }

    // Register returns User, not LoginResponse, so we need to login after registration
    // to get the token
    return await login(email, password);
  } catch (error) {
    if (error.response?.data?.errors) {
      throw new Error(extractErrorMessage(error.response.data.errors));
    }
    throw error;
  }
};

/**
 * Request password reset
 * @param {string} email - User email
 * @returns {Promise<{success: boolean, message: string}>}
 */
export const forgotPassword = async (email) => {
  try {
    const response = await graphqlClient.post('', {
      query: `
        mutation ForgotPassword($email: String!) {
          forgotPassword(email: $email) {
            success
            message
          }
        }
      `,
      variables: {
        email,
        },
    });

    if (response.data.errors) {
      throw new Error(extractErrorMessage(response.data.errors));
    }

    return response.data.data.forgotPassword;
  } catch (error) {
    if (error.response?.data?.errors) {
      throw new Error(extractErrorMessage(error.response.data.errors));
    }
    throw error;
  }
};

/**
 * Login with Google
 * @param {string} token - Google ID token
 * @returns {Promise<{token: string|null, user: object}>}
 */
export const loginWithGoogle = async (token) => {
  try {
    const response = await graphqlClient.post('', {
      query: `
        mutation LoginWithGoogle($token: String!) {
          loginWithGoogle(token: $token) {
            token
            user {
              id
              email
              username
              role
              avatar
              provider
            }
          }
        }
      `,
      variables: {
        token,
      },
    });

    if (response.data.errors) {
      throw new Error(extractErrorMessage(response.data.errors));
    }

    const loginData = response.data.data.loginWithGoogle;
    
    return {
      token: loginData.token || null,
      user: loginData.user,
    };
  } catch (error) {
    if (error.response?.data?.errors) {
      throw new Error(extractErrorMessage(error.response.data.errors));
    }
    throw error;
  }
};

/**
 * Get all users
 * @returns {Promise<Array>}
 */
export const getUsers = async () => {
  try {
    const response = await graphqlClient.post('', {
      query: `
        query GetUsers {
          users {
            id
            email
            username
            role
            provider
            email_verified_at
          }
        }
      `,
    });

    if (response.data.errors) {
      throw new Error(extractErrorMessage(response.data.errors));
    }

    return response.data.data.users;
  } catch (error) {
    if (error.response?.data?.errors) {
      throw new Error(extractErrorMessage(error.response.data.errors));
    }
    throw error;
  }
};
