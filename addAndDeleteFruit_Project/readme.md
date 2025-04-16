# 🍓 Add and Delete Fruits – DOM Manipulation Project

This project demonstrates how to dynamically add, delete, and manage list items using **JavaScript DOM Manipulation** techniques.

---

## 📌 Features

- Add a new fruit and it's description to the list by typing in the 
  respective input box and clicking "Add".
- Delete a fruit using the ❌ delete button
- Edit button added next to each fruit (functionality to be added later)
- Basic styling applied to elements using CSS

---

## 🧠 Concepts Used

- `document.createElement()`
- `appendChild()` & `insertBefore()`
- `addEventListener()`,`keyup`
- DOM traversal using `parentElement`
- Class assignment using `className` and `setAttribute()`
- `indexOf` to check the matching input's presence

---

## 🛠️ How it Works

1. A fruit name is entered into the input box.
2. On form submission:
   - A new `li` element is created.
   - Delete and Edit buttons are added as children.
   - The new item is appended to the existing fruit list.
3. When the ❌ button is clicked, the corresponding fruit `li` is removed.
4. When the input is given in the search fruits bar
   - it converts all the text to lowercase.
   - it then finds the matching char to filter out the fruit items in the list.
5. You can add descriptions to fruits by clicking on the description 
   input bar. 
6. You can also filter the fruits using description of the fruit 
---
## 📚 Learnings

This project helped in understanding:
- DOM element creation and manipulation
- Event handling for forms and buttons
- Filter algorithm to search with input 
---

## ✅ Status

✅ Basic Add/Delete features working.  
🟡 Edit button UI added (functionality not implemented yet).
🔍 Filter functionality is added.
📝 Added fucntionality to add description to fruit.

---

## 🔗 Future Improvements

- Implement Edit functionality to allow fruit name updates