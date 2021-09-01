const findBook = () => {
    const searchBook = document.getElementById('search-food');
    const searchText = searchBook.value;
    // Error handle
    if (searchText === "") {
        document.getElementById('error').innerText = "Search field cannot be empty.";
        return;
    }
    // Clear
    document.getElementById('error').innerText = "";
    searchBook.value = '';
    // fetch url
    const url = ` https://openlibrary.org/search.json?q=${searchText}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => searchResult(data.docs));
}

const searchResult = books => {
    // const totalResult = document.getElementById('search-results').innerText = `About ${data.numFound} results `;
    // console.log(totalResult);
    const searchResult = document.getElementById('search-result');
    searchResult.innerText = ''
    books.forEach(book => {
        // console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
           <div class="card">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top vh-100">
                <div class="card-body">
                     <h4 class="card-title">${book.title}</h4>
                     <p> Author: <small> ${book.author_name}</small> </p>
                     <p> Publisher: <small> ${book.publisher[0]}</small> </p>
                     <p>First Published Year: <small> ${book.first_publish_year}</small> </p>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    })

}