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

// Admin Inventories
export const getAdminInventories = async (userId = null) => {
  try {
    const response = await graphqlClient.post('', {
      query: `
        query adminInventories($userId: Int) {
          adminInventories(userId: $userId) {
            id
            userId
            itemId
            quantity
            user {
              id
              username
              email
            }
            item {
              id
              name
              type
              icon
            }
          }
        }
      `,
      variables: { userId },
    });

    if (response.data.errors) {
      throw new Error(extractErrorMessage(response.data.errors));
    }

    return response.data.data.adminInventories;
  } catch (error) {
    throw new Error(error.response?.data?.errors ? extractErrorMessage(error.response.data.errors) : error.message);
  }
};

