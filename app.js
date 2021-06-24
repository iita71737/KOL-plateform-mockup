// target the input element
const input = document.getElementById("action__input_1");
// click handler
const toggleMenu = event => {
  // target the menu element
  const menu = document.getElementById("action__menu_1");
  menu.classList.toggle("hidden");
};
// bind the event
input.addEventListener("click", toggleMenu);


// dark mode
// target the switch element
const darkModeToggle = document.getElementById("dark__mode__toggle");
// toggle handler
const darkModeToggleHandler = event => {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
};
// bind the event
darkModeToggle.addEventListener("change", darkModeToggleHandler);


//
const tdToggle = document.querySelector('.table__body')

const tdToggleHandler = event => {
  console.log(event.target.parentElement)
  if(event.target.checked){
    event.target.parentElement.parentElement.style.backgroundColor = '#FF6500';
  } else {
     event.target.parentElement.parentElement.style.backgroundColor = '#ffffff';
  }
}
tdToggle.addEventListener('change', tdToggleHandler);


function displayDemoList() {
  let htmlContent = `
          <td class="table__cell table__cell--checkbox">
            <input type="checkbox" class="td__toggle"/>
          </td>
          <td class="table__cell table__cell--id">ID</td>
          <td class="table__cell table__cell--name">Name</td>
          <td class="table__cell table__cell--advertiser">
            <span class="cell__advertiser__line">Advertiser</span>
            <span class="cell__advertiser__line cell__advertiser__line--group">Group</span>
          </td>
          <td class="table__cell table__cell--description">Description</td>
          <td class="table__cell table__cell--price">Price</td>
          <td class="table__cell table__cell--starttime">Start Time</td>
          <td class="table__cell table__cell--endtime">End Time</td>
          <td class="table__cell table__cell--action">
            <img class="cell__action__icon"
              src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/menu.svg"
              id="action__input_1" alt="menu" />
            <!-- menu -->
            <div class="action__menu hidden" role="dialog" aria-modal="true" aria-labelledby="action__input_1" id="action__menu_1">
              <menu class="menu__body">
                <menuitem class="menu__item">
                <img
                  src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/duplicate.svg"
                  class="menu__item__icon" />
                <span>Duplicate</span>
                </menuitem>
                <menuitem class="menu__item">
                <img
                  src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/edit.svg"
                  class="menu__item__icon" />
                <span>Edit</span>
                </menuitem>
                <menuitem class="menu__item">
                <img
                  src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/delete.svg"
                  class="menu__item__icon" />
                <span>Delete</span>
                </menuitem>
              </menu>
            </div>
          </td>
  `
  return htmlContent
}


const tbody = document.querySelector('.table__body')

for(let i=0 ; i<100; i++) {
  const tr = document.createElement('tr')
  tr.classList.add("table__row")
  tr.innerHTML = displayDemoList()
   tbody.appendChild(tr)
}

