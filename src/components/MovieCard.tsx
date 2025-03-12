import React from 'react';
import { Movie } from './movieData';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => (
  <div className="bg-[#1A1F2A] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
    <div className="relative aspect-[2/3] bg-gray-800">
      {movie.poster && movie.poster !== "/placeholder-poster.jpg" ? (
        <img 
          src={movie.poster} 
          alt={`${movie.title} movie poster`} 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/placeholder-poster.jpg";
          }}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </span>
        </div>
      )}

      <div className="absolute top-2 right-2 bg-black bg-opacity-70 px-2 py-1 rounded-md flex items-center">
        <span className="text-yellow-400 mr-1">★</span>
        <span>{movie.techScore}/5</span>
      </div>
    </div>
    
    <div className="p-4">
      <div className="flex justify-between items-start">
        <h3 className="font-mono text-lg font-medium">{movie.title}</h3>
        <span className="text-gray-400 text-sm">{movie.year}</span>
      </div>
      
      <div className="mt-3 flex flex-wrap gap-2">
        {movie.tags.map(tag => (
          <span 
            key={`${movie.id}-${tag}`} 
            className="text-xs bg-[#121620] text-blue-400 px-2 py-1 rounded-md"
          >
            #{tag}
          </span>
        ))}
      </div>
      
      <p className="text-sm text-gray-400 mt-3 line-clamp-2">
        {movie.plot}
      </p>
    </div>
  </div>
);

export default MovieCard;

