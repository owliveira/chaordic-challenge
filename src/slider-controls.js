(function() {
    'use strict';

    var leftArrow = document.getElementById('left-arrow');
    var rightArrow = document.getElementById('right-arrow');
    var scrollableContainer = document.getElementsByClassName('slider-content')[0];

    leftArrow.onclick = function onClickLeftArrow() {
        scroll(scrollableContainer, -570);
    };

    rightArrow.onclick = function onClickRightArrow() {
        scroll(scrollableContainer, 570);
    };

    function scroll(target, amount) {
        var cycleDuration = 30;
        var cycles = 5;
        var completedCycles = 0;

        var interval = setInterval(function() {
            if (amount > 0) {
                target.scrollLeft += amount / cycles;
            } else {
                target.scrollLeft -= Math.abs(amount / cycles);
            }

            completedCycles++;

            if(completedCycles === cycles) {
                clearInterval(interval);
            }
        }, cycleDuration);
    }
})();