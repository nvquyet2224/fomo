var timerOtp;
var otpCountValue = 30;
function countOtp() {

    timerOtp = setInterval(function () {
        var minSecond = otpCountValue < 10 ? '0' + otpCountValue : otpCountValue;
        document.querySelector('.count-value').innerHTML = minSecond;
        otpCountValue--;
        if (otpCountValue < 0) {
            clearInterval(timerOtp);
        }
    }, 1000);

}


// Share
var thumbs = [
    {
        title: '<span class="share-cap">không hề</span> <span class="share-highlight">FOMO</span>',
        imgUrl: 'images/share/thumbnail-yellow1.jpg'
    }, {
        title: '<span class="share-cap">không hề</span> <span class="share-highlight">FOMO</span>',
        imgUrl: 'images/share/thumbnail-yellow2.jpg'
    }, {
        title: '<span class="share-cap">không hề</span> <span class="share-highlight">FOMO</span>',
        imgUrl: 'images/share/thumbnail-yellow3.jpg'
    }, {
        title: '<span class="share-cap">không hề</span> <span class="share-highlight">FOMO</span>',
        imgUrl: 'images/share/thumbnail-yellow4.jpg'
    }, {
        title: '<span class="share-cap">không hề</span> <span class="share-highlight">FOMO</span>',
        imgUrl: 'images/share/thumbnail-yellow5.jpg'
    }, {
        title: '<span class="share-highlight">FOMO</span> <span class="share-cap">sương sương</span>',
        imgUrl: 'images/share/thumbnail-orange1.jpg'
    }, {
        title: '<span class="share-highlight">FOMO</span> <span class="share-cap">sương sương</span>',
        imgUrl: 'images/share/thumbnail-orange2.jpg'
    }, {
        title: '<span class="share-highlight">FOMO</span> <span class="share-cap">sương sương</span>',
        imgUrl: 'images/share/thumbnail-orange3.jpg'
    }, {
        title: '<span class="share-highlight">FOMO</span> <span class="share-cap">sương sương</span>',
        imgUrl: 'images/share/thumbnail-orange4.jpg'
    }, {
        title: '<span class="share-highlight">FOMO</span> <span class="share-cap">sương sương</span>',
        imgUrl: 'images/share/thumbnail-orange5.jpg'
    }, {
        title: '<span class="share-highlight">FOMO</span> <span class="share-cap">cấp số nhân</span>',
        imgUrl: 'images/share/thumbnail-dark-orange1.jpg'
    }, {
        title: '<span class="share-highlight">FOMO</span> <span class="share-cap">cấp số nhân</span>',
        imgUrl: 'images/share/thumbnail-dark-orange2.jpg'
    }, {
        title: '<span class="share-highlight">FOMO</span> <span class="share-cap">cấp số nhân</span>',
        imgUrl: 'images/share/thumbnail-dark-orange3.jpg'
    }, {
        title: '<span class="share-highlight">FOMO</span> <span class="share-cap">cấp số nhân</span>',
        imgUrl: 'images/share/thumbnail-dark-orange4.jpg'
    }, {
        title: '<span class="share-highlight">FOMO</span> <span class="share-cap">cấp số nhân</span>',
        imgUrl: 'images/share/thumbnail-dark-orange5.jpg'
    }, {
        title: '<span class="share-highlight">FOMO CẤP BÁO</span>',
        imgUrl: 'images/share/thumbnail-pink1.jpg'
    }, {
        title: '<span class="share-highlight">FOMO CẤP BÁO</span>',
        imgUrl: 'images/share/thumbnail-pink2.jpg'
    }, {
        title: '<span class="share-highlight">FOMO CẤP BÁO</span>',
        imgUrl: 'images/share/thumbnail-pink3.jpg'
    }, {
        title: '<span class="share-highlight">FOMO CẤP BÁO</span>',
        imgUrl: 'images/share/thumbnail-pink4.jpg'
    }, {
        title: '<span class="share-highlight">FOMO CẤP BÁO</span>',
        imgUrl: 'images/share/thumbnail-pink5.jpg'
    }
];


