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
  *To add specific files:
  ```
  git add <files>
  ```
  *To add all changes:
  ```
  git add -A
  ```

3. Commit your changes to the Branch
```
git commit -m "fixed the bug"
```
4. Push changes to remote respository (your frontend file)
```
git push -u origin buxfix
```
5. Switch the to master branch and push to GitHub
```
git checkout master
git push origin master
```
6. Finally open the provided link and create merge request


