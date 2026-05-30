import {types, warriors, mages, fighters, gunners, assassins, specialists, guardianKnights} from '../data/data.js'

let typesHTML = '';

types.forEach((type) => {
  typesHTML += `
      <div class="type-container">
        <div class="type-title">${type.nameRU}</div>
        <div class="class-cards ${type.nameJS}"></div>
      </div>
  `;
});

document.querySelector('.js-types-container').innerHTML = typesHTML;

let warriorsHTML = '';

warriors.forEach((warrior) => {
  warriorsHTML += `
          <a class="class-card">
            <div class="class-title">${warrior.name}</div>
            <img
              class="class-bg-img"
              src="${warrior.backgroundImg}"
            />
            <img
              class="class-img"
              src="${warrior.img}"
            />
          </a>
  `;
});

document.querySelector('.js-warriors-container').innerHTML = warriorsHTML;

let magesHTML = '';

mages.forEach((mage) => {
  magesHTML += `
          <a class="class-card">
            <div class="class-title">${mage.name}</div>
            <img
              class="class-bg-img"
              src="${mage.backgroundImg}"
            />
            <img
              class="class-img"
              src="${mage.img}"
            />
          </a>
  `;
});

document.querySelector('.js-mages-container').innerHTML = magesHTML;

let fightersHTML = '';

fighters.forEach((fighter) => {
  fightersHTML += `
          <a class="class-card">
            <div class="class-title">${fighter.name}</div>
            <img
              class="class-bg-img"
              src="${fighter.backgroundImg}"
            />
            <img
              class="class-img"
              src="${fighter.img}"
            />
          </a>
  `;
});

document.querySelector('.js-fighters-container').innerHTML = fightersHTML;

let gunnersHTML = '';

gunners.forEach((gunner) => {
  gunnersHTML += `
          <a class="class-card">
            <div class="class-title">${gunner.name}</div>
            <img
              class="class-bg-img"
              src="${gunner.backgroundImg}"
            />
            <img
              class="class-img"
              src="${gunner.img}"
            />
          </a>
  `;
});

document.querySelector('.js-gunners-container').innerHTML = gunnersHTML;

let assassinsHTML = '';

assassins.forEach((assassin) => {
  assassinsHTML += `
          <a class="class-card">
            <div class="class-title">${assassin.name}</div>
            <img
              class="class-bg-img"
              src="${assassin.backgroundImg}"
            />
            <img
              class="class-img"
              src="${assassin.img}"
            />
          </a>
  `;
});

document.querySelector('.js-assassins-container').innerHTML = assassinsHTML;

let specialistsHTML = '';

specialists.forEach((specialist) => {
  specialistsHTML += `
          <a class="class-card">
            <div class="class-title">${specialist.name}</div>
            <img
              class="class-bg-img"
              src="${specialist.backgroundImg}"
            />
            <img
              class="class-img"
              src="${specialist.img}"
            />
          </a>
  `;
});

document.querySelector('.js-specialists-container').innerHTML = specialistsHTML;

let guardianKnightsHTML = '';

guardianKnights.forEach((guardianKnight) => {
  guardianKnightsHTML += `
          <a class="class-card">
            <div class="class-title">${guardianKnight.name}</div>
            <img
              class="class-bg-img"
              src="${guardianKnight.backgroundImg}"
            />
            <img
              class="class-img"
              src="${guardianKnight.img}"
            />
          </a>
  `;
});

document.querySelector('.js-guardianKnights-container').innerHTML = guardianKnightsHTML;