var catArray = [{name: 'Boba', food: 'Sock fluff', image: 'http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg'}, {name: 'Barnaby', food: 'Tuna', image: 'https://pbs.twimg.com/profile_images/571260078292865024/0EvP5vXn.jpeg'}, {name: 'Max', food: 'Whiskas Temptations', image: 'http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg'}, {name: 'Cuddles', food: 'Mice', image: 'http://www.cutestpaw.com/wp-content/uploads/2011/11/OIo.jpg'}]

var createCats = function() {
  var cats = document.createElement('section');
  cats.id = 'cats';
  return cats;
};

var createCatUlArticle = function() {
  var catUlArticle = document.createElement('ul');
  catUlArticle.classList.add('cat');
  return catUlArticle;
};

var createCatLi = function(name) {
  var catLi = document.createElement('li');
  catLi.innerText = "Name: " + name;
  return catLi;
};
var createCatLi2 = function(favouriteFood) {
  var catLi2 = document.createElement('li');
  catLi2.innerText = "Food: " + favouriteFood;
  return catLi2;
};

var createCatImage = function(image) {
  var catImage = document.createElement('img');
  catImage.src = image;
  catImage.width = "500";
  return catImage;
};

var appendElements = function(cats, catUlArticle, catLi, catLi2, catImage) {
  catUlArticle.appendChild(catLi);
  catUlArticle.appendChild(catLi2);
  catUlArticle.appendChild(catImage);
  cats.appendChild(catUlArticle);
  var catSection = document.querySelector('body');
  catSection.appendChild(cats);

};

var addCat = function(cats, name, favouriteFood, image) {
  var catUlArticle = createCatUlArticle();
  var catLi = createCatLi(name);
  var catLi2 = createCatLi2(favouriteFood);
  var catImage = createCatImage(image);
  // var catsId = document.getElementById('cats');
  appendElements(cats, catUlArticle, catLi, catLi2, catImage)
};

var addCatArray = function(cats) {
  for(var cat of catArray) {
    addCat(cats, cat.name, cat.food, cat.image);
  };
};

var app = function() {
//   addCat('cuddles', 'mice', 'http://www.cutestpaw.com/wp-content/uploads/2011/11/OIo.jpg')
// };
var cats = createCats();
addCatArray(cats);
};


window.onload = app;





