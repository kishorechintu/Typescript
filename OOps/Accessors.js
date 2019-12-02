var user = "guest";
var Movie = /** @class */ (function () {
    function Movie() {
    }
    Object.defineProperty(Movie.prototype, "MovieName", {
        get: function () {
            return this._movieName;
        },
        set: function (newName) {
            if (user && user == "admin") {
                this._movieName = newName;
            }
            else {
                console.log("NOt Allowed");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Movie;
}());
var movie = new Movie;
movie.MovieName = "thor";
console.log(movie.MovieName);
