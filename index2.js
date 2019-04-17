let dogBreed;
$(function() {
    $('button').on('click', event => {
        event.preventDefault();
        fetchDogImages($('input').val());
    });
    function fetchDogImages(dogBreed) {
        console.log('`fetchDogImages` ran');
       fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
       .then(response => response.json())
       .then(responseData => displayDogImages(responseData));
       
    }
    function displayDogImages(responseData) {
        console.log(responseData.code);
        if (responseData.status === 'success') {
                $('#dogImageContainer').html(`<img src="${responseData.message}">`);
            }
         else if (responseData.code === '404') {
            alert(responseData.message);
        }
    } 
});

/*
Create an app that loads a single random image for a specific breed, based on a user input. This app should account for the happy case when the breed is found, as well as the unhappy case when it is not. Use the endpoint described in the "RANDOM IMAGE FROM A BREED COLLECTION" section of this page of the DogAPI docs. Note that the API will return an HTTP status code of 404 along with a JSON object with info about the error if a request is made for a breed that can't be found.
*/