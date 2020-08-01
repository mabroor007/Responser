function Phone(width,height,Name){
    this.width = width;
    this.height = height;
    this.name = Name;
    this.getWidth = function (){
        return this.width;
    }
    this.getHeight = function () {
        return this.height;
    }
    this.getName = function(){
        return this.name;
    }
    this.getGfxForm = function(){
        return `${this.name} : ${this.width} * ${this.height}`;
    }
}
function Desktop(width, height){
    this.width = width;
    this.height = height;
    this.getWidth = function () {
        return this.width;
    }
    this.getHeight = function () {
        return this.height;
    }
    this.getGfxForm = function () {
        return `${this.width} * ${this.height}`;
    }
}
function Tablet(width, height, Name) {
    this.width = width;
    this.height = height;
    this.name = Name;
    this.getWidth = function () {
        return this.width;
    }
    this.getHeight = function () {
        return this.height;
    }
    this.getName = function () {
        return this.name;
    }
    this.getGfxForm = function () {
        return `${this.name} : ${this.width} * ${this.height}`;
    }
}
function Tv(width, height) {
    this.width = width;
    this.height = height;
    this.getWidth = function () {
        return this.width;
    }
    this.getHeight = function () {
        return this.height;
    }
    this.getGfxForm = function () {
        return `${this.width} * ${this.height}`;
    }
}
let Phones = [];
let Desktops = [];
let Tablets = [];
let Tvs = [];
let activeRes = null;
let extractor = {
    exPhone:function(str){
        str.trim();
        let x = str.split("|");
        let resolution = x[1].trim();
        let y = resolution.split(' x ')
        Phones.push(new Phone(y[0],y[1],x[0].trim()));
    },
    exDesktop:function(str){
        let x = str.split(" x ");
        let width = x[0].trim();
        let height = x[1].trim();
        Desktops.push(new Desktop(width,height));
    },
    exTablet: function(str) {
        str.trim();
        let x = str.split("|");
        
        let resolution = x[1].trim();
        let y = resolution.split(' x ')
        Tablets.push(new Tablet(y[0], y[1], x[0].trim()));
    },
    exTv:function (str) {
        let x = str.split(" x ");
        let width = x[0].trim();
        let height = x[1].trim();
        Tvs.push(new Tv(width, height));
    }
}
function data(){
    let phonedata = document.getElementsByClassName("ph");
    for(phone of phonedata){
        extractor.exPhone(phone.innerHTML);
    }
    let deskdata = document.getElementsByClassName("ddata");
    for (desk of deskdata) {
        extractor.exDesktop(desk.innerHTML);
    }
    let tabletdata = document.getElementsByClassName("tdata");
    for (tab of tabletdata) {
        extractor.exTablet(tab.innerHTML);
    }
    let tvdata = document.getElementsByClassName("tvdata");
    for (tv of tvdata) {
        extractor.exTv(tv.innerHTML);
    }
}
function setResolutions(P,Card){
    $(P).append('<div onclick="set(this)" class="card">' +Card+'</div>');
}
function setData(){
    for (let res of Phones) {
        let card = res.getGfxForm()
        setResolutions('.phoneb', card);
    }
    for(let res of Desktops){
        let card = res.getGfxForm()
        setResolutions('.deskb',card);
    }
    for (let res of Tablets) {
        let card = res.getGfxForm()
        setResolutions('.tabb', card);
    }
    for (let res of Tvs) {
        let card = res.getGfxForm()
        setResolutions('.tvb', card);
    }
}
function setview(width,height,el){
    $('#frame').width(width).height(height);
    if(activeRes!=null){
        $(activeRes).removeClass('active');
    }
    $(el).addClass('active');
    activeRes = el;
}
function setSource(input){
    let src = $(input).val();
    $('#frame').attr('src',src);
}
function set(el){
    if (el.parentElement.classList.contains('phoneb')){
        let text = el.innerHTML;
        let x = text.split(":");
        x = x[1];
        x = x.split(' * ')
        let width = x[0].trim()+'px';
        let height = x[1].trim()+'px';
        setview(width,height,el);
    }
    if (el.parentElement.classList.contains('deskb')) {
        let text = el.innerHTML;
        let x = text.split(" * ");
        let width = x[0].trim() + 'px';
        let height = x[1].trim() + 'px';
        setview(width, height,el);
    }
    if (el.parentElement.classList.contains('tabb')) {
        let text = el.innerHTML;
        let x = text.split(":");
        x = x[1];
        x = x.split(' * ')
        let width = x[0].trim() + 'px';
        let height = x[1].trim() + 'px';
        setview(width, height,el);
    }
    if (el.parentElement.classList.contains('tvb')) {
        let text = el.innerHTML;
        let x = text.split(" * ");
        let width = x[0].trim() + 'px';
        let height = x[1].trim() + 'px';
        setview(width, height,el);
    } 
}
let started = false;
function start(){
    $('.landingpage').fadeOut();
    $('body').css('overflow', 'visible');
    started = true;
}
document.addEventListener('keypress',function(event){
    if(event.which == 96 && started){
        $('.settings').fadeToggle();
    }
})


// initializing Resolutions
{
    data();
    setData();
}



// Landing Page Animations
let appname = ['O', 'r', 'a', 'n', 'g', 'e', 'V', 'i', 'e', 'w'];
let creatorname = ['B', 'y', ' ', 'M', 'a', 'b', 'r', 'o', 'o', 'r', ' ', 'A', 'h', 'm', 'a', 'd'];
let Oap = '';
let i = 0;
let j = 0;
let Ocn = '';
let inter = setInterval(animate, 150);
function animate(){
    if (i >= appname.length-1 && j >= creatorname.length-1){
        clearInterval(inter);
    }
    if(i<=appname.length-1){
        Oap = Oap + appname[i];
        i++;
    }
    if(j<=creatorname.length-1){
        Ocn = Ocn + creatorname[j];
        j++;
    }
    let output = `${Oap}<span>${Ocn}</span>`;
    $('.name').html(output);
}








// Browser Zoom level
$(window).resize(function () {
    var browserZoomLevel = Math.round(window.devicePixelRatio * 100);
    $('#bzoom').html(`Browser zoom: ${browserZoomLevel}%`);
});

// custom integration
let custom_width = null;
let custom_height = null;
function setwidth(){
    custom_width = $('#width').val();
}
function setheight(){
    custom_height = $('#height').val();
}
function runcust(){
    if(custom_width != null && custom_height != null){
        $('#frame').width(custom_width).height(custom_height);
        $('#width').val(null);
        $('#height').val(null);
        custom_height = null;
        custom_height = null;
    }
}