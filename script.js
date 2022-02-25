`use strict`;

window.onload = function () {
  let year = new Date().getFullYear();

  document.getElementById(`footer`).textContent = `© Cody Partington ${year}`;

  const navButton = document.querySelector(`.menu-toggle`);
  const navPosition = document.querySelector(`.navigation`);

  navButton.addEventListener(`click`, function () {
    const inMenu = navPosition.getAttribute(`data-visible`);

    if (inMenu == `false`) {
      navPosition.setAttribute(`data-visible`, true);
    } else {
      navPosition.setAttribute(`data-visible`, false);
    }
  });
};

const teacherOne = `Matt`;
const teacherTwo = `Glen`;

console.log(`Easter egg for the ${teacherOne} or ${teacherTwo}`);