var isShare = true;
function renderShare(userName, userAvatar, thumbIndex) {
    $('#shareThumb').attr('src', thumbs[thumbIndex].imgUrl);
    $('#shareTitle').html(`<span class="share-username">${userName}</span> ${thumbs[thumbIndex].title}`);
    $('#shareUsername').html(userName);
    //$('#shareAvatar').attr('src', userAvatar);
    $('.share__box .user-pic').css({'background-image': `url(${userAvatar})` });

    isShare = false;
    setTimeout(function () {
        createCanvas();
    }, 300);

}


function createCanvas() {

    $('canvas').remove();

    html2canvas(document.querySelector('.share__box'), {
        scale: 1
    }).then(function (canvas) {
        document.body.appendChild(canvas);
        setTimeout(function () {
            isShare = true;
            var myCanvas = document.getElementsByTagName("canvas")[0];
            var url = myCanvas.toDataURL("image/jpg");
            console.log(url);
        }, 100);
    });

}

// Game Answer
$(document).on('click', '.answer-item', function () {
    var target = +$(this).parent().attr('data-question') + 1;

    if (target < 4) {
        $('.answer-order').html(target);
        $('.question-item.current, .answer-items.current').addClass('fade-out');
        $('.question-item, .answer-items').removeClass('current');
        $('.answer-number li[data-question = ' + target + ']').addClass('current');

        setTimeout(function () {
            $('.question-item[data-question=' + target + '], .answer-items[data-question=' + target + ']').addClass('current');
        }, 300);

    } else { // Login to play
        openPopup('#resultPink');
        $('.banner-game').addClass('stop_anim');
        //Share FaceBook
        // Create Image to Share
        renderShare('Quyết', 'images/test.jpg', 6);

    }

});

$(document).on('click', '.share_but', function () {
    openPopup('#loginPop');
});


// Roulette Game
var isPlaying = false;
var gifts = [
    {
        id: 1,
        title: 'Giải đặc biệt Chill kit',
        type: 'special',
        img: ''
    }, {
        id: 2,
        title: 'E-Voucher 20k',
        type: 'voucher',
        img: 'images/roulette/voucher-20k.png'
    }, {
        id: 3,
        title: 'E-Voucher 200k',
        type: 'voucher',
        img: 'images/roulette/voucher-200k.png'
    }, {
        id: 4,
        title: 'E-Voucher 20k',
        type: 'voucher',
        img: 'images/roulette/voucher-20k.png'
    },
    {
        id: 5,
        title: 'Chúc may mắn lần sau',
        type: 'normal',
        img: ''
    }, {
        id: 6,
        title: 'E-Voucher 20k',
        type: 'voucher',
        img: 'images/roulette/voucher-20k.png'
    }, {
        id: 7,
        title: 'Chúc may mắn lần sau',
        type: 'normal',
        img: ''
    }, {
        id: 8,
        title: 'E-Voucher 200k',
        type: 'voucher',
        img: 'images/roulette/voucher-200k.png'
    }
];


function renderGift(gift) {
    var html = '';

    if (gift.type === 'voucher') {
        html = `
      <div class="pic welcome__pic">
        <img src="images/roulette/welcome.png" alt="Chúc mừng" />
      </div>
      <div class="popup-title ${gift.type}">BẠN ĐÃ TRÚNG <br>Chill Voucher từ Strongbow</div>
      <div class="pic gift__pic">
        <img src="${gift.img}" alt="${gift.title}" />
      </div>
      <div class="brief brief__gift ${gift.type}">
        <p>Thông tin voucher đã được Strongbow <br>gửi tới số điện thoại của bạn. <br>Hãy kiểm tra tin nhắn ngay nhé!</p>
      </div>
      <div class="game__note">
        <p>Bạn đã hết lượt quay, <br>tham gia lại bằng số điện thoại khác nhé!</p>
      </div>
    `;
    } else if (gift.type === 'special') {
        html = `
      <div class="pic welcome__pic">
        <img src="images/roulette/welcome.png" alt="Chúc mừng" />
      </div>
      <div class="popup-title ${gift.type}">bạn đã trúng giải đặc biệt <br>chill kit hoàn hảo <br>cho mọi phút dừng!</div>
      <div class="brief brief__gift ${gift.type}">
        <p>Thông tin voucher đã được Strongbow <br>gửi tới số điện thoại của bạn. <br>Hãy kiểm tra tin nhắn ngay nhé!</p>
      </div>
      <div class="game__note">
        <p>Bạn đã hết lượt quay, <br>tham gia lại bằng số điện thoại khác nhé!</p>
      </div>
    `;
    } else {
        html = `
      <div class="pic welcome__pic">
        <img src="images/roulette/welcome.png" alt="Chúc mừng" />
      </div>
      <div class="popup-title ${gift.type}">BẠN ĐÃ TRÚNG ĐƯỢC <br>PHÚT DỪNG LẠI ĐỂ NHẬN RA <br>MÌNH CHẲNG CẦN FOMO</div>
      <div class="brief brief__gift ${gift.type}">
        <p>Vẫn còn những phần quà hấp dẫn khác <br>đang chờ đợi. Hãy tự tin thử lại vận may <br>của mình bạn nhé!</p>
      </div>
      <div class="game__note">
        <p>Bạn còn 2 lượt quay, <br>bói lại để tham gia nhé!</p>
      </div>
    `;

    }

    $('.lucy__gift').html(html);

    setTimeout(function () {
        closePopup();
        openPopup('#luckyReSultPop');
        isPlaying = false;
    }, 100);

}


// Init Roulete Game
if ($('.roulette').length) {

    var $roulete = $('.roulette').fortune(gifts);

    // Event Quay
    $('.spinner__arrow').on('click', function () {
        if (!isPlaying) {
            isPlaying = true;

            var numberWin = Math.floor(Math.random() * 8); // Lấy về từ BE

            $roulete.spin(numberWin).done(function (gift) {
                renderGift(gift);
                //isPlaying = false;
            });
        }
    });



}



// News Here
function scrollAction(box) {

    if ($(box).find('.scroll__action').length) {

        $(box).find('.scroll__action').niceScroll({
            autohidemode: false,
            horizrailenabled: false,
            touchbehavior: true,
            cursorborder: "0 solid rgba(255,255,255,0)",
            cursorwidth: "4px",
            cursorcolor: "#FFFFFF",
            background: "#C4C4C4",
        });
        $(box).find('.scroll__action').getNiceScroll().resize();

    }

}



// Close Popup
$(document).on('click', '.popup-close', function () {
    closePopup();
});


// Policy Ok
$(document).on('click', '#policyOk', function () {
    closePopup();
    openPopup('#fomoPop');
});


// Duoi 18 && Policy Cancel
$(document).on('click', '#policyCancel', function () {
    closePopup();
    openPopup('#againPop');
    scrollAction('#againPop');
});

// Duoi 18 Ok
$(document).on('click', '#againOk, #againCancel', function () {
    closePopup();
    openPopup('#policyPop');
    scrollAction('#policyPop');
});

// Fomo Ok
$(document).on('click', '#fomoOk', function () {
    $('.fomo').removeClass('active');
    $('.create_avatar').addClass('active');
});

// PlayNow
$(document).on('click', '#playNow', function () {
    window.location.href = 'fomo.html';
});


// Login Phone
$(document).on('click', '#btnSendPhone', function () {
    $('.phone').removeClass('active');
    $('.otp').addClass('active');
});

// Back to Phone Phone
$(document).on('click', '#btnBackToPhone', function () {
    $('.otp').removeClass('active');
    $('.phone').addClass('active');

});

// Login Phone
$(document).on('click', '#btnConfirmOTP', function () {
    window.location.href = 'lucky.html';
});

function optimizeFullScreen() {
    var winH = window.innerHeight;
    var winW = window.innerWidth;
    var innerH = winW > winH ? winW : winH;

    $('.banner-box').css({ 'height': innerH });
}

(function () {
    optimizeFullScreen();
    setTimeout(function () {
        scrollAction('#policyPop');
        optimizeFullScreen();

    }, 500);

})();

