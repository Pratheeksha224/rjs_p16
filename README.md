# Program 16 – Multi-Page React Website Using React Router

## Aim

Build a multi-page React website using `react-router-dom`.

The website must contain the following three pages:

1. Home
2. About Us
3. Contact Us

Navigation between the pages must be implemented using React Router.

---

## Learning Objectives

After completing this practical, students will be able to:

* Install and use `react-router-dom`.
* Create routes using `Routes` and `Route`.
* Create navigation using `Link`.
* Build multiple pages in a React application.
* Navigate between pages without reloading the entire application.
* Deploy a React application using GitHub Pages.
* Use GitHub Actions for automated testing and deployment.

---

# Required Pages

## 1. Home Page

Route:

```text
/
```

The Home page should contain:

```text
Home
```

along with suitable content.

---

## 2. About Us Page

Route:

```text
/aboutus
```

The About Us page should contain:

```text
About Us
```

along with suitable content.

---

## 3. Contact Us Page

Route:

```text
/contactus
```

The Contact Us page should contain:

```text
Contact Us
```

along with suitable content.

---

# Required React Router Components

The application must use:

```javascript
BrowserRouter
Routes
Route
Link
```

from:

```javascript
react-router-dom
```

Example:

```javascript
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
```

---

# Required Navigation

The website should provide navigation similar to:

```text
Home | About Us | Contact Us
```

The navigation links must use React Router's `Link` component.

Example:

```javascript
<Link to="/">Home</Link>
<Link to="/aboutus">About Us</Link>
<Link to="/contactus">Contact Us</Link>
```

---

# Project Structure

```text
Program16-ReactRouter/
│
├── .github/
│   └── workflows/
│       ├── autograding.yml
│       └── deploy.yml
│
├── public/
│   └── index.html
│
├── src/
│   ├── App.js
│   ├── App.test.js
│   ├── index.js
│   └── index.css
│
├── package.json
├── README.md
└── .gitignore
```

---

# Installation

Open the terminal in the project folder and run:

```bash
npm install
```

This installs all required dependencies including:

```text
react
react-dom
react-router-dom
react-scripts
```

---

# Run the Application

Run:

```bash
npm start
```

The application will normally open at:

```text
http://localhost:3000
```

---

# Test the Program

Run:

```bash
npm test
```

The test cases check whether:

* The Home page is available.
* The required navigation links exist.
* The React application renders correctly.

---

# Build the Application

Run:

```bash
npm run build
```

A production-ready application will be created inside:

```text
build/
```

---

# Expected Website

The final website should contain a common header/navigation area and three different pages.

---

## Expected Home Page

```text
┌──────────────────────────────────────────────┐
│                                              │
│              My React Website                │
│                                              │
│        Home    About Us    Contact Us         │
│                                              │
├──────────────────────────────────────────────┤
│                                              │
│                    Home                      │
│                                              │
│          Welcome to the Home Page.           │
│                                              │
└──────────────────────────────────────────────┘
```

When the student opens:

```text
/
```

the Home page should be displayed.

---

## Expected About Us Page

When the student clicks **About Us**, the application should navigate to:

```text
/aboutus
```

Expected screen:

```text
┌──────────────────────────────────────────────┐
│                                              │
│              My React Website                │
│                                              │
│        Home    About Us    Contact Us         │
│                                              │
├──────────────────────────────────────────────┤
│                                              │
│                  About Us                    │
│                                              │
│      This page provides information          │
│              about our website.              │
│                                              │
└──────────────────────────────────────────────┘
```

The page must display the heading:

```text
About Us
```

---

## Expected Contact Us Page

When the student clicks **Contact Us**, the application should navigate to:

```text
/contactus
```

Expected screen:

```text
┌──────────────────────────────────────────────┐
│                                              │
│              My React Website                │
│                                              │
│        Home    About Us    Contact Us         │
│                                              │
├──────────────────────────────────────────────┤
│                                              │
│                 Contact Us                  │
│                                              │
│       You can contact us through             │
│              this page.                      │
│                                              │
└──────────────────────────────────────────────┘
```

The page must display the heading:

```text
Contact Us
```

---

# Expected Navigation Flow

