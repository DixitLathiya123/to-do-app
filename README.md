# To-Do List Application

A simple and user-friendly To-Do List application built with React, allowing users to manage tasks efficiently with persistent data storage.

## Features

- **Add New Tasks**: Users can easily add new tasks to the to-do list.
- **Mark Tasks as Complete/Incomplete**: Tasks can be marked as complete or incomplete by clicking on them.
- **Delete Tasks**: Users can remove tasks from the list.
- **Filter Tasks**: Tasks can be filtered by all, completed, and pending statuses.
- **Local Storage Persistence**: All tasks are saved in local storage, ensuring data is retained after a page refresh.
- **Responsive UI**: The application is designed to be user-friendly and responsive across different devices.
- **Active Filter Indication**: The currently active filter is visually highlighted.
- **Performance Optimizations**: The application utilizes memoization and callback hooks for improved performance.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **CSS**: For styling the application.
- **Local Storage**: For persisting tasks across sessions.

## Folder Structure

/src
  |
  ├── /api
  |   ├──todoApi.js
  ├── /components
  │   ├── AddTodo.js
  │   ├── Filter.js
  │   ├── TodoApp.js
  │   ├── TodoItem.js
  │   ├── TodoList.js
  │   └── common
  │       ├── Button.js
  ├── /hooks
      ├── useLocalStorage.js
  ├── /styles
  │   ├── AddTodo.css
  │   ├── Filter.css
  │   ├── TodoApp.css
  │   ├── TodoItem.css
  │   └── TodoList.css
  ├── /utils
      ├── todoUtils.js
  ├── /assignments
  │   ├── longestIncreasingSubsequence.js
  │   ├── twoSum.js
  │   └── mongodbAggregation.js
  ├── App.js
  └── index.js


## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

npm install

### Start the development server

npm start

# Features

Add New Tasks: Users can easily add new tasks to the to-do list.
Mark Tasks as Complete/Incomplete: Tasks can be marked as complete or incomplete by clicking on them.
Delete Tasks: Users can remove tasks from the list.
Filter Tasks: Tasks can be filtered by all, completed, and pending statuses.
Local Storage Persistence: All tasks are saved in local storage, ensuring data is retained after a page refresh.
Responsive UI: The application is designed to be user-friendly and responsive across different devices.
Active Filter Indication: The currently active filter is visually highlighted.
Performance Optimizations: The application utilizes memoization and callback hooks for improved performance.

# Usage

Adding Tasks: Type a task in the input field and click "Add" to add it to the list.
Marking Tasks: Click on a task to toggle its completion status.
Deleting Tasks: Click "Delete" next to a task to remove it from the list.
Filtering Tasks: Use the filter buttons to display all tasks, only completed tasks, or only pending tasks.

# Code Explanation

AddTodo Component: Handles the addition of new tasks.
TodoList Component: Displays the list of tasks.
TodoItem Component: Represents each individual task and manages its state.
Filter Component: Allows users to filter tasks based on their completion status.
Local Storage: Implemented using a common utility for managing local storage to persist tasks.
API Implementation: The API functionality is implemented in src/api/todoApi.js, simulating operations such as adding, deleting, and updating tasks while utilizing local storage.

## Important Note
Implementing both local storage and API functionality simultaneously can lead to complexities in maintaining state consistency. Care should be taken to ensure that local changes reflect correctly in the UI and that any discrepancies between the local storage and the API responses are managed effectively.
The API functionality is implemented in src/api/todoApi.js

## Assignment Solutions

The following are included in the project as separate files in the **/src/assignments** folder:

1. **Longest Increasing Subsequence**: 
   - File: `longestIncreasingSubsequence.js`
   - Function: Calculates the length of the longest increasing subsequence in an array.

2. **Two Sum**: 
   - File: `twoSum.js`
   - Function: Finds the indices of two numbers that add up to a given target.

3. **MongoDB Aggregation Pipeline**: 
   - File: `mongodbAggregation.js`
   - Function: Provides a sample aggregation pipeline to calculate total revenue and average item price by store and month.
#   t o - d o - a p p 
 
 
