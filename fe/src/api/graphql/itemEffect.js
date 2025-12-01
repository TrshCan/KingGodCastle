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

// Admin Item Effects
export const getAdminItemEffects = async (itemId = null) => {
  try {
    const response = await graphqlClient.post('', {
      query: `
        query adminItemEffects($itemId: Int) {
          adminItemEffects(itemId: $itemId) {
            id
            itemId
            statName
            modifierType
            value
            note
            item {
              id
              name
              type
            }
          }
        }
      `,
      variables: { itemId },
    });

    if (response.data.errors) {
      throw new Error(extractErrorMessage(response.data.errors));
    }

    return response.data.data.adminItemEffects;
  } catch (error) {
    throw new Error(error.response?.data?.errors ? extractErrorMessage(error.response.data.errors) : error.message);
  }
};

