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

/**
 * Get current user's heroes
 * @returns {Promise<Array>}
 */
export const getMyHeroes = async () => {
  try {
    const response = await graphqlClient.post('', {
      query: `
        query myHeroes {
          myHeroes {
            id
            userId
            heroId
            level
            xp
            hero {
              id
              name
              title
              description
              rarity
              icon
              illustration
              card
              region {
                id
                name
                icon
              }
              heroClass {
                id
                name
                icon
              }
              baseStats {
                id
                HP
                ATK
                Spell
                Physical_DEF
                Spell_DEF
              }
            }
            stats {
              id
              HP
              ATK
              Spell
              Physical_DEF
              Spell_DEF
            }
          }
        }
      `,
    });

    if (response.data.errors) {
      throw new Error(extractErrorMessage(response.data.errors));
    }

    return response.data.data.myHeroes;
  } catch (error) {
    throw new Error(error.response?.data?.errors ? extractErrorMessage(error.response.data.errors) : error.message);
  }
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

