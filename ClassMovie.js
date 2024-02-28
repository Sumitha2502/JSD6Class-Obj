// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class Movie
{
    constructor(title,studio,rating){
        this.a=title
        this.b=studio
        this.c=rating
    }
}
var movie1=new Movie("Jawan","Red Chillies Entertainment"," PG­13")
var movie2=new Movie("bahubali","studio","R");
console.log(movie1.c)
console.log(movie2)

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class Movie
{
    constructor(title,studio,rating="PG"){
        this.title1=title
        this.studio1=studio
        this.rating1=rating
    }
}
var movie1=new Movie("Jawan","Red Chillies Entertainment")
console.log(movie1)

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

function getPG(array) {
    const pgMovies = [];
    for (var movie of array) {
        if (movie.rating === "PG") {
            pgMovies.push(movie);
        }
    }
    return pgMovies;
}

var movie3 = new Movie("Casino Royale", "Eon Productions", "PG");
var movie4 = new Movie("Jawan", "Red Chillies Entertainment", "PG");
var movie5 = new Movie("bahubali", "studio", "R");

const array = [movie3, movie4, movie5];
const pgMoviesArray = getPG(array);

console.log(pgMoviesArray);

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class Movie
{
    constructor(title,studio,rating){
        this.title2=title
        this.studio2=studio
        this.rating3=rating
    }
}
var movie3=new Movie("Casino Royale","Eon Productions","PG­13")
console.log(movie3)
