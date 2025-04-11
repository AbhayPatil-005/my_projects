# 🍓 Add and Delete Fruits – DOM Manipulation Project

This project demonstrates how to dynamically add, delete, and manage list items using **JavaScript DOM Manipulation** techniques.

---

## 📌 Features

- Add a new fruit to the list by typing in the input box and clicking "Add"
- Delete a fruit using the ❌ delete button
- Edit button added next to each fruit (functionality to be added later)
- Basic styling applied to elements using CSS

---

## 🧠 Concepts Used

- `document.createElement()`
- `appendChild()` & `insertBefore()`
- `addEventListener()`
- DOM traversal using `parentElement`
- Class assignment using `className` and `setAttribute()`

---

## 🛠️ How it Works

1. A fruit name is entered into the input box.
2. On form submission:
   - A new `li` element is created.
   - Delete and Edit buttons are added as children.
   - The new item is appended to the existing fruit list.
3. When the ❌ button is clicked, the corresponding fruit `li` is removed.

---
## 📚 Learnings

This project helped in understanding:
- DOM element creation and manipulation
- Event handling for forms and buttons

---

## ✅ Status

✅ Basic Add/Delete features working  
🟡 Edit button UI added (functionality not implemented yet)

---

## 🔗 Future Improvements

- Implement Edit functionality to allow fruit name updates
- Implement Filter functionality to search the fruit name