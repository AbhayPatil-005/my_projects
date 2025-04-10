// accessed the divs in the entire html doc
const div = document.getElementsByTagName("div");
// created a h3 tag element
const subHeading = document.createElement("h3");
// inserted the para info inside the h3 tag
subHeading.textContent ="Buy high quality organic fruits online";
// accessed the mainHeading by id
const mainHeading = document.getElementById("main-heading");
// specifically accessed the 1st div
const div1 = div[0];
// added the subHeading inside the first div(div1) as a child
div1.appendChild(subHeading);
// inserted the subHeading after the mainHeading. Since there is no insertAfter() in js dom used ".nextSibling" 
div1.insertBefore(subHeading, mainHeading.nextSibling);
// making sub heading text italic
subHeading.style.fontStyle="italic";
// accessing the second div and creating the paragraph tag, adding the text inside paragraph
const div2 = div[1];
const para = document.createElement('p');
para.textContent ="Total fruits: 4"
// added the p element inside the second div
div2.appendChild(para);
// accessing the ul element, will use query selector
const ul = document.querySelector("ul");
//adding the para before the ul 
div2.insertBefore(para, ul);
// setting para an id i.e, fruits-total
para.setAttribute("id","fruits-total");

