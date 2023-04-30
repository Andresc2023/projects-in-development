let audios = [
    {caminho:'E:/CURSOS FLORIPA DIGITAL/Projetos-Javascript-main/Projetos-Javascript-main/PROJETO SÉRIES 8O ANDRÉ/TEMAS/Knight Rider - 1982 - 1st version.mp3', legenda:'SUPER MÁQUINA'},
    {caminho:'E:/CURSOS FLORIPA DIGITAL/Projetos-Javascript-main/Projetos-Javascript-main/PROJETO SÉRIES 8O ANDRÉ/TEMAS/Greatest American Hero.mp3', legenda:'SUPER HERÓI AMERICANO'},
    {caminho:'E:/CURSOS FLORIPA DIGITAL/Projetos-Javascript-main/Projetos-Javascript-main/PROJETO SÉRIES 8O ANDRÉ/TEMAS/Rambo.mp3', legenda:'RAMBO'},
    {caminho:'E:/CURSOS FLORIPA DIGITAL/Projetos-Javascript-main/Projetos-Javascript-main/PROJETO SÉRIES 8O ANDRÉ/TEMAS/Alf - Instrumental Remix.mp3', legenda:'ALF O ETEIMOSO'},
    {caminho:'E:/CURSOS FLORIPA DIGITAL/Projetos-Javascript-main/Projetos-Javascript-main/PROJETO SÉRIES 8O ANDRÉ/TEMAS/The Dukes Of Hazzard.mp3', legenda:'THE DUKES'},
    {caminho:'E:/CURSOS FLORIPA DIGITAL/Projetos-Javascript-main/Projetos-Javascript-main/PROJETO SÉRIES 8O ANDRÉ/TEMAS/The Real Ghostbusters.mp3', legenda:'CAÇA FANTASMAS'},
    {caminho:'E:/CURSOS FLORIPA DIGITAL/Projetos-Javascript-main/Projetos-Javascript-main/PROJETO SÉRIES 8O ANDRÉ/TEMAS/Chips.mp3', legenda:'CHIPS'},
    {caminho:'E:/CURSOS FLORIPA DIGITAL/Projetos-Javascript-main/Projetos-Javascript-main/PROJETO SÉRIES 8O ANDRÉ/TEMAS/Jaspion BGM Collection - 15 Chummei Watanabe - Action_www.tokufriends.com.mp3', legenda:'JASPION'},
    {caminho:'E:/CURSOS FLORIPA DIGITAL/Projetos-Javascript-main/Projetos-Javascript-main/PROJETO SÉRIES 8O ANDRÉ/TEMAS/Its Punky Brewster.mp3', legenda:'PUNKY'},
    {caminho:'E:/CURSOS FLORIPA DIGITAL/Projetos-Javascript-main/Projetos-Javascript-main/PROJETO SÉRIES 8O ANDRÉ/TEMAS/Bionic Woman.mp3', legenda:'MULHER BIONICA'},
    {caminho:'E:/CURSOS FLORIPA DIGITAL/Projetos-Javascript-main/Projetos-Javascript-main/PROJETO SÉRIES 8O ANDRÉ/TEMAS/Wonder Woman - 1975 - Season 2.mp3', legenda:'MULHER MARAVILHA'},
    {caminho:'E:/CURSOS FLORIPA DIGITAL/Projetos-Javascript-main/Projetos-Javascript-main/PROJETO SÉRIES 8O ANDRÉ/TEMAS/chapolin-abertura-trompete-curta.mp3', legenda:'CHAPOLIN'},
];

let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p');

for (let i=0; i < 12; i++){
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
}

let audioTag = document.querySelector('audio');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data-item')];
        audioTag.setAttribute('src', som.caminho);
        
        audioTag.addEventListener('loadeddata', () => {
            audioTag.play();
            
                document.querySelector('.botao-pause').style.display = 'none';
                document.querySelector('.botao-play').style.display = 'block';
        });
    });
});

