declare module '*.svg'

interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

interface Rating {
    Source: string;
    Value: string;
}

interface MovieProps {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Rating[];
    Runtime: string;
}