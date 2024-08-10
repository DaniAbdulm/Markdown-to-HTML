
document.addEventListener('DOMContentLoaded', () => {
    const markdownInput = document.getElementById('markdown-editor'); 
    const htmlOutput = document.getElementById('html-container'); 
    
    //converting markdown to HTML and updating the preview pane 
    function updateHTML(markdownText) {
        const htmlContent = marked(markdownText); 
        htmlOutput.innerHTML = htmlContent; 
    }

    //live updating event listener 
    markdownInput.addEventListener('input', () => {
        const markdownText = markdownInput.value; 
        updateHTML(markdownText); 
        autosave(markdownText); 
    }); 

    //autosave the content to local storage
    function autosave(content) {
        localStorage.setItem('markdownContent', content); 
    }

    //initial conversion and rendering
    updateHTML(markdownInput.value); 
}); 