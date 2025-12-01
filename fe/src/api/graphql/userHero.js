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

// Admin User Heroes
export const getAdminUserHeroes = async (userId = null) => {
  try {
    const response = await graphqlClient.post('', {
      query: `
        query adminUserHeroes($userId: Int) {
          adminUserHeroes(userId: $userId) {
            id
            userId
            heroId
            level
            xp
            user {
              id
              username
              email
            }
            hero {
              id
              name
              class
              rarity
            }
            stats {
              hp
              attack
              defense
            }
          }
        }
      `,
      variables: { userId },
    });

    if (response.data.errors) {
      throw new Error(extractErrorMessage(response.data.errors));
    }

    return response.data.data.adminUserHeroes;
  } catch (error) {
    throw new Error(error.response?.data?.errors ? extractErrorMessage(error.response.data.errors) : error.message);
  }
};

