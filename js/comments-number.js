(function(){
    var span = document.getElementById('comments-number');
    var comments = document.getElementsByClassName('vcard');
    span.innerHTML = comments.length;
})();
