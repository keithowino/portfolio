/*==== TITLE ====*/

let site_title = "Keith Owino";
let remark_options = [
    "Designer and Frontend Developer.", 
    "Connect, inspire, develop.", 
    "Welcome to my humble aboard.", 
    "Do it with kind, shall receive it in kind."
];
let remark_options_last_element = remark_options.length - 1;
let original_document_title = document.title;
function document_title_status(argument1, argument2, argument3){
    let remark_option_range = Math.floor(Math.random() * (argument3 - argument2 + 1)) + argument2;
    let remark = remark_options[remark_option_range];
    document.title = original_document_title + argument1 + " | " + remark;
};
document_title_status(site_title, 0, remark_options_last_element);

/*==== H1 HERO TEXT ====*/

function h1_hero_text_action(){
    const h1_hero_text_options = [
        "english", 
        "portuguese", 
        "german", 
        "spanish", 
        "arabic", 
        "chinese", 
        "hindi"
    ]
    let max_int = h1_hero_text_options.length - 1;
    let random_language = Math.floor(Math.random() * (max_int + 1));
    let language_option = h1_hero_text_options[random_language];
    if(language_option === "english"){
        document.getElementById("h1-hero-text").innerHTML = "easy me";
    }else if(language_option === "portuguese"){
        document.getElementById("h1-hero-text").innerHTML = "calma eu";
        document.getElementById("language").innerHTML = "Portuguese";
    }else if(language_option === "german"){
        document.getElementById("h1-hero-text").innerHTML = "einfach ich";
        document.getElementById("language").innerHTML = "German";
    }else if(language_option === "spanish"){
        document.getElementById("h1-hero-text").innerHTML = "Tranquilo yo";
        document.getElementById("language").innerHTML = "Spanish";
    }else if(language_option === "arabic"){
        document.getElementById("h1-hero-text").innerHTML = "سهل لي";
        document.getElementById("language").innerHTML = "Arabic";
    }else if(language_option === "chinese"){
        document.getElementById("h1-hero-text").innerHTML = "放輕鬆";
        document.getElementById("language").innerHTML = "Chinese";
    }else{
        document.getElementById("h1-hero-text").innerHTML = "आसान मुझे";
        document.getElementById("language").innerHTML = "Hindi";
    }
};
h1_hero_text_action();

