# React Custom Hook – `useFetch`

This project demonstrates how to build a **custom React hook** that simplifies API data fetching. The hook, named **`useFetch`**, abstracts repetitive fetch logic and provides a clean interface for managing loading states, error states, and fetched data.

---

## 🚀 Project Overview

The goal of this assignment is to create a reusable custom hook that makes API calls easier and more efficient across React components. By using this hook, you avoid writing fetch logic repeatedly.

This project includes:

- A custom hook: **`useFetch`**
- A sample component demonstrating how to use the hook
- Proper handling of **loading**, **error**, and **data** states
- Simple UI for displaying fetched data

---

## 🧩 Features

### ✔ Custom Hook: `useFetch`
- Accepts a **URL** as a parameter.
- Fetches data using JavaScript's native **fetch()**.
- Utilizes `useState`, `useEffect`, and `useCallback`.
- Returns:
  - `data` – The fetched data
  - `loading` – Loading state
  - `error` – Error message or object (if any)

### ✔ Demo Component
A simple component that:
- Shows a loading message/spinner
- Displays errors if the fetch fails
- Renders the data once loaded

### ✔ API Used
Dummy API endpoint for product data:
https://api.escuelajs.co/api/v1/products

---

## 🛠️ Tech Stack

- React (useState, useEffect, useCallback)
- JavaScript Fetch API
- CSS (basic styling)

---

## ▶️ Live Demo

**Deployed Link:**  
_https://usefetchweb.netlify.app/_

---

## 📦 Installation & Setup

```bash
git clone https://github.com/iDharitri-Raj/react-custom-hook
cd react-custom-hook
npm install
npm start
```
