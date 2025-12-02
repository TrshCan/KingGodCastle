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
 * Get all heroes
 * @returns {Promise<Array>}
 */
export const getHeroes = async () => {
  try {
    const response = await graphqlClient.post('', {
      query: `
        query heroes {
          heroes {
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

    return response.data.data.heroes;
  } catch (error) {
    throw new Error(error.response?.data?.errors ? extractErrorMessage(error.response.data.errors) : error.message);
  }
};

/**
 * Get a single hero by ID
 * @param {number} id - Hero ID
 * @returns {Promise<Object>}
 */
export const getHero = async (id) => {
  try {
    const response = await graphqlClient.post('', {
      query: `
        query hero($id: ID!) {
          hero(id: $id) {
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
              Physical_DEF
              Spell_DEF
            }
            skills {
              id
              name
              description
            }
          }
        }
      `,
      variables: { id },
    });

    if (response.data.errors) {
      throw new Error(extractErrorMessage(response.data.errors));
    }

    return response.data.data.hero;
  } catch (error) {
    throw new Error(error.response?.data?.errors ? extractErrorMessage(error.response.data.errors) : error.message);
  }
};

/**
 * Get all regions
 * @returns {Promise<Array>}
 */
export const getRegions = async () => {
  try {
    const response = await graphqlClient.post('', {
      query: `
        query regions {
          regions {
            id
            name
            description
            icon
          }
        }
      `,
    });

    if (response.data.errors) {
      throw new Error(extractErrorMessage(response.data.errors));
    }

    const regions = response.data?.data?.regions;
    if (!regions) {
      console.error('Unexpected response structure:', response.data);
      throw new Error('Invalid response structure from regions query');
    }

    return Array.isArray(regions) ? regions : [];
  } catch (error) {
    console.error('Error fetching regions:', error);
    throw new Error(error.response?.data?.errors ? extractErrorMessage(error.response.data.errors) : error.message);
  }
};

/**
 * Get all hero classes
 * @returns {Promise<Array>}
 */
export const getHeroClasses = async () => {
  try {
    const response = await graphqlClient.post('', {
      query: `
        query heroClasses {
          heroClasses {
            id
            name
            description
            icon
          }
        }
      `,
    });

    if (response.data.errors) {
      throw new Error(extractErrorMessage(response.data.errors));
    }

    const heroClasses = response.data?.data?.heroClasses;
    if (!heroClasses) {
      console.error('Unexpected response structure:', response.data);
      throw new Error('Invalid response structure from heroClasses query');
    }

    return Array.isArray(heroClasses) ? heroClasses : [];
  } catch (error) {
    console.error('Error fetching hero classes:', error);
    throw new Error(error.response?.data?.errors ? extractErrorMessage(error.response.data.errors) : error.message);
  }
};

/**
 * Create a new hero
 * @param {Object} input - Hero input data
 * @returns {Promise<Object>}
 */
export const createHero = async (input) => {
  try {
    const response = await graphqlClient.post('', {
      query: `
        mutation createHero($input: CreateHeroInput!) {
          createHero(input: $input) {
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
            }
            heroClass {
              id
              name
            }
          }
        }
      `,
      variables: { input },
    });

    if (response.data.errors) {
      throw new Error(extractErrorMessage(response.data.errors));
    }

    return response.data.data.createHero;
  } catch (error) {
    throw new Error(error.response?.data?.errors ? extractErrorMessage(error.response.data.errors) : error.message);
  }
};

/**
 * Update a hero
 * @param {number} id - Hero ID
 * @param {Object} input - Hero input data
 * @returns {Promise<Object>}
 */
export const updateHero = async (id, input) => {
  try {
    const response = await graphqlClient.post('', {
      query: `
        mutation updateHero($id: ID!, $input: UpdateHeroInput!) {
          updateHero(id: $id, input: $input) {
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
            }
            heroClass {
              id
              name
            }
          }
        }
      `,
      variables: { id, input },
    });

    if (response.data.errors) {
      throw new Error(extractErrorMessage(response.data.errors));
    }

    return response.data.data.updateHero;
  } catch (error) {
    throw new Error(error.response?.data?.errors ? extractErrorMessage(error.response.data.errors) : error.message);
  }
};

/**
 * Delete a hero
 * @param {number} id - Hero ID
 * @returns {Promise<Object>}
 */
export const deleteHero = async (id) => {
  try {
    const response = await graphqlClient.post('', {
      query: `
        mutation deleteHero($id: ID!) {
          deleteHero(id: $id) {
            success
          }
        }
      `,
      variables: { id },
    });

    if (response.data.errors) {
      throw new Error(extractErrorMessage(response.data.errors));
    }

    return response.data.data.deleteHero;
  } catch (error) {
    throw new Error(error.response?.data?.errors ? extractErrorMessage(error.response.data.errors) : error.message);
  }
};

