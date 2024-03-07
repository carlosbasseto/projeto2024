document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastroForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obter os valores do formulário
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Criar um objeto de usuário
        const user = {
            username: username,
            email: email,
            password: password
        };

        // Verificar se já há usuários cadastrados
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Adicionar o novo usuário à lista de usuários
        users.push(user);

        // Armazenar a lista atualizada de usuários no localStorage
        localStorage.setItem('users', JSON.stringify(users));

        // Limpar o formulário após o envio
        form.reset();

        // Exibir uma mensagem de confirmação para o usuário
        alert('Usuário cadastrado com sucesso!');

        // Redirecionar para a tela de login após um pequeno atraso
        setTimeout(function() {
            window.location.href = 'index.html'; // Redirecionar para a tela de login
        }, 1000); // Atraso de 1 segundo (1000 milissegundos)
    });
});