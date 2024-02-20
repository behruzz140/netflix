// SELECT A VARIABLE UTILS STARTED
function $(selector){
    return document.querySelector(selector);
}

function $$(selector){
    return document.querySelectorAll(selector);
}


function createElement(tagname,classlist,content){
    const div = document.createElement(tagname);
    div.classList.add(classlist);
    div.innerHTML = content;

    return div;
}


