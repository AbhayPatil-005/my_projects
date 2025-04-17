# 🧾 Local Storage Form with Display & Delete Functionality

A mini project built using **HTML**, **CSS**, and **JavaScript** that stores user data in **localStorage**, displays it on the screen, and allows for deletion from both the UI and localStorage.

## 🚀 Features

- Collects **Username**, **Email**, and **Phone Number** via a form
- Stores user data in **localStorage** (email used as a unique key)
- Displays submitted users in a list format
- Includes a **Delete** button for each user to:
  - Remove from the screen (DOM)
  - Remove from localStorage

## 💡 Key Concepts Practiced

- Form submission handling using `addEventListener('submit', ...)`
- Preventing default browser behavior with `event.preventDefault()`
- Accessing form data via `event.target.<inputName>.value`
- Creating and appending DOM elements using `createElement()` and `appendChild()`
- Storing and removing items from localStorage using `setItem()` and `removeItem()`
- Using `JSON.stringify()` to store objects as strings in localStorage

## 🧠 How It Works

1. User fills out the form and clicks submit.
2. A JavaScript object is created and saved to localStorage.
3. The data is displayed in the browser as a list item.
4. Each list item includes a **Delete** button.
5. Clicking **Delete**:
   - Removes the data from the UI
   - Deletes it from localStorage

## 🧪 How to Run

1. Clone or download the repository.
2. Open `index.html` in your browser.
3. Fill the form and submit it.
4. Check your browser’s `localStorage` under DevTools → Application → Local Storage.

## 📸 preview

![image](https://github.com/user-attachments/assets/c0a2735d-10a7-466f-a35f-2a3c64e85ef6)

