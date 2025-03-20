const newItem = (text: string) => {
    const item = document.createElement('li');
    item.textContent = text;

    return item;
}

const list = document.createElement('ul');

document.querySelector('#app')?.appendChild(list);
setTimeout(() => {
    list.appendChild(newItem('Item 1'));
    console.log('Item 1 added');
}, 2000);
setTimeout(() => {
    list.appendChild(newItem('Item 2'));
    console.log('Item 2 added');
}
, 3000);
setTimeout(() => {
    list.appendChild(newItem('Item 3'));
    console.log('Item 3 added');
}
, 1000);
console.log('Reached end of program');

