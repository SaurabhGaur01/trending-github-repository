# Github Trending Repository - React/Redux/Thunk

This application will allow you to view most popular repositories of the last week and also allow user to -
a) Star repositories and vew in separate tab
b) Change language filter and get results based on the chosen one

This application is using [Github open repositories](https://developer.github.com/v3/search/#search-repositories) to get results.

This application utilises - React, Redux, Thunk, Jest & Enzyme Testing, Bootstrap and Material UI.

Click on [Demo](https://saurabhgaur01.github.io/weather-app/) for quick view.
## Installation & Usage

Use the package manager [Node and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to run this project on your local. After installing, run below command to install all dependencies-

```bash
npm install
```

This will create node_modules  folder on your root where you downloaded this project. Now, run -

```bash
npm start
```
This command will run your server on your localhost. You can access then on your browser via -

```bash
http://localhost:3000/
```

To run test suit, you need to run -

```bash
npm test
```
This will test entire application including components, ducks, thunks, utils functions used throughout using _Jest and Enzyme_ library. Snapshots already available under _test_ folder.


## Contributing
1. Fork it ( https://github.com/SaurabhGaur01/trending-github-repository/fork )
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request
