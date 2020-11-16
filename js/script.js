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
            photo : [ 'beagle01.jpg' , 'beagle02.jpg' , 'beagle03.jpg' ],
            description : 'The beagle is a breed of small hound that is similar in appearance to the much larger foxhound. The beagle is a scent hound, developed primarily for hunting hare.'
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
            photo : ['SiberianHusky01.jpg', 'SiberianHusky02.jpg' , 'SiberianHusky03.jpg'],
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
            photo : ['ChowChow01.jpg','ChowChow02.jpg','ChowChow03.jpg'],
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
            photo : ['St.Bernard01.jpg','St.Bernard02.jpg','St.Bernard03.jpg'],
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
            photo : ['persian01.jpg','persian02.jpg','persian03.jpg'],
            description : 'The Persian cat is a long-haired breed of cat characterized by its round face and short muzzle. It is also known as the "Persian Longhair" in the English-speaking countries. The first documented ancestors of the Persian were imported into Italy from Iran around 1620.'
        },

        {
            id : 5,
            species : 'cat',
            breed : 'British Shorthair',
            temperament : 'Friendly, Easygoing',
            height: '10-15 inches',
            weight: '12 pounds',
            colors : 'silver, blue silver, red, brown, blue, cream, cameo and cream cameo. There are no patched tabby patterns in red, cream and cameo.',
            lifeExpectancy : '10–17 Years',
            origin: 'Great Britain',
            photo : ['BritishShorthair01.jpg','BritishShorthair02.jpg','BritishShorthair03.jpg'],
            description : ' The British Shorthair is a relatively powerful-looking large cat, having a broad chest, strong thick-set legs with rounded paws and a medium-length, blunt-tipped tail. The head is relatively large and rounded, with a short muzzle, broad cheeks (most noticeable in mature males, who tend to develop prominent jowls) and large round eyes that are deep coppery orange in the British Blue and otherwise vary in colour depending on the coat. Their large ears are broad and widely set.'
        },

        {
          id : 6,
          species : 'cat',
          breed : 'Maine Coon',
          temperament : 'Friendly, Calm',
          height: '10-15 inches',
          weight: 'Male: 5.9 – 8.2 kg, Female: 3.6 – 5.4 kg',
          colors : 'silver, blue silver, red, brown, blue, cream, cameo and cream cameo. There are no patched tabby patterns in red, cream and cameo.',
          lifeExpectancy : '10–17 Years',
          origin: 'Maine, United States',
          photo : ['MaineCoon02.jpg','MaineCoon01.jpg','MaineCoon03.jpg'],
          description : ' The Maine Coon is the largest domesticated cat breed. It has a distinctive physical appearance and valuable hunting skills. It is one of the oldest natural breeds in North America, specifically native to the US state of Maine,[3] where it is the official state cat.'
      },

      
    {
      id : 7,
      species : 'cat',
      breed : 'Siamese',
      temperament : 'Friendly, Calm',
      height: '10-15 inches',
      weight: '12 pounds',
      colors : 'silver, blue silver, red, brown, blue, cream, cameo and cream cameo. There are no patched tabby patterns in red, cream and cameo.',
      lifeExpectancy : '10–17 Years',
      origin: 'Thailand',
      photo : ['Siamese01.jpg','Siamese02.jpg','Siamese03.jpg'],
      description : ' The Siamese cat is one of the first distinctly recognized breeds of Asian cat. Derived from the Wichianmat landrace, one of several varieties of cat native to Thailand, the original Siamese became one of the most popular breeds in Europe and North America in the 19th century.'
  },

  {
    id : 8,
    species : 'bird',
    breed : 'Grey parrot',
    temperament : 'Friendly,',
    height: '10-15 inches',
    weight: '410 g',
    colors : 'Grey',
    lifeExpectancy : '40–60 years',
    origin: 'Animalia',
    photo : ['Grey01.jpg','Grey02.jpg','Grey03.jpg'],
    description : 'The grey parrot, also known as the Congo grey parrot, Congo African grey parrot or African grey parrot, is an Old World parrot in the family Psittacidae. The Timneh parrot once was identified as a subspecies of the grey parrot, but has since been elevated to a full species. '
},
{
  id : 9,
  species : 'bird',
  breed : 'Amazon parrot',
  temperament : 'Friendly,',
  height: '10-15 inches',
  weight: '410 g',
  colors : 'Green, Red',
  lifeExpectancy : '50 years',
  origin: 'Animalia',
  photo : ['AmazonParrot01.jpg','AmazonParrot02.jpg','AmazonParrot03.jpg'],
  description : 'Amazon parrot is the common name for a parrot of the genus Amazona. They are medium-sized parrots native to the New World ranging from South America to Mexico and the Caribbean. Most amazon parrots are predominantly green, with accenting colors that depend on the species and can be quite vivid. They feed primarily on seeds, nuts, and fruits, supplemented by leafy matter. Many amazon parrots have a remarkable ability to mimic human speech and other sounds. Partly because of this, they are popular as pets or companion parrots, and a small industry has developed in breeding parrots in captivity for this market. This popularity has led to many parrots being taken from the wild to the extent that some species have become threatened. The Convention on International Trade in Endangered Species of Wild Fauna and Flora treaty has made the capture of wild parrots for the pet trade illegal in an attempt to help protect wild populations.'
},
{
  id : 10,
  species : 'bird',
  breed : 'Budgerigar',
  temperament : 'Friendly,',
  height: '4-6 inches',
  weight: '40 g',
  colors : 'light-green,dark-green, gray-green , olive, yellow, Green-yellow base',
  lifeExpectancy : '5-10 years',
  origin: 'Australia',
  photo : ['Budgerigar01.jpg','Budgerigar02.jpg','Budgerigar03.jpg'],
  description : 'The budgerigar is a long-tailed, seed-eating parrot usually nicknamed the budgie, or in American English, the parakeet. Budgies are the only species in the genus Melopsittacus. Naturally, the species is green and yellow with black, scalloped markings on the nape, back, and wings.'
},
{
  id : 11,
  species : 'bird',
  breed : 'Cockatiel',
  temperament : 'Friendly,',
  height: '10-15 inches',
  weight: '90 g',
  colors : 'Grey, yellow ,red',
  lifeExpectancy : '10 – 14 years',
  origin: 'Animalia',
  photo : ['Cockatiel01.jpg','Cockatiel02.jpg','Cockatiel03.jpg'],
  description : 'The cockatiel, also known as weiro bird, or quarrion, is a small parrot that is a member of its own branch of the cockatoo family endemic to Australia. They are prized as household pets and companion parrots throughout the world and are relatively easy to breed.'
},
{
  id : 12,
  species : 'fish',
  breed : 'Goldfish',
  temperament : 'beautiful,',
  height: '16 inches',
  weight: '2.3 kg',
  colors : 'red, white, yellow, black',
  lifeExpectancy : '40–60 years',
  origin: 'Animalia',
  photo : ['GoldFish01.jpg','GoldFish02.jpg','GoldFish03.jpg'],
  description : 'The goldfish is a freshwater fish in the family Cyprinidae of order Cypriniformes. It is one of the most commonly kept aquarium fish. A relatively small member of the carp family, the goldfish is native to East Asia.'
},
{
  id : 13,
  species : 'fish',
  breed : 'Arowana',
  temperament : 'beautiful,',
  height: '16 inches',
  weight: '2.5 kg',
  colors : 'red, white, yellow, black, gold',
  lifeExpectancy : '100 years',
  origin: 'Animalia',
  photo : ['Arowana01.jpg','Arowana02.jpg','Arowana03.jpg'],
  description : 'Arowanas are freshwater bony fish of the family Osteoglossidae, also known as bony tongues. In this family of fish, the head is bony and the elongated body is covered by large, heavy scales, with a mosaic pattern of canals'
},
{
  id : 14,
  species : 'fish',
  breed : 'Angelfish',
  temperament : 'beautiful,',
  height: '5 inches',
  weight: '150 g',
  colors : 'red, white, yellow, black, gold, silver',
  lifeExpectancy : '5-6 years',
  origin: 'Animalia',
  photo : ['AngelFish01.jpg','AngelFish02.jpg','AngelFish03.jpg'],
  description : 'Pterophyllum is a small genus of freshwater fish from the family Cichlidae known to most aquarists as angelfish. All Pterophyllum species originate from the Amazon Basin, Orinoco Basin and various rivers in the Guiana Shield in tropical South America.'
},
{
  id : 15,
  species : 'fish',
  breed : 'Gourami',
  temperament : 'beautiful,aggressive',
  height: '15 inches',
  weight: '750 g',
  colors : 'red, white, yellow, black, gold, silver, blue, orange',
  lifeExpectancy : '3 – 5 years',
  origin: 'Animalia',
  photo : ['Gourami01.jpg','Gourami02.jpg','Gourami03.jpg'],
  description : 'Gouramis, or gouramies, are a group of freshwater anabantiform fishes that comprise the family Osphronemidae. The fish are native to Asia—from Pakistan and India to the Southeast Asia and northeasterly towards Korea'

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
              $('#imagepets').append(
              '<p class="text-dark">  <span class="h5" > Temperament: </span> ' + pets[i].temperament +'</p>'+
              '<p class="text-dark">  <span class="h5" > Height: </span> ' + pets[i].height +'</p>'+
              '<p class="text-dark">  <span class="h5" >  weight: </span> ' + pets[i]. weight +'</p>'+
              '<p class="text-dark">  <span class="h5" > Colors: </span> ' + pets[i].colors +'</p>'+
              '<p class="text-dark">  <span class="h5" > LifeExpectancy: </span> ' + pets[i].lifeExpectancy +'</p>'+
              '<p class="text-dark">  <span class="h5" > Origin: </span> ' + pets[i].origin +'</p>'+
              '<p class="text-dark font-italic">'+ pets[i].description +'</p>');
  
              petsCarousel(i);
  
          } //end of if statement
  
  
        }//end of for statement
        console.log(species);
      
  
  
  
  
  
      }); // end of moreDetails click event
  
    } //cardModal
  
  
  
  // ==========================================================
  // Carousel
  // ==========================================================
  
    function petsCarousel(j){
      
      $('#imagepets').append(
        '  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">' +
        '  <ol class="carousel-indicators">' +
        '    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>' +
        '    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>' +
        '    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>' +
        '  </ol>' +
        '  <div class="carousel-inner">' +
        '    <div class="carousel-item active">' +
        '      <img class="d-block w-100" src="images/' + pets[j].photo[0] + '" alt="First slide">' +
        '    </div>' +
        '    <div class="carousel-item">' +
        '      <img class="d-block w-100" src="images/' + pets[j].photo[1] + '"alt="Second slide">' +
        '    </div>' +
        '    <div class="carousel-item">' +
        '      <img class="d-block w-100" src="images/' + pets[j].photo[2] + '" alt="Third slide">' +
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
         '<img src="images/' + pets[j].photo[0] +'" class="card-img-top" alt="' + pets[j].breed + '">'+
         '<div class="card-body">'+
           '<h3 class="card-title"> '+ pets[j].breed + ' </h3>'+
           
           '<p class="card-text">  <span class="h5" > colors: </span>' + pets[j].colors +' <br> <span class="h5" > Temperament: </span> '+ pets[j].temperament +' </p>'+
           '<button id="' + pets[j].id + '" type="button" class="btn btnColor text-light moreDetails" data-toggle="modal" data-target="#exampleModal">More about'+ " " + pets[j].breed + '</button>' +
      '</div>'+
        '</div>'

       );// append ends here
  
  
    }; //displayCards
  

    


});