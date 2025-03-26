const codeEditor = document.getElementById("code-editor");
const outputDiv = document.getElementById("output");
const executeButton = document.getElementById("execute-btn");

executeButton.addEventListener("click", executeCode);

function executeCode() {
  const code = codeEditor.value;

  try {
    const result = eval(code);
    result !== undefined
      ? (outputDiv.innerHTML = result)
      : (outputDiv.innerHTML = "Código ejecutado correctamente!");
  } catch (error) {
    outputDiv.innerHTML = error.message;
  }
}
