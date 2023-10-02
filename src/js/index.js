// Exemplo de dados de projetos (substitua com seus próprios dados)
const projectsData = [
    {
        title: "Projeto Android",
        description: "Meu primeiro exercício de HTML e CSS!",
        image: "src/imagem/android2.jpeg",
        link: "projetoandroid/android.html"
    },
    {
        title: "Projeto Cordel Moderno",
        description: "Fiz um site com efeito Parallax",
        image: "src/imagem/cordel2.jpeg",
        link: "cordel/index.html"
    },
    {
        title: "Projeto Login",
        description: "Fiz uma tela de login simples, somente front-end",
        image: "src/imagem/login.jpeg",
        link: "projeto-login/index.html"
    },
    // Adicione mais projetos aqui conforme necessário
];

// Função para adicionar projetos à lista
function addProjectsToPage() {
    const projectList = document.getElementById("project-list");

    projectsData.forEach(project => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}">Saiba mais</a>
        `;

        projectList.appendChild(listItem);
    });
}

// Chame a função para adicionar projetos à página quando o documento estiver pronto
document.addEventListener("DOMContentLoaded", addProjectsToPage);
