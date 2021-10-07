import React from "react";
import EmployeeLoginApp from './EmployeeLoginApp';
import AnotherPager from './AnotherPage';
import LoginPage from './Auth';
import QuizPage from './QuizPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//npm install react-router-dom  was used.
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.
//<Route exact path="/labtech">
//<LabLoginPage />
//</Route>

export default function BasicExample() {
  console.log(window.location.href);
  return (
    <Router>
      <div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/auth/google">
            <LoginPage />
          </Route>
          <Route exact path="/quiz">
            <QuizPage />
          </Route>
          <Route exact path="/meme">
            <AnotherPager />
          </Route>
          <Route exact path="/">
            <EmployeeLoginApp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function EmployeeLoginPage() {
  return (
    <EmployeeLoginApp></EmployeeLoginApp>
  );
}

function AnotherPage() {
  return (
    <AnotherPager></AnotherPager>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
