const api = "https://api.tvmaze.com";

export function getShows(title = "") {
  try {
    return fetch(`${api}/search/shows?q=${title}`).then((data) => data.json());
  } catch ({ message }) {
    throw new Error(`Failed to get shows: ${message}`);
  }
}

export function getTitle(id = 0) {
  try {
    return fetch(`${api}/shows/${id}`).then((data) => data.json());
  } catch ({ message }) {
    throw new Error(`Failed to get title: ${message}`);
  }
}
