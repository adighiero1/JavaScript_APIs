console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
let feedbackElement = document.querySelector("#feedback"); //selecting elements
let searchBTN = document.querySelector("#submitSearch");
let searchInput = document.querySelector("#searchWord");
const GIPHY_key = "kKmfPASFmmM3A8jJxeOpBOQEpeFxfh5G";
const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";
let gif = document.querySelector("#imageContainer > img"); //selecting image

searchBTN.addEventListener("click", (event) => {
  getGif(searchInput.value);
});

async function getGif(search) {
  try {
    //fetch promise request using async await
    let response = await fetch(`${GIPHY_URL}?api_key=${GIPHY_key}&s=${search}`);
    let responseBody = await response.json(); //consuming promise
    gif.src = responseBody.data.images.original.url;
    console.log(responseBody);
  } catch (err) {
    console.error(err);
    feedbackElement.textContent = err.message;
  } finally {
    searchInput.value = "";
  } //clearing out the input from the searchbox
}