The student should be able to navigate between all three pages:

```text
                  ┌───────────┐
                  │   HOME    │
                  │     /     │
                  └─────┬─────┘
                        │
              ┌─────────┴─────────┐
              ▼                   ▼
       ┌─────────────┐      ┌─────────────┐
       │  ABOUT US   │      │ CONTACT US  │
       │  /aboutus   │      │ /contactus  │
       └─────────────┘      └─────────────┘
```

Navigation should work in both directions.

For example:

```text
Home → About Us
Home → Contact Us
About Us → Home
About Us → Contact Us
Contact Us → Home
Contact Us → About Us
```

---

# Important Requirement

Do **not** create separate HTML files such as:

```text
home.html
aboutus.html
contactus.html
```

The pages must be created as React components and displayed using React Router.

For example:

```javascript
<Route path="/" element={<Home />} />

<Route
  path="/aboutus"
  element={<Aboutus />}
/>

<Route
  path="/contactus"
  element={<Contactus />}
/>
```

---

# GitHub Submission

Students must:

1. Create their GitHub repository.
2. Add the project files.
3. Run `npm install`.
4. Test the application.
5. Commit the changes.
6. Push the project to GitHub.
7. Check the **Autograding** workflow.
8. Check the **Deploy** workflow.
9. Open the GitHub Pages website.

---

# GitHub Actions

The repository contains two workflows:

```text
.github/workflows/autograding.yml
.github/workflows/deploy.yml
```

## Autograding

The autograding workflow checks:

* `react-router-dom` is installed.
* `BrowserRouter` is used.
* `Routes` is used.
* `Route` is used.
* `Link` is used.
* Home route exists.
* About Us route exists.
* Contact Us route exists.
* Navigation links exist.
* Test cases pass.
* React application builds successfully.

---

# GitHub Pages Deployment

The deployment workflow automatically builds and publishes the React application.

Go to:

```text
Repository
   ↓
Settings
   ↓
Pages
   ↓
Build and deployment
   ↓
Source
   ↓
GitHub Actions
```

Select:

```text
GitHub Actions
```

After pushing the project to the `main` branch, GitHub Actions will deploy the website.

---

# Deployment URL

After successful deployment, the website will normally be available at:

```text
https://USERNAME.github.io/REPOSITORY-NAME/
```

For example:

```text
https://studentname.github.io/Program16-ReactRouter/
```

Replace:

```text
USERNAME
```

with the student's GitHub username and:

```text
REPOSITORY-NAME
```

with the student's repository name.

---

# Student Submission

Students must submit the following:

### Student Details

```text
Student Name:
Register Number:
```

### GitHub Repository

```text
GitHub Repository URL:
________________________________________
```

### GitHub Pages

```text
GitHub Pages Deployment URL:
________________________________________
```

### GitHub Actions

```text
Autograding Status:
PASS / FAIL

Deployment Status:
SUCCESS / FAILED
```

---

# Evaluation Criteria

| Component                        |  Marks |
| -------------------------------- | -----: |
| `react-router-dom` setup         |      2 |
| Home route                       |      2 |
| About Us route                   |      2 |
| Contact Us route                 |      2 |
| Navigation using `Link`          |      1 |
| GitHub + GitHub Pages deployment |      1 |
| **Total**                        | **10** |

---

# Final Checklist

Before submission, verify:

* [ ] `npm install` completed successfully.
* [ ] Application runs using `npm start`.
* [ ] Home page works.
* [ ] About Us page works.
* [ ] Contact Us page works.
* [ ] Home navigation works.
* [ ] About Us navigation works.
* [ ] Contact Us navigation works.
* [ ] `react-router-dom` is used.
* [ ] Test cases pass.
* [ ] GitHub Actions Autograding passes.
* [ ] GitHub Actions Deployment succeeds.
* [ ] GitHub Pages link opens the website.
* [ ] GitHub repository link is submitted.

---

# Program 16 Completed

**Program:** Build a multi-page site using `react-router-dom` with Home, About Us and Contact Us pages.

**Technology:** React + React Router DOM + GitHub Actions + GitHub Pages

**Submission:** GitHub Repository URL + Live GitHub Pages URL
