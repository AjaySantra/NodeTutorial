var express = require('express');
var http= require('http');
var your_drink;
var reverse = function(s){
    return s.split("").reverse().join("");
}
var bar = {
    str1:"ers",
    str2:reverse("rap"),
    str3:"amet",
    request: function(preferene){
        return ("word: "+ this.str2+this.str3+this.str1);
    }
};
console.log(bar.request(your_drink));