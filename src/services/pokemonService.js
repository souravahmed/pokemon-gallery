import { api } from "../config/apiConfig";

export const PokemonService = {
  getPokemons: async (url, limit = null) => {
    try {
      const { data } = await api.get(limit ? `${url}?limit=${limit}` : url);
      return data;
    } catch (error) {
      throw error;
    }
  },
};
