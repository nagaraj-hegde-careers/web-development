function main(book){
    console.log(book.title + " by " + book.author + " was published in " + book.publishedYear + ".");
}

let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: "1925",
}
main(book);