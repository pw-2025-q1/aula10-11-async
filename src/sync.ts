const newItem = (text: string) => {
    const item = document.createElement('li');
    item.textContent = text;

    return item;
}

const list = document.createElement('ul');
list.appendChild(newItem('Item 1'));
console.log('Item 1 added');
list.appendChild(newItem('Item 2'));
console.log('Item 2 added');
list.appendChild(newItem('Item 3'));
console.log('Item 3 added');
document.querySelector('#app')?.appendChild(list);

console.log('Reached end of program');