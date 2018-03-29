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
  }
];

window.onload = loadHotels(hotels);

function loadHotels(hotelsArr) {
  for(var hotel = 0; hotel< hotelsArr.length; hotel++) {
    var hotelsObject = document.createElement('div');
    hotelsObject.className = 'col-md-4';
    hotelsObject.innerHTML = '<div class="card m-2">\n' +
      '  <img class="card-img-top" src=' + hotelsArr[hotel].img + ' alt="image" style="width:100%">\n' +
      '  <div class="card-body p-2" style="min-height: 160px">\n' +
      '    <h4 class="card-title">'+hotelsArr[hotel].name+'</h4>\n' +
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