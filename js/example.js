// ADD NEW ITEM TO END OF LIST
var list = document.getElementsByTagName('ul')[0];
var itemLast = document.createElement('li');
var textLast = document.createTextNode('cream');
itemLast.appendChild(textLast);
list.appendChild(itemLast);

// ADD NEW ITEM START OF LIST
var list = document.getElementsByTagName('ul')[0];
var itemStart = document.createElement('li');
var textStart = document.createTextNode('kale');
itemStart.appendChild(textStart);
list.insertBefore(itemStart, list.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var itemList = document.querySelectorAll('li');
var i;
for (i = 0; i < itemList.length; i++) {
    itemList[i].className = 'cool';
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var itemList = document.querySelectorAll('li');
var header = document.querySelector('h2');
var newHeader = header.firstChild.nodeValue + '<span>' + itemList.length + '</span>';
header.innerHTML = newHeader;
