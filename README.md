# React Series Challenge
React proficiency challenge. Using the provided libraries and templates create a Giphy Client that matches to the best of your capacity what is described in the deliverables section.

#### What we are expecting from you is:
- Use [Giphy API](https://developers.giphy.com/docs)
- Use React Router and React 16 (already included in the boilerplate code)
- Use Redux Saga for API requests
- Use Redux for your application's state management 

## Views
Important. Constantly commit your code.
- Home View
  - It displays the trending GIFs using Giphy Trending API.
  - It has a search bar, which uses Giphy Search API.
  - Each GIF may be saved as favorite in the Redux state, and also can be removed from the same call to action.
  - Each GIF should display if it is already marked as favorite.
- Your Favorites GIFs View
  - It displays the GIFs that you previously selected, which comes from the Redux state.
  - It has a search bar, which filters from the Redux state.
  - Each GIF may be removed from favorite in the Redux state.
## Restrictions
- Don’t include extra dependencies (lodash).
- Minimize the use of React Components internal state.
- Application must preserve the state for favorites. This means that if your refresh the page, it must display the ones that you previously selected.

## Code Review
- Push this project to a new repository.
