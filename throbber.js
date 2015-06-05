function hasClass(ele, cls) {
    return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

function addClass(ele, cls) {
    if (!this.hasClass(ele,cls))
        ele.className += " "+ cls;
}

function removeClass(ele, cls) {
    if (hasClass(ele,cls)) 
    {
        var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
        
        ele.className = ele.className.replace(reg, ' ');
    }
}

var throbber = document.getElementById('marker-1');
var tip = document.getElementById('tip-1');
var close = document.getElementById('close-tip-1');

throbber.addEventListener('click', function(){
  removeClass(tip, 'flipOutY');
  addClass(tip, 'flipInY');
});

close.addEventListener('click', function(){
  removeClass(tip, 'flipInY');
  addClass(tip, 'flipOutY');
});