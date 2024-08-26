function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificação de credenciais
    if (username === "fcapjr" && password === "12345") {
        window.location.href = "empresa.html";  // Redireciona para a página principal
    } else {
        alert("Usuário ou senha incorretos!");
    }
}
