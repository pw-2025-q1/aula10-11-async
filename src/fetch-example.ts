function promiseExamples() {
    // retrieve an html page asynchronously
    fetch('https://www.ufabc.edu.br/')
        .then(response => response.text())
        .then(html => console.log(html.substring(0, 1000)))
        .catch(error => console.error(error));

    // retrieve a json file asynchronously
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.error(error));
}

function asyncAwaitExamples() {
    async function fetchHtml() {
        const response = await fetch('https://www.ufabc.edu.br/');
        const html = await response.text();
        console.log(html.substring(0, 1000));
    }

    async function fetchJson() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const json = await response.json();
        console.log(json);
    }

    fetchHtml();
    fetchJson();
}

// promiseExamples();
asyncAwaitExamples();

