//for markdown editor
const editor = CodeMirror.fromTextArea(document.getElementById("markdown-editor"), {
    mode: "markdown", //setting the mode to markdown
    lineNumbers: true, 
    lineWrapping: true, 
    theme: "solarized dark", 
    placeholder: "Markdown code goes here..."
});