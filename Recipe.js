root = document.getElementById('root');
    const navbar = document.createElement('div');
    navbar.classList.add('navbar');
    root.appendChild(navbar);


    const navbarContent = document.createElement('div');
    navbarContent.classList.add('navbar-content');
    navbar.appendChild(navbarContent);


    const logo = document.createElement('img');
    logo.setAttribute('src', 'https://recipeshub.simuleduco.com/assets/images/logo.png');
    logo.setAttribute('alt', 'RecipeHub Logo');
    navbarContent.appendChild(logo);


    const heading = document.createElement('h1');
    heading.textContent = 'RecipeHub';
    navbarContent.appendChild(heading);


    const searchBox = document.createElement('input');
    searchBox.setAttribute('type', 'text');
    searchBox.setAttribute('placeholder', 'Search recipes...');
    navbarContent.appendChild(searchBox);

    const signIn = document.createElement('button');
    signIn.textContent="Sign-in";
    navbarContent.appendChild(signIn);

    console.log(root);
