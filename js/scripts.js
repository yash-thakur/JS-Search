var hotels = [
  {
    name: "The Grand",
    stars: 5,
    distance: 0.5,
    wifi: true,
    pool: false,
    ppn: 190,
    img: "./imgs/hotel1.jpg"
  },
  {
    name: "The Plaza",
    stars: 4,
    distance: 1,
    wifi: true,
    pool: true,
    ppn: 70,
    img: "./imgs/hotel2.jpg"
  },
  {
    name: "The Lord Milburn",
    stars: 4,
    distance: 5,
    wifi: true,
    pool: false,
    ppn: 65,
    img: "./imgs/hotel3.jpg"
  },
  {
    name: "The Grange",
    stars: 3,
    distance: 1,
    wifi: true,
    pool: false,
    ppn: 57,
    img: "./imgs/hotel4.jpg"
  },
  {
    name: "The Windmill",
    stars: 1,
    distance: 10,
    wifi: false,
    pool: false,
    ppn: 5,
    img: "./imgs/hotel5.jpg"
  },
  {
    name: "The Excel",
    stars: 3,
    distance: 0.5,
    wifi: true,
    pool: false,
    ppn: 56,
    img: "./imgs/hotel6.jpg"
  },
  {
    name: "The Ritz",
    stars: 2,
    distance: 5,
    wifi: true,
    pool: false,
    ppn: 14,
    img: "./imgs/hotel7.jpg"
  },
  {
    name: "The Victoria",
    stars: 4,
    distance: 0.5,
    wifi: true,
    pool: false,
    ppn: 80,
    img: "./imgs/hotel8.jpg"
  },
  {
    name: "Phoenix House",
    stars: 4,
    distance: 1,
    wifi: true,
    pool: false,
    ppn: 72,
    img: "./imgs/hotel9.jpg"
  },
  {
    name: "The Lodge",
    stars: 2,
    distance: 1,
    wifi: false,
    pool: false,
    ppn: 25,
    img: "./imgs/hotel10.jpg"
  },
  {
    name: "The Sanctum",
    stars: 5,
    distance: 2,
    wifi: true,
    pool: true,
    ppn: 180,
    img: "./imgs/hotel11.jpg"
  },
  {
    name: "The Oberoi",
    stars: 5,
    distance: 6,
    wifi: false,
    pool: true,
    ppn: 140,
    img: "./imgs/hotel12.jpg"
  },
  {
    name: "The Taj",
    stars: 3,
    distance: 4,
    wifi: false,
    pool: true,
    ppn: 95,
    img: "./imgs/hotel13.jpg"
  }
];

window.onload = initialLoad();

//Initial load
function initialLoad() {
  var sortedHotels = hotels.sort(ascending);
  loadHotels(sortedHotels);
}


//Function to load Hotels data to div elements.
function loadHotels(hotelsArr) {
  for(var hotel = 0; hotel< hotelsArr.length; hotel++) {
    var hotelsObject = document.createElement('div');
    hotelsObject.className = 'col-md-4 px-0';
    hotelsObject.innerHTML = '<div class="card m-2">\n' +
      '  <img class="card-img-top" src=' + hotelsArr[hotel].img + ' alt="image" style="width:100%">\n' +
      '  <div class="card-body p-2" style="min-height: 160px">\n' +
      '    <h4 class="card-title">'+hotelsArr[hotel].name+'</h4>\n' +
      '    <p>'+ (Rating(hotelsArr[hotel].stars)) +'</p>\n' +
      '<span>' + (hotelsArr[hotel].wifi || hotelsArr[hotel].pool ? 'Facilities: ': '&nbsp;') + '</span>'+
      (hotelsArr[hotel].wifi ? '     <span>' +
        '       <i class="fas fa-wifi"></i>\n' +
        '     </span>\n' : '')+
      (hotelsArr[hotel].pool ? '     <span>' +
        '       <img src="./imgs/swim.png" width="24px"/>\n' +
        '     </span>\n' : '') +
      '    <p>Distance from city centre: '+ hotelsArr[hotel].distance + (hotelsArr[hotel].distance <= 1 ? ' mile' : ' miles')  +'</p>' +
      '    <p class="card-text mb-3">Price per Night: '+ hotelsArr[hotel].ppn +'</p>\n' +
      '  </div>\n' +
      '</div>';
    document.getElementById('results').appendChild(hotelsObject);
  }
}

var distanceArr = [];
var ppnArr = [];
for(var i = 0 ; i < hotels.length; i++) {
  distanceArr.push(hotels[i].distance);
  ppnArr.push(hotels[i].ppn);
}


document.getElementById("distance").setAttribute("min", Math.min.apply(null, distanceArr));
document.getElementById("distance").setAttribute("max", Math.max.apply(null, distanceArr));
var rating = getRatingValue();
var order = document.getElementById("sort").value;
var distance = document.getElementById("distance").value;
document.getElementById("distance_value").innerHTML = distance + (distance <=1 ? ' mile' : ' miles');
var wifi = document.getElementById('wifi').checked;
var pool = document.getElementById('pool').checked;
var minPrice = document.getElementById("min_price");
minPrice.value = Math.min.apply(null, ppnArr);
minPrice.setAttribute("min", Math.min.apply(null, ppnArr));
minPrice.setAttribute("max", Math.max.apply(null, ppnArr));
var maxPrice = document.getElementById("max_price");
maxPrice.value = Math.max.apply(null, ppnArr);
maxPrice.setAttribute("min", Math.min.apply(null, ppnArr));
maxPrice.setAttribute("max", Math.max.apply(null, ppnArr));


