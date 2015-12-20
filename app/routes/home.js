import Ember from 'ember';
import request from 'ic-ajax';

export default Ember.Route.extend({
  model() {
    let pageNumber = 1,
        sortBy = 'popularity.desc',
        baseUrl = 'http://api.themoviedb.org/3/discover/movie?api_key=72b56103e43843412a992a8d64bf96e9&page=' + pageNumber +
                  '&language=ru&sort_by=' + sortBy,
        imageUrl = 'http://image.tmdb.org/t/p/w342';
    return request(baseUrl).then(function(data){
      console.log(data);
      return {
        movies: data.results,
        imageUrl: imageUrl
      };
    });
  }
});