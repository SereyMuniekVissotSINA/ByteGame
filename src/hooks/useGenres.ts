import genres from '../data/genres'

export interface Genre {
  id: number;
  name: string;
  background_image: string;
}


const useGenre = () => ({data: genres, isLoading: false, error: null })

export default useGenre;
