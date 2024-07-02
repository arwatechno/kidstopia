// const uls = document.querySelectorAll("ul");

// uls.forEach((ul) => {
//   const resetClass = ul.parentNode.getAttribute("class");
//   const lis = ul.querySelectorAll("li");

//   lis.forEach((li) => {
//     li.addEventListener("click", (e) => {
//       e.preventDefault();
//       e.stopPropagation();
//       const target = e.currentTarget;

//       if (
//         target.classList.contains("active") ||
//         target.classList.contains("follow")
//       ) {
//         return;
//       }

//       ul.parentNode.setAttribute(
//         "class",
//         `${resetClass} ${target.getAttribute("data-where")}-style`
//       );

//       lis.forEach((item) => clearClass(item, "active"));

//       setClass(target, "active");
//     });
//   });
// });

// function clearClass(node, className) {
//   node.classList.remove(className);
// }

// function setClass(node, className) {
//   node.classList.add(className);
// }
const uls = document.querySelectorAll(".tabbar ul");

uls.forEach((ul) => {
  const resetClass = ul.parentNode.getAttribute("class");
  const lis = ul.querySelectorAll("li");

  lis.forEach((li) => {
    li.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const target = e.currentTarget;

      if (
        target.classList.contains("active") ||
        target.classList.contains("follow")
      ) {
        return;
      }

      ul.parentNode.setAttribute(
        "class",
        `${resetClass} ${target.getAttribute("data-where")}-style`
      );

      lis.forEach((item) => clearClass(item, "active"));
      setClass(target, "active");

      // Get the page URL from the "data-page" attribute
      const pageUrl = target.getAttribute("data-page");

      // Navigate to the specific page
      window.location.href = pageUrl;
    });
  });
});

function clearClass(node, className) {
  node.classList.remove(className);
}

function setClass(node, className) {
  node.classList.add(className);
}