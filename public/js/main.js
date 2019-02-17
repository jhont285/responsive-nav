// JS Here!

async function loadData(url = 'api/nav.json') {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (e) {
    return {};
  }
}

function buildSubList(data) {
  const div = document.createElement('div');
  div.classList.add('hide');
  div.id = 'dropdown-content';

  data.forEach((item) => {
    const anchor = document.createElement('a');
    anchor.classList.add('dropdown-item');
    anchor.setAttribute('target', '_blank');
    anchor.setAttribute('href', item.url);
    anchor.innerText = item.label;
    div.appendChild(anchor);
  });

  return div;
}

function buildList(data) {
  const ul = document.createElement('ul');
  ul.classList.add('navbar-nav');

  data.items.forEach((x) => {
    const li = document.createElement('li');
    li.classList.add('nav-item');
    const anchor = document.createElement('a');
    anchor.classList.add('nav-link');
    anchor.innerHTML = x.label;
    if (x.items.length) {
      anchor.classList.add('btn');
      anchor.id = 'dropdown-toggle';
      li.appendChild(anchor);
      const ulAux = buildSubList(x.items);
      li.appendChild(ulAux);
    } else {
      anchor.setAttribute('target', '_blank');
      anchor.setAttribute('href', x.url);
      li.appendChild(anchor);
    }
    ul.appendChild(li);
  });

  return ul;
}

async function buildNavBar() {
  const data = await loadData();
  const list = buildList(data);
  const divList = document.querySelector('#menu');
  divList.appendChild(list);
}


function addListenerAllCode() {
  function hideSubMenu() {
    const menuDropdown = document.querySelector('#dropdown-content');
    const screenOrange = document.querySelector('#screen-orange');
    const itemNav = document.querySelector('#dropdown-toggle');
    menuDropdown.classList.remove('dropdown-menu');
    screenOrange.classList.add('hide');
    menuDropdown.classList.add('hide');

    if (itemNav.classList.contains('nav-link-hover')) itemNav.classList.remove('nav-link-hover');
  }

  function searchBox(event) {
    hideSubMenu();

    const input = document.querySelector('#input-text');
    const divList = document.querySelector('#menu');

    if (!input.classList.contains('hide')) {
      input.classList.add('hide');
      divList.classList.remove('hide');
    } else {
      input.classList.remove('hide');
      input.value = '';
      divList.classList.add('hide');
    }

    input.focus();
    event.preventDefault();
  }

  function displaySubMenu() {
    const menuDropdown = document.querySelector('#dropdown-content');
    const itemNav = document.querySelector('#dropdown-toggle');
    const screenOrange = document.querySelector('#screen-orange');

    if (itemNav.classList.contains('nav-link-hover')) itemNav.classList.remove('nav-link-hover');
    else itemNav.classList.add('nav-link-hover');

    if (menuDropdown.classList.contains('dropdown-menu')) {
      menuDropdown.classList.remove('dropdown-menu');
      screenOrange.classList.add('hide');
      menuDropdown.classList.add('hide');
    } else {
      menuDropdown.classList.add('dropdown-menu');
      screenOrange.classList.remove('hide');
      menuDropdown.classList.remove('hide');
    }
  }

  document.querySelector('#search-box').addEventListener('click', searchBox, false);
  document.querySelector('#screen-orange').addEventListener('click', hideSubMenu);
  document.querySelector('#dropdown-toggle').addEventListener('click', displaySubMenu);
}


async function main() {
  await buildNavBar();
  addListenerAllCode();
}

main();
