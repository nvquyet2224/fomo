var ua = navigator.userAgent;
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    ua
);

function GetIEVersion() {
    var sAgent = window.navigator.userAgent;
    var Idx = sAgent.indexOf('MSIE');
    if (Idx > 0)
        return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf('.', Idx)));
    else if (!!navigator.userAgent.match(/Trident\/7\./))
        return 11;
    else
        return 0;
}

var mise = GetIEVersion();
if (mise > 0) {
    document.body.classList.add('isIE');
}


function change_alias(alias) {
    var str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
    str = str.replace(/ + /g, " ");
    str = str.trim();
    return str;
}


// Open popup
function openPopup(popup) {
    if (document.querySelector(popup)) {
        document.querySelector('.popup__open') && document.querySelector('.popup__open').classList.remove('popup__open');
        document.body.classList.add('no-scroll');
        document.querySelector(popup).classList.add('popup__open');
    }
}

// Close Popup
function closePopup() {
    document.querySelector('.popup__open') && document.querySelector('.popup__open').classList.add('popup__close');
    document.querySelector('.popup__open') && document.querySelector('.popup__open').classList.remove('popup__open');
    document.body.classList.remove('no-scroll');
    setTimeout(function () {
        document.querySelector('.popup__close') && document.querySelector('.popup__close').classList.remove('popup__close');
    }, 300);
}

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight
    );
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}
