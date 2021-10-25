const linksSocialMedia = {
    github: "luiscetta",
    'linkedin.com': "in/luiscetta/",
    'facebook.com': "luiscetta",
    'luiscetta.github.io': "Portfolio",
    'twitter.com': "_cettou",
};

function changeSocialMediaLinks() {
    // acessando a dom pelo id de outra forma
    // userName.textContent = "Luis Filipe Cetta"

    // fazendo o for pegando a tag filha do elemento pai socialLinks.
    for (let li of socialLinks.children) {
        // pegando o atributo class da tag li.
        const social = li.getAttribute('class');

        li.children[0].href = `https://${social}/${linksSocialMedia[social]}`;
    };
}

changeSocialMediaLinks();

function getGithubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    // pegar na API 
    fetch(url)

        // transformando em JSON
        .then(res => res.json())

        // o data armazena o res já em JSON dentro dela.
        .then(data => { 
            userName.textContent = data.name;
            // userBio.textContent = data.bio;
            userProfile.href = data.html_url;
            userImage.src = data.avatar_url;
            userLogin.textContent = data.login;
        });
}

getGithubProfileInfos();

function typeWriter(element) {
    const textArray = element.innerHTML.split("");
    element.innerHTML = '';
    textArray.forEach((letter, i) => {
       setTimeout(() => element.innerHTML += letter, 75 * i);
    });
};

const title = document.querySelector('p');
typeWriter(title);