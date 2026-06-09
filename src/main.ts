import '../src/assets/css/index.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<header>
  <nav>
  <ul>
    <li><a href="/ Accueil">Accueil</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
  </nav>
</header>
`