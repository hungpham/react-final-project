# react-final-project
final project for trainees at company: todolist

screenshot:

![todolist wireframe](screenshot.png "todolist wireframe")

## step 1: redux
using react + redux to build a todo list application.

required technologies:
  - react.js
  - redux
    - reducer
    - actionCreator
    - connect
    - Provider
    - createStore
    - combineReducers
    - applyMiddleware
  - local storage
  - react router
  - webpack
  - es6/es2015

the user can:
- add new todo:
  input a new content, click the 'Add' button to insert a todo
- toggle a todo:
  click on a todo item to toggle its status: completed
  - completed = true: ~~display text with a line through~~
  - completed = false: display normal text
- filter the todo list
  - all (default filter): get all the list
  - completed: get only completed todos
  - active: get only not completed todos

  when a filter is active, it will display in plain text, instead of a link

## step 2: improve
- step-2-1: logger

  using redux middleware, log every action to know:
  - previous state
  - current action
  - next state

- step 2-2: local storage

  add local-storage to allow saving persistent data,
  so when we add new todos and refresh the list, the list wont be empty

- step 2-3: react router - simple

  apply react router, create the index path '/' to map to the todo list.
  using browser history to config friendly urls

- step 2-4: react router - filter

  add an option parametter 'filter' to allow view filtered list in different routes:
  - / or /all: all todos
  - /active: only active todos
  - /completed: only completed todos

## step 3: refactor with best practices
  Aplly best practices to refactor the whole application

# Evaluation

each trainee will work on different branches
and push them to this repo (not before the deadline),
using the following pattern: [your-name/[step-name],
  - hung-pham/step-1
  - hung-pham/step-2-1
  - hung-pham/step-2-2
  - hung-pham/step-2-3
  - hung-pham/step-2-4
  - hung-pham/step-3

| Step | Score (%) |
|------|-----------|
|   1  |     60    |
|  2-1 |     10    |
|  2-2 |     10    |
|  2-3 |     10    |
|  2-4 |     5     |
|   3  |     5     |

- Graduation score: 60%
