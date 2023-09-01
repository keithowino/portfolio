"use strict";

const appName = "keith owino";
const appNameCapitalizeAll = appName.toUpperCase();

const remarkOptions = [
    "Designer and Frontend Developer.", 
    "Connect, inspire, develop.", 
    "Welcome to my humble aboard.", 
    "Do it in kind, shall receive it in kind."
];
const remarkOptionsLastElement = remarkOptions.length - 1;
function documentTitleStatus(argument1, argument2, argument3){
    let remarkOptionRange = Math.floor(Math.random() * (argument3 - argument2 + 1)) + argument2;
    let remark = remarkOptions[remarkOptionRange];
    document.title = argument1 + " | " + remark;
};
documentTitleStatus(appNameCapitalizeAll, 0, remarkOptionsLastElement);

const titleElement = document.querySelector("#js-s-t-s");
const siteTileRefElement = document.querySelector(".js-site-title-ref");

titleElement.innerHTML = appName;
siteTileRefElement.innerHTML = appName;