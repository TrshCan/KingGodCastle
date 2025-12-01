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

// Admin Quests
export const getAdminQuests = async () => {
  try {
    const response = await graphqlClient.post('', {
      query: `
        query adminQuests {
          adminQuests {
            id
            title
            description
            status
            type
          }
        }
      `,
    });

    if (response.data.errors) {
      throw new Error(extractErrorMessage(response.data.errors));
    }

    return response.data.data.adminQuests;
  } catch (error) {
    throw new Error(error.response?.data?.errors ? extractErrorMessage(error.response.data.errors) : error.message);
  }
};

