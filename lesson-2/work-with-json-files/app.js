import * as moviesService from "./movies/index.js";

const invokeAction = async({action, id, ...data})=> {
    switch(action) {
        case "list":
            const allMovies = await moviesService.getMovies();
            return console.log(allMovies);
        case "getById":
            const oneMovie = await moviesService.getMovieById(id);
            return console.log(oneMovie);
        case "add":
            const newMovie = await moviesService.addMovie(data);
            return console.log(newMovie);
        case "updateById":
            const updateMovie = await moviesService.updateMovieById(id, data);
            return console.log(updateMovie);
        case "deleteById":
            const deleteMovie = await moviesService.deleteMovieById(id);
            return console.log(deleteMovie);
        default:
            console.log("Unknown action");
    }
}

// invokeAction({action: "list"});
// invokeAction({action: "getById", id: "u9kgwNWGi3uUUwh0b8V48"});
// invokeAction({action: "add", title: "Avatar: way of water", director: "James Cameron"});
// invokeAction({action: "updateById", id: "a2eCgM3x6fbfepGlPRzrr", title: "Avatar: Way of water"});
// invokeAction({action: "deleteById", id: "a2eCgM3x6fbfepGlPRzrr"});