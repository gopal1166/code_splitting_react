#### Date: 22-02-2019

Using code splitting in react project to improve the application performance
----------------------------------------------------

#### local setup instructions

clone the repo
```
git clone https://github.com/gopal1166/code_splitting_react.git
```
install the dependencies
```
npm install
```
run the server
```
npm start
```

then check the Network tab in developer tools, observe the chunks

Summery:
---------------------------------------------

created asyncComponent hoc to import components dynamically hoc/asyncComponent.js:

created a Test component in components/Test.js

dynamically imported the Test component using asyncComponent
from components/Test.js in App.js
