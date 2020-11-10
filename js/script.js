$(document).ready(function (){

    var pets = [
        {
            id : 0,
            species : 'dog',
            breed : 'Beagle',
            temperament : 'Amiable, Excitable, Intelligent, Determined, Even Tempered, Gentle',
            height: 'Male: 36–41 cm, Female: 33–38 cm',
            weight: 'Male: 10–11 kg, Female: 9–10 kg',
            colors : 'Lemon & White, White & Tan, Tri-color, Chocolate Tri, White & Chocolate, Orange & White, Red & White',
            lifeExpectancy : '12-15 Years',
            origin: 'United Kingdom, England, Great Britain',
            photo : [ 'beagle01.jpg' , 'beagle01.jpg' ],
            description : ''
        },

        {
            id : 1,
            species : 'dog',
            breed : 'Siberian Husky',
            temperament : 'Intelligent, Outgoing, Alert, Friendly, Gentle',
            height: 'Female: 50–56 cm, Male: 54–60 cm',
            weight: 'Female: 16–23 kg, Male: 20–27 kg',
            colors : ' White, Black, Black & Tan, Silver-gray, Black & White, Sable & White, Grey, Gray & White, Red & White',
            lifeExpectancy : '12-15 Years',
            origin: 'Siberia',
            photo : 'SiberianHusky01.jpg',
            description : 'The Siberian Husky (Russian: Сибирский хаски, tr. Sibirskiy khaski) is a medium-sized working dog breed. The breed belongs to the Spitz genetic family. It is recognizable by its thickly furred double coat, erect triangular ears, and distinctive markings, and is smaller than a very similar-looking dog, the Alaskan Malamute Siberian Huskies originated in Northeast Asia where they are bred by the Chukchi people for sled-pulling, guarding, and companionship.[5] It is an active, energetic, resilient breed, whose ancestors lived in the extremely cold and harsh environment of the Siberian Arctic. William Goosak, a Russian fur trader, introduced them to Nome, Alaska during the Nome Gold Rush, initially as sled dogs.'
        },

        {
            id : 2,
            species : 'dog',
            breed : 'Chow Chow',
            temperament : 'Aloof, Independent, Loyal, Quiet',
            height: 'Male: 25–32 kg, Female: 20–27 kg',
            weight: 'Male: 10–11 kg, Female: 9–10 kg',
            colors : 'Black, Blue, Fawn, Cream, Red',
            lifeExpectancy : '9–15 Years',
            origin: 'China',
            photo : 'ChowChow01.jpg',
            description : 'The Chow-Chow is a dog breed originally from northern China.[3] The Chow-Chow is a sturdily built dog, square in profile, with a broad skull and small, triangular, erect ears with rounded tips. The breed is known for a very dense double coat that is either smooth or rough.[1]:4–5 The fur is particularly thick in the neck area, giving it a distinctive ruff or mane appearance. The coat may be shaded/self-red, black, blue, cinnamon/fawn, or cream.'
        },

        {
            id : 3,
            species : 'dog',
            breed : 'St. Bernard',
            temperament : ' Lively, Friendly, Watchful, Gentle, Calm',
            height: 'Male: 70–90 cm, Female: 65–80 cm',
            weight: '64 – 120 kg',
            colors : 'Red & White, Reddish-brown Brindle, Brownish-yellow, Reddish-brown Splash, Reddish-brown Mantle',
            lifeExpectancy : '8–10 Years',
            origin: 'Switzerland, Italy',
            photo : 'St.Bernard01.jpg',
            description : 'The St. Bernard or St Bernard (UK: /ˈbɜːnəd/, US: /bərˈnɑːrd/) is a breed of very large working dog from the western Alps in Italy and Switzerland.[3] They were originally bred for rescue work by the hospice of the Great St Bernard Pass on the Italian-Swiss border.[4][5] The hospice,[when defined as?] built by and named after Italian monk Bernard of Menthon, acquired its first dogs between 1660 and 1670.[4] The breed has become famous through tales of Alpine rescues, as well as for its large size.'
        },

        {
            id : 4,
            species : 'cat',
            breed : 'Persian',
            temperament : 'Friendly, Calm',
            height: '10-15 inches',
            weight: '12 pounds',
            colors : 'silver, blue silver, red, brown, blue, cream, cameo and cream cameo. There are no patched tabby patterns in red, cream and cameo.',
            lifeExpectancy : '10–17 Years',
            origin: 'Iran',
            photo : 'persian01.jpg',
            description : 'The Persian cat is a long-haired breed of cat characterized by its round face and short muzzle. It is also known as the "Persian Longhair" in the English-speaking countries. The first documented ancestors of the Persian were imported into Italy from Iran around 1620.'
        },

        {
            id : 4,
            species : 'cat',
            breed : 'Persian',
            temperament : 'Friendly, Calm',
            height: '10-15 inches',
            weight: '12 pounds',
            colors : 'silver, blue silver, red, brown, blue, cream, cameo and cream cameo. There are no patched tabby patterns in red, cream and cameo.',
            lifeExpectancy : '10–17 Years',
            origin: 'Iran',
            photo : 'persian01.jpg',
            description : ' The first documented'
        }

        

    ];// pets array !!!


// ==========================================================
// Function call to display all items
// ==========================================================

$('input[type=checkbox]').prop('checked',false);
allpets(); //displays all items on home page




allpets(); //displays all items on home page

$('#refresh').click(function(){
  $('input[type=checkbox]').prop('checked',false);
  allpets();
});



// ==========================================================
// Display items as per user's input - breed filter call
// ==========================================================




    $('#showChoice').click(function(){
        var inputArray = [ ];
      
        // read input of users and store
        var dog = $('#dog:checked').val();
        var cat = $('#cat:checked').val();
        var bird = $('#bird:checked').val();
        var fish = $('#fish:checked').val();
      
        //push user's choice into an array
        if (dog === 'checked') {
              inputArray.push('dog');
              console.log(inputArray);
        }
      
        if (cat === 'checked') {
              inputArray.push('cat');
              console.log(inputArray);
        }
      
        if (bird === 'checked') {
              inputArray.push('bird');
              console.log(inputArray);
        }
      
         if (fish === 'checked'){
            inputArray.push('fish');
            console.log(inputArray);
        }
      
        //call the function to filter user's choice
        filteredpets(inputArray);
      
      });//showChoice click function


      // ==========================================================
// Behaviour filter call
// ==========================================================

$('#showSelection').click(function(){
    var behaviour = $('#behaviour').val();
    console.log(behaviour);
    filteredBehaviour(behaviour);
  });


  $('#searchWord').click(function(){
    $(this).val('');
  });
  
  $('#searchIcon').click(function(){
    var searchWord = $('#searchWord').val();
    console.log(searchWord);
    filterByWord(searchWord);
  
  });
  
  
  // ==========================================================
  // Function to display all items
  // ==========================================================
  
  function allpets(){
    var i = 0;
    $('#result').text(' ');
    for (i = 0 ; i < pets.length; i++){

  
      //bootstrap cards to $display
      displayCards(i);
      cardModal();
    } //end of for loop
    }//end of allpets function
  
  
  
  // ==========================================================
  // Modal
  // ==========================================================
  
    function cardModal(){
  
      $('.moreDetails').click(function(){
        $('#imagepets').text(' '); //clearing the content
        console.log(this.id);
        var species = '';
        var i=0;
        for (i = 0; i < pets.length; i++) {
          console.log(parseInt(this.id), pets[i].id);
          if (parseInt(this.id) === pets[i].id) {
            species = pets[i].species;
            console.log(species);
            console.log(pets[i].id, pets[i].species);
              $('#exampleModalLabel').text(pets[i].breed);
              //append will keep  adding to existing content, so clear if you want
              //or else use html to replace existing content
              $('#imagepets').append('<img class="img-fluid" src="images/' + pets[i].photo + '" alt="' + pets[i].breed + '"/>' +
              '<p class="text-dark">'+ pets[i].description +'</p>') ;
  
  
          } //end of if statement
  
  
        }//end of for statement
        console.log(species);
        petsCarousel(photo);
  
  
  
  
  
      }); // end of moreDetails click event
  
    } //cardModal
  
  
  
  // ==========================================================
  // Carousel
  // ==========================================================
  
    function petsCarousel(photo){
      var photoArray = [];
      $('#imagepets').text('');
      for (i = 0; i < pets.length; i++) {
  
        if (pets[i].photo === petsPhoto) {
          photoArray.push(pets[i].photo);
          // console.log(cats[i].description);
          $('#imagepets').append('<p class="text-danger lead">' + pets[i].description + '<p>' );
        } //end of if
      } //end of for
  
      console.log(photoArray);
      $('#imagepets').append(
        '  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">' +
        '  <ol class="carousel-indicators">' +
        '    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>' +
        '    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>' +
        '    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>' +
        '  </ol>' +
        '  <div class="carousel-inner">' +
        '    <div class="carousel-item active">' +
        '      <img class="d-block w-100" src="images/' + photoArray[0] + '" alt="First slide">' +
        '    </div>' +
        '    <div class="carousel-item">' +
        '      <img class="d-block w-100" src="images/' + photoArray[1] + '"alt="Second slide">' +
        '    </div>' +
        '    <div class="carousel-item">' +
        '      <img class="d-block w-100" src="images/' + photoArray[2] + '" alt="Third slide">' +
        '    </div>' +
        '  </div>' +
        '  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">' +
        '    <span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
        '    <span class="sr-only">Previous</span>' +
        '  </a>' +
        '  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">' +
        '    <span class="carousel-control-next-icon" aria-hidden="true"></span>' +
        '    <span class="sr-only">Next</span>' +
        '  </a>' +
        '</div>'); //end of imageCat html
  
    } //end of catCarousel
  
  
  
  // ==========================================================
  // Filter by pet type
  // ==========================================================
  
  function filteredpets(petsSpecies){
    console.log(petsSpecies);
    var i,j;
    $('#result').text(' ');
    for(i = 0 ; i < pets.length; i++) {
      for (j = 0 ; j < petsSpecies.length; j++){
        if (petsSpecies[j] === pets[i].species) {
          displayCards(i);
          cardModal();
        }//if
      }//for j
    }//for i
  }//filteredpets
  
  
  // ==========================================================
  // Filter by cat behaviour
  // ==========================================================
  
  function filteredBehaviour(catBehaviour){
    console.log(catBehaviour);
    var i,j;
    $('#result').text(' ');
    for(i = 0 ; i < cats.length; i++) {
      for (j = 0 ; j < catBehaviour.length; j++){
        console.log(catBehaviour[j], cats[i].behaviour);
        if (catBehaviour[j] === cats[i].behaviour) {
          displayCards(i);
          cardModal();
  
        }//if
  
      }//for j
    }//for i
  }//filteredBehaviour


  // ==========================================================
// Filter by word
// ==========================================================
function filterByWord(word){
  console.log(word);
  var i,j;
  $('#result').text('');
  for (i = 0 ; i < pets.length; i++){
    // for (j = 0; j < pets[i].length; j++){
    console.log(word.toLowerCase(), pets[i].breed);
    
      if (word.toLowerCase() === pets[i].breed.toLowerCase()){
        console.log(true);
        
        displayCards(i);
        cardModal();
      }//if
    // }//for j
  }//for i
}//filterByWord
  
  
  
  // ==========================================================
  // Display cards
  // ==========================================================
  function displayCards(j){
    //access properties of objects using index number
          $('#result').append('  <div class="card">'+
         '<img src="images/' + pets[j].photo +'" class="card-img-top" alt="' + pets[j].breed + '">'+
         '<div class="card-body">'+
           '<h3 class="card-title"> '+ pets[j].breed + ' </h3>'+
           
           '<p class="card-text">  <span class="h5" > colors: </span>' + pets[j].colors +' <br> <span class="h5" > Temperament: </span> '+ pets[j].temperament +' </p>'+
           '<button id="' + pets[j].id + '" type="button" class="btn btnColor text-light moreDetails" data-toggle="modal" data-target="#exampleModal">More about'+ " " + pets[j].breed + '</button>' +
      '</div>'+
        '</div>'

       );// append ends here
  
  
    }; //displayCards
  

    


});