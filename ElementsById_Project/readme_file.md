# Fruit World – DOM Manipulation Mini Project 🍊🍏

This is a beginner-friendly JavaScript project focused on **DOM manipulation** and **styling elements dynamically**.

---

## 📌 What It Does

This project updates and styles elements on a simple fruit-themed webpage using JavaScript:

- Adds a green background and an orange border to the header.
- Changes the main heading text to “Fruit World” and styles it in orange.
- Styles the basket heading in green.
- Updates the thank you message at the bottom of the page.

---

## 🧠 What I Learned

- How to access HTML elements using `getElementById`
- How to change text content using `.textContent`
- How to dynamically apply styles using `.style`
- Improved understanding of how the **DOM** (Document Object Model) works

---

## 💻 Tech Used

- HTML (provided)
- CSS (provided)
- JavaScript (my code)

---

## 🔍 Sample Code

```js
const mainHeading = document.getElementById("main-heading");
mainHeading.textContent = "Fruit World";
mainHeading.style.color = "orange";
