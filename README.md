demo : https://beerapp.vercel.app/1

# Beers App

App will allow users to see some interesting information about beers.

## Main app’s screen:

1. Should look familiar to provided mockup.
2. Must contain list of beers, fetched from provided API.
3. Each list element should contain beer’s name, shorten description, image and arrow
   icon.
4. Clicking on the arrow icon will redirect user to beer’s details page.
5. Must contain “Random” button, which will redirect user to beer’s details page as
   well, but the beer’s ID will be generated automatically, between 1-50.
6. Must contain search bar, users should be able to search for beer by name. Filtering
   must be done using. API documentation explains how to achieve this.
7. Pagination – users should be able to paginate through pages. Pagination must be
   done using query. API documentation explains how to achieve this.

### Details page:

1. Should look familiar to provided mockup.
2. Must fetch beer’s details from single beer endpoint, by beers ID.
3. Must contain beer’s information as shown on the mockup

### Requirements:

-   React
-   Typescript
-   Redux (we use https://redux-toolkit.js.org/ toolset to improve working with Redux, but
    You can use any of Yours choice or may don’t use any toolset)
-   React-Router
-   CSS/SCSS modules or styled-components
-   No UI libraries (Material-UI, antd, tailwind etc.) used
-   Show loading state when waiting for data (just “Loading…” is enough)

### Info:

-   API Docs: https://punkapi.com/documentation/v2 , if You find any problems while
    connecting to the API feel free to ask
-   For arrow icon please use: https://www.toptal.com/designers/htmlarrows/arrows/
-   To create boilerplate please use: https://create-react-app.dev/docs/adding-typescript
