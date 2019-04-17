let numberOfImages;
$(function() {
    $('input').val(3);
    $('button').on('click', event => {
        event.preventDefault();
        fetchDogImages($('input').val());
    });
    function fetchDogImages(numberOfImages) {
        console.log('`fetchDogImages` ran');
        console.log(numberOfImages);
        numberOfImages = $('input').val();
        if (numberOfImages > 3) {
            numberOfImages = $('input').val();
        }
       else {
        numberOfImages = 3; 
        $('input').val(3);
       }
       fetch('https://dog.ceo/api/breeds/image/random/' + numberOfImages)
       .then(response => response.json())
       .then(responseData => displayDogImages(responseData));
    }
    function displayDogImages(responseData) {
        if (responseData.status === 'success') {
            for (let i = 0; i < responseData.message.length; i++) {
                $('#dogImageContainer').append(`<img src="${responseData.message[i]}">`);
            }
        }
        console.log(responseData);
    }
});

/*
Create an app that lets users choose to display between 1 and 50 random dog images, then prints the results to the console. The app should feature a form with a required input where users indicate the number of images to retrieve, and the input should default to 3. Use the endpoint described in the "DISPLAY MULTIPLE RANDOM IMAGES FROM ALL DOGS COLLECTION" section of this page of the DogAPI docs.
*/