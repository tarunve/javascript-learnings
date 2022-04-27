/**
 *  DOM (Document Object Model)
 *  -   It connects web pages to scripts or programming language by representing the
 *      structure of a document - such as HTML representing the web page in memory.
 *  -   DOM represents a document with a logical tree. Each branch of the tree ends
 *      in a node and each node ends with Objects.
 *  -   DOM methods allow programmatic access to the tree. With them you can change
 *      the document's structure, style or content. Nodes can also have event handlers
 *      attached to them, once an event is triggered, the event handlers get executed.
 *  -   Event of webpage , elements of webpage etc all of this is controlled by DOM.
 * 
 */
function showMessage(message){
    document.getElementById('some-label').textContent = message;
}

// change color
const header = document.getElementById('some-label');
header.style.color = 'green';
header.style.fontWeight = '800';

// event listener 
const button = document.getElementsById('some-button');
button.addEventListener('click', function(){
    console.log('click');
});

// example : on click of button we want to show/hide one panel
const button1 = document.getElementsById('some-button');
button1.addEventListener('click', function(){
    const review = document.getElementsById('review');
    if(review.classList.contains('d-none')){
        review.classList.remove('d-none');
        review.textContent = 'CLOSE-REVIEW';
    } else {
        review.classList.add('d-none');
        review.textContent = 'SEE-REVIEW';
    }
});
