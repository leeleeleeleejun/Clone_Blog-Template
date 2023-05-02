const mainArticleItem = document.getElementsByClassName('main-article-item');
const randomImg = document.querySelectorAll('.random-img');
const randomContent = document.querySelectorAll('.random-content');
const articleTitle = document.querySelectorAll('.article-title');

function setRandomNumfunc() {
  const RandomNumArray = [];
  for (let i = 0; i < randomImg.length; i++) {
    randomNum = Math.floor(Math.random() * 8);
    if (RandomNumArray.indexOf(randomNum) === -1) {
      RandomNumArray.push(randomNum);
    } else {
      i--;
    }
  }
  return RandomNumArray;
}

window.addEventListener('load', function () {
  const setRandomNum = setRandomNumfunc();
  for (let i = 0; i < randomImg.length; i++) {
    randomImg[i].setAttribute('src', `./img/7${setRandomNum[i] + 1} (1).jpg`);
    randomContent[i].appendChild(
      articleTitle[setRandomNum[i]].firstChild.cloneNode()
    );
  }
});

const topButton = document.getElementById('top');
topButton.addEventListener('click', function () {
  document.body.scrollIntoView({ behavior: 'smooth' });
});
