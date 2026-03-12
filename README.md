# 📝 React To-Do App

A clean, responsive, and feature-rich To-Do application built with React and Vite. This app helps users manage their daily tasks efficiently with features like inline editing, completion tracking, and smart sorting.

## ✨ Features

* **Add Tasks:** Quickly add new items to your to-do list.
* **Edit Tasks:** Inline editing allows you to update task names on the fly.
* **Smart Sorting:** Completed tasks automatically move to the bottom of the list, keeping your active tasks in focus.
* **Input Validation:** Prevents users from submitting empty tasks or duplicate entries.
* **Toggle Completion:** Click on any task to mark it as done (applies a strikethrough effect).
* **Delete Tasks:** Easily remove tasks you no longer need.

## 🛠️ Tech Stack

* **Frontend Framework:** React 18
* **Build Tool:** Vite (for extremely fast HMR and optimized builds)
* **Styling:** CSS Modules (Scoped styling for components to avoid class name conflicts)
* **State Management:** React Hooks (`useState`)

## 🏗️ Component Architecture



The application follows a clean, top-down data flow using React's unidirectional data flow:

* `App.jsx`: The root component that renders the layout.
  * `Header.jsx`: A simple, stateless UI component for the app title.
  * `Todo.jsx`: The main state container. It holds the `todos` array and passes it down alongside the `setTodos` updater function.
    * `Form.jsx`: Handles user input and validation before adding a new task object (with a unique `Date.now()` ID) to the state.
    * `Todolist.jsx`: Receives the tasks, sorts them (incomplete first), and maps them out.
      * `TodoItem.jsx`: Handles the individual logic for each task, including local state for editing mode, toggling completion, and triggering deletions.

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd adharsh-tvm-todoapp