//Function handle the changes in filters for search.
function onChange() {
  changeSlider();
  changeFacilities();
  rating = getRatingValue();
  order = document.getElementById("sort").value;
  distance = document.getElementById("distance").value;
  minPrice = document.getElementById("min_price").value;
  maxPrice = document.getElementById("max_price").value;
  document.getElementById("distance_value").innerHTML = distance + (distance <=1 ? ' mile' : ' miles');
  wifi = document.getElementById('wifi').checked;
  pool = document.getElementById('pool').checked;
  filterResults();
}

//Handle Facilities options change
function changeFacilities() {
  var ignore = document.getElementById('ignore_facilities');
  var wifiCheckbox = document.getElementById('wifi');
  var poolCheckbox = document.getElementById('pool');
  if(ignore.checked) {
    wifiCheckbox.checked = false;
    poolCheckbox.checked = false;
  }
  if(wifiCheckbox.checked || poolCheckbox.checked) {
    ignore.checked = false;
  }
}

//Update min max and validation on Price Range
function changeSlider() {
  var minInput = document.getElementById("min_price");
  var maxInput = document.getElementById("max_price");
  if(minInput.value < Number(minInput.getAttribute("min"))) {
    console.log(minInput.value, minInput.getAttribute("min"));
    minInput.value = minInput.getAttribute("min");
  }
  else if(minInput.value >= Number(maxInput.getAttribute("max"))) {
    minInput.value = Number(maxInput.getAttribute("max")) - 1;
  }
  else {
    maxInput.setAttribute("min", minInput.value);
  }
  if(maxInput.value > Number(maxInput.getAttribute("max"))) {
    console.log(maxInput.value, maxInput.getAttribute("max"));
    maxInput.value = maxInput.getAttribute("max");
  }
  else if(maxInput.value <= Number(maxInput.getAttribute("min"))) {
    maxInput.value = Number(maxInput.getAttribute("min")) + 1;
  }
  else {
    maxInput.setAttribute("min", minInput.value);
  }
}

//Function to get the Rating Value from the Star rating in the filters.
function getRatingValue() {
  if(document.getElementById("rating-5").checked) {
    return document.getElementById("rating-5").value;
  }
  else if(document.getElementById("rating-4").checked) {
    return document.getElementById("rating-4").value;
  }
  else if(document.getElementById("rating-3").checked) {
    return document.getElementById("rating-3").value;
  }
  else if(document.getElementById("rating-2").checked) {
    return document.getElementById("rating-2").value;
  }
  else if(document.getElementById("rating-1").checked) {
    return document.getElementById("rating-1").value;
  }
}

//Function to filter the results as per the search conditions.
function filterResults() {
  var filteredHotels = hotels.filter(function(hotel) {
    if(
      hotel.stars >= rating &&
      hotel.distance <= distance &&
      (hotel.ppn >= minPrice && hotel.ppn <=maxPrice)
    ) {
      return hotel
    }
  });
  
  //If facilities filter present filter results accordingly.
  if(!document.getElementById('ignore_facilities').checked) {
    if(wifi || pool) {
      filteredHotels = filteredHotels.filter((function (hotel) {
        if(wifi && pool) {
          if((wifi && hotel.wifi) && (pool && hotel.pool) ) return hotel;
        }
        else{
          if(wifi && hotel.wifi) return hotel;
          if(pool && hotel.pool) return hotel;
        }
      }));
    }
  }
  
  //Remove previous results
  var node = document.getElementById('results');
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
  }
  if(order === "desc") {
    filteredHotels.sort(descending);
  }
  else {
    filteredHotels.sort(ascending);
  }
  if(filteredHotels.length === 0) {
    var noResults = document.createElement('div');
    noResults.className = 'text-center col-12 pt-5';
    noResults.innerHTML = '<p>No results match your search criteria.</p>\n';
    document.getElementById('results').appendChild(noResults);
  }
  else {
    loadHotels(filteredHotels);
  }
}

//Function to sort the Array in ascending order based on the Price per Night.
function ascending(a, b) {
  const hotelA = a.ppn;
  const hotelB = b.ppn;
  
  var comparison = 0;
  if (hotelA > hotelB) {
    comparison = 1;
  } else if (hotelA < hotelB) {
    comparison = -1;
  }
  return comparison;
}

//Function to sort the Array in descending order based on the Price per Night.
function descending(a, b) {
  // Use toUpperCase() to ignore character casing
  const hotelA = a.ppn;
  const hotelB = b.ppn;
  
  var comparison = 0;
  if (hotelA < hotelB) {
    comparison = 1;
  } else if (hotelA > hotelB) {
    comparison = -1;
  }
  return comparison;
}

//Function to push the Stars as per the rating value and push it to the Card info that is pushed in the results using loadHotels function.
function Rating(rating) {
  const floorRating = Math.floor(rating);
  const floorRatingTags = [];
  const emptyStarTags = [];
  for (var i = 0; i < floorRating; i++) {
    floorRatingTags.push('<i class="fas fa-star"></i>');
  }
  var emptyStars = 5 - floorRating;
  if (rating > floorRating) {
    emptyStars -= 1;
  }
  for (var i = 0; i < emptyStars; i++) {
    emptyStarTags.push('<i class="far fa-star"></i>');
  }
  return ('<span>'+ floorRatingTags.join('') + ((rating > floorRating) ? '<i className="fa fa-star-half"></i>' : '') + emptyStarTags.join('') + '</span>');
}