import Movie from "../models/Movie.js";

export const getMovies = ()=> Movie.find({}, "-createdAt -updatedAt");

export const getMovieById = _id => {
    // return Movie.findOne({_id});
    return Movie.findById(_id);
}

export const addMovie = (data) => Movie.create(data);

export const updateMovieById = async (id, data) => Movie.findByIdAndUpdate(id, data);

export const deleteMovieById = id => Movie.findByIdAndDelete(id);