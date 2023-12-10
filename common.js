// common.js
function loadNote(notePage) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `notes/${notePage}`);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const noteContent = xhr.responseText;
            document.getElementById('note-content').innerHTML = noteContent;
        }
    };
    xhr.send();
}
