# Running locally

#### Prerequisites

* [Node.js 14 LTS](https://nodejs.org/en/)
* [Yarn](https://classic.yarnpkg.com/en/docs/install)
* [Git](https://git-scm.com/downloads)

#### Clone the repository

```
git clone https://github.com/Depression-Detection/frontend.git
cd frontend
```

#### Install dependencies

```
yarn install
yarn add @sentry/react
yarn add react-router-dom
yarn add react-transition-group
yarn add react-helmet-async
yarn add react-icons
```

#### Run the development server

```
yarn start
```

You can access the website at `http://localhost:3000`.

# Making Changes

#### Steps
1. Switch to a new branch
```
git checkout -b new-branch
```

2. Make any changes you want to make
* ##### To add specific files:
```
git add <files>
```
* ##### To add all changes:
```
git add -A
```

3. Commit your changes to the Branch
```
git commit -m "message"
```
4. Push changes to remote respository (your frontend file)
```
git push --set-upstream origin new-branch
```
5. Switch the to master branch and push to GitHub
```
git push origin new-branch
```
6. Finally open the provided link and create merge request


