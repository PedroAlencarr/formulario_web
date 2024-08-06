document.addEventListener("DOMContentLoaded", async () => {
  await fetchContent()
    .then((data) => {
      //chama as funções passando os dados o meu arquivo JSON
      updateNavigation(data.navigation);
      updateHeader(data.header);
      updateMainContent(data.mainContent);
      updateContactForm(data.contactForm);
      updateUserList(data.users);
    })
    .catch((error) => console.error("Erro ao carregar o JSON:", error));

  await fetchApi();
  document
    .getElementById("contactForm")
    .addEventListener("submit", handleFormSubmit);
});

//pega o conteúdo do meu arquivo JSON
const fetchContent = async () => {
  const response = await fetch("/static/content.json");
  if (!response.ok) {
    throw new Error("Erro ao carregar o JSON");
  }
  return await response.json();
};

//aqui é feita a requisição dos dados que o flask pegou da API e montada a lista de usuários
const fetchApi = async () => {
  fetch("/api/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((users) => {
      console.log(users, "resposta");
      const userList = document.getElementById("user-list");
      users.forEach((user) => {
        const li = document.createElement("li");
        //aqui, diferente de outras imagens, eu criei as tags html dentro do código javascript
        li.innerHTML = `
              <img src="${user.picture.thumbnail}" alt="Profile Picture" />
              <p>Name: ${user.name.first} ${user.name.last}</p>
              <p>Email: ${user.email}</p>
          `;
        userList.appendChild(li);
      });
    })
    .catch((error) => console.error("Erro ao carregar os usuários:", error));
};

// atualiza as labels e links da navbar
const updateNavigation = (navigation) => {
  const navbarItems = navigation;
  const navbar = document.getElementById("navbar");
  // no trecho abaixo, para cada par de chave e valor eu retorno a chave e valor contidas na navbarItems
  // após isso é criada a <li> e o <a>, os quais são encapsulados dentro da navbar
  for (const [key, value] of Object.entries(navbarItems)) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = value.url;
    a.key = key;
    a.textContent = value.text;
    li.appendChild(a);
    navbar.appendChild(li);
  }
};

//atualiza a imagem do header
const updateHeader = (header) => {
  const headerLogo = document.getElementById("headerLogo");
  if (headerLogo) {
    headerLogo.src = header.logo;
    headerLogo.alt = header.alt;
  }
};

//atualiza o titulo, texto e imagem do conteudo principal
const updateMainContent = (mainContent) => {
  const mainTitle = document.getElementById("mainTitle");
  const mainParagraph = document.getElementById("mainParagraph");
  const mainImage = document.getElementById("mainImage");
  if (mainTitle && mainParagraph && mainImage) {
    mainTitle.textContent = mainContent.title;
    mainParagraph.textContent = mainContent.paragraph;
    mainImage.src = mainContent.mainImage;
    mainImage.alt = mainContent.alt;
  }
};

//atualiza as labels do formulário
const updateContactForm = (contactForm) => {
  const contactTitle = document.getElementById("contactTitle");
  const labelName = document.getElementById("labelName");
  const labelEmail = document.getElementById("labelEmail");
  const labelMessage = document.getElementById("labelMessage");
  const submitButton = document.getElementById("submitButton");
  if (contactTitle && labelName && labelEmail && labelMessage && submitButton) {
    contactTitle.textContent = contactForm.title;
    labelName.textContent = contactForm.name;
    labelEmail.textContent = contactForm.email;
    labelMessage.textContent = contactForm.message;
    submitButton.textContent = contactForm.submit;
  }
};

//atualiza o título da lista de usuários
const updateUserList = (usersList) => {
  const users = document.getElementById("user-list-title");
  if (users) {
    users.textContent = usersList;
  }
};

//ação para quando o botão for pressionado
const handleFormSubmit = (event) => {
  event.preventDefault();
  //aqui vai uma lógica para envio dos dados para um banco de dados
  console.log("Aqui eu envio para um banco de dados");
  
  alert("Formulário enviado com sucesso!");
  open('/');
};
