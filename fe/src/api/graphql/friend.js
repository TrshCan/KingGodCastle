import graphqlClient from './client';

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

// Admin Friends
export const getAdminFriends = async (userId = null) => {
  try {
    const response = await graphqlClient.post('', {
      query: `
        query adminFriends($userId: Int) {
          adminFriends(userId: $userId) {
            id
            userId
            friendId
            status
            user {
              id
              username
              email
            }
            friend {
              id
              username
              email
            }
          }
        }
      `,
      variables: { userId },
    });

    if (response.data.errors) {
      throw new Error(extractErrorMessage(response.data.errors));
    }

    return response.data.data.adminFriends;
  } catch (error) {
    throw new Error(error.response?.data?.errors ? extractErrorMessage(error.response.data.errors) : error.message);
  }
};

