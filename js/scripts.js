document.addEventListener("DOMContentLoaded", () => {
  fetchContent()
    .then((data) => {
      updateNavigation(data.navigation);
      updateHeader(data.header);
      updateMainContent(data.mainContent);
      updateContactForm(data.contactForm);
    })
    .catch((error) => console.error("Erro ao carregar o JSON:", error));

  document
    .getElementById("contactForm")
    .addEventListener("submit", handleFormSubmit);
});

const fetchContent = async () => {
  const response = await fetch("js/content.json");
  if (!response.ok) {
    throw new Error("Erro ao carregar o JSON");
  }
  return await response.json();
};

const updateNavigation = (navigation) => {
    const navbarItems = navigation
    const navbar = document.getElementById("navbar")
    // no trecho abaixo, para cada par de chave e valor eu retorno a chave e valor contidas na navbarItems
    // após isso é criada a <li> e o <a>, os quais são encapsulados dentro da navbar
    for (const [key, value] of Object.entries(navbarItems)) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = value.url;
        a.key = key;
        a.textContent = value.text;
        a.target = "_blank"
        li.appendChild(a);
        navbar.appendChild(li);
    }
};

const updateHeader = (header) => {
  const headerLogo = document.getElementById("headerLogo");
  if (headerLogo) {
    headerLogo.src = header.logo;
    headerLogo.alt = header.alt;
  }
};

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

const handleFormSubmit = (event) => {
  console.log('Aqui eu envio para um banco de dados "POST"', event)
  
  alert("Formulário enviado com sucesso!");
};
