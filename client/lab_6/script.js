/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */

function dataHandler(array) {
  console.table(array);
  const range = [...Array(15).keys()];
  const listItems = range.map((item, index) => {
    const randNum = randomize(0, array.length - 1);
    return array[randNum];
  });

  return listItems;
}

function randomize(min, max) {
  minimum = Math.ceil(min);
  maximum = Math.floor(max);
  return Math.floor(
    Math.random() * (maximum - minimum + 1) + min
  );
}

function injectList(list) {
  document.querySelector('.resto-list').innerHTML = '';
  list.forEach((item) => {
    const restName = item.name.toLowerCase();
    const injectRestName = `<li>${restName}</li>`;
    // const injectThisItem = `<li>${item.name}</li>`;
    document.querySelector('.resto-list').innerHTML += injectRestName;
  });
}

async function mainEvent() { // the async keyword means we can make API requests
  const form = document.querySelector('.user-form');
  const submitButton = document.querySelector('button');
  // submitButton.style.display = 'none';
  const results = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json'); // This accesses some data from our API
  const arrayFromJson = await results.json(); // This changes it into data we can use - an object

  if (arrayFromJson.length > 0) {
    form.addEventListener('submit', async (submitEvent) => { // async has to be declared all the way to get an await
      submitEvent.preventDefault(); // This prevents your page from refreshing!
      console.log('form submission'); // this is substituting for a "breakpoint"
      submitButton.style.display = 'block';

      // arrayFromJson.data - we're accessing a key called 'data' on the returned object
      // it contains all 1,000 records we need
      injectList(dataHandler(arrayFromJson));
    });
  }
}
// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
