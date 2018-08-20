// DOM variables
let body = document.body;
let para = document.getElementsByTagName('p');
let div = document.getElementsByTagName('div');
let aT = document.getElementsByTagName('a');
let sp = document.getElementsByTagName('span');
let tabRow = document.getElementsByTagName('tr');
let ul = document.getElementsByTagName('ul')
let li = document.getElementsByTagName('li');

body.style.background = '#333';
body.style.color = '#f4f4f4';

for (pa of para){
    pa.style.background = '#333';
    pa.style.color = '#f4f4f4';
}

for (di of div){
    di.style.background = '#333';
    di.style.color = '#f4f4f4';
}

// This also blacks out a tags that use images in their href attribute
for (a of aT){
    a.style.background = '#333';
    a.style.color = '#f4f4f4';
}

for (tab of tabRow){
    tab.style.background = '#333';
    tab.style.color = '#f4f4f4';
}

for (s of sp){
    s.style.background = '#333';
    s.style.color = '#f4f4f4';
}

for (u of ul){
    u.style.background = '#333';
    u.style.color = '#f4f4f4';
}

for (l of li){
    l.style.background = '#333';
    l.style.color = '#f4f4f4';
}
