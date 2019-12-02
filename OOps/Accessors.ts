let user:string="guest";
class Movie{
    private _movieName:string;
    get MovieName(){
        return this._movieName;
    }
    set MovieName(newName:string){
        if(user&&user=="admin"){
            this._movieName=newName;
        }
        else{
            console.log("NOt Allowed");
        }
    }
}
let movie=new Movie;
movie.MovieName="thor";
console.log(movie.MovieName);