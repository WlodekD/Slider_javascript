document.addEventListener('DOMContentLoaded', function () {

    var btnNext = document.querySelector('#nextPicture');
    var btnPrev = document.querySelector('#prevPicture');
    var lis = document.querySelectorAll('ul li');

    var imgIdx = 0;

    btnNext.addEventListener('click', function (event) {


            lis[imgIdx].classList.remove('visible');
            lis[imgIdx += 1].classList.add('visible');
            var arr = [];


    });

    btnPrev.addEventListener('click', function (event) {


    });
});