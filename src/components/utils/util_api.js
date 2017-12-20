export const fetchAPI = (url, app) => {
  switch (app.state.searchType) {
    case "movie":
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then(data => {
          app.setState({
            movie: {
              id: data.id,
              title: data.title,
              genres: data.genres.map(genre => genre.name),
              overview: data.overview,
              runtime: data.runtime,
              tagline: data.tagline,
              rating: data.vote_average,
              releaseDate: data.release_date,
              poster: data.poster_path,
              backdrop: data.backdrop_path,
              budget: data.budget,
              boxOffice: data.revenue,
              status: data.status,
            }
            })
        })
        break;
    case "person":
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then(data => {
          app.setState({
            person: {
              id: data.id,
              biography: data.biography,
              birthday: data.birthday,
              deathday: data.deathday,
              birthLocation: data.place_of_birth,
              name: data.name,
              picture: data.profile_path,
            }
          })
        })
      break;
    case "tv":
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then(data => {
          app.setState({
            tv: {
              id: data.id,
              backdrop: data.backdrop_path,
              createdBy: data.created_by,
              geners: data.genres.map(genre => genre.name),
              firstAired: data.first_air_date,
              lastAired: data.last_air_date,
              runTime: data.episode_run_time,
              name: data.name,
              networks: data.networks.map(network => network.name),
              overview: data.overview,
              poster: data.poster_path,
              productionCompanies: data.production_companies,
              seasons: data.seasons,
              rating: data.vote_average,
            }
          })
        })
  }
}
