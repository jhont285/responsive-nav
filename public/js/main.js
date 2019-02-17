// JS Here!

async function loadData(url = 'api/nav.json') {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    return {};
  }
}

function buildSubList(data) {
  const div = document.createElement('div');
  div.classList.add('dropdown-menu');

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
      anchor.setAttribute('href', '#');
      anchor.classList.add('dropdown-toggle');
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

async function main() {
  const data = await loadData();
  const list = buildList(data);
  const divList = document.querySelector('#menu');
  divList.appendChild(list);
}

main();
