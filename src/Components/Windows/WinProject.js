import React from 'react'
import { Window } from './Window'
import styles from './WinProject.module.scss'
import icon from '../../Assets/desktop/folder.png'
import { Button } from '../Common/Button'
import home from '../../Assets/home.svg'
import { Program } from './Program/Program'
import pizzascript from '../../Assets/project/pizza.png'
import loginNode from '../../Assets/project/login-node.png'
import spotify from '../../Assets/project/spotify.png'
import blog from '../../Assets/project/notepad.png'
import py from '../../Assets/tech/python.png'
import js from '../../Assets/tech/js.png'
import fox from '../../Assets/project/fox.png'
import fbit from '../../Assets/project/fbit.svg'
import fbtech from '../../Assets/project/fbtech.svg'
import show from '../../Assets/project/show-do-milhao.png'
import ymoney from '../../Assets/project/ymoney.png'
import { TechHover } from './TechHover/TechHover'

export const WinProject = () => {
  const [link, setLink] = React.useState()
  const [tech, setTech] = React.useState()
  function select({currentTarget}){
    currentTarget.dataset.active = 'true'
    if (currentTarget.innerHTML === 'GitHub') {
      setLink(link.github)
    } else {
      setLink(link.path)
    }
    currentTarget.innerHTML += '/'
    document.querySelector('strong').style.display = 'none'
    document.querySelector('i[data-active=false]').style.display = 'none'
    console.log(link);
    
  }
  return (
    
      <Window icon={icon} path='Meus Projetos' target='my-projects' title='Projetos que desenvolvi' minH='350px' minW='490px'>
        <nav className={styles.path}>
          <Button icon={home} onClick={() => setLink(null)}/>
          <div className={styles.search}>
            <span>C:/
              {link && typeof link === 'object' ? <>
                <i onClick={select} data-active='false'>GitHub</i> 
                <strong> ou </strong>
                <i onClick={select} data-active='false'>Site</i>
              </>: link}
            </span>
          </div>
          <Button text='Go' onClick={() => link && typeof link !== 'object' ? window.open(link, '_blank') : null}/>
        </nav>
        <div className={styles.window}>
          <Program tech='React Node js css rest' setTech={setTech} icon={pizzascript} text='Projeto Pizzaria com ReactJs.url' path='https://pizzascript.netlify.app/' github='https://github.com/Yancap/pizzaria-react' setLink={setLink}/>
          <Program tech='React Node sql js css rest' setTech={setTech} icon={loginNode} text='Sistema de Login com Node e React' path='https://login-node-react.netlify.app/' github='https://github.com/Yancap/projeto-login-node-react' setLink={setLink}/>
          <Program tech='ts tailwindcss nextjs' setTech={setTech} icon={spotify} text='Clone do Spotify' path='https://e-spotify.netlify.app/' github='https://github.com/Yancap/projeto-spotify-com-tailwind' setLink={setLink}/>
          <Program tech='React Node css_js sql js ts css rest' setTech={setTech} icon={blog} text='Pagina de Artigos'  path='https://artech-blog.netlify.app/' github='https://github.com/Yancap/projeto-blog-client' setLink={setLink}/>
          <Program tech='React Node css_js sql js ts css rest' setTech={setTech} icon={ymoney} text='Controle de Finanças Pessoais' path='https://ymoney.netlify.app/' github='https://github.com/Yancap/projeto-controle-de-financas-server' setLink={setLink}/>
          <Program tech='python' setTech={setTech} icon={py} text='Sistema de Login com Python.py' github='https://github.com/Yancap/sistema-de-login-python' setLink={setLink}/>
          <Program tech='python mysql' setTech={setTech} icon={py} text='Simulador de Banco em Python.py' github='https://github.com/Yancap/Simulador-de-Banco-em-Python' setLink={setLink}/>
          <Program tech='css js' setTech={setTech} icon={fox} text='Site Animais Fantasticos.html' github='https://github.com/Yancap/site-animais-projeto-origamid' setLink={setLink}/>
          <Program tech='css js' setTech={setTech} icon={js} text='Jogo da Memoria' github='https://github.com/Yancap/Jogo-da-Memoria-com-JavaScript/tree/main' path='https://yan-resume.netlify.app/projects/jogo%20da%20memoria%20js/gamem' setLink={setLink}/>
          <Program tech='css js' setTech={setTech} icon={js} text='Jogo da Velha' github='https://github.com/Yancap/Jogo-da-Velha-com-Javascript/tree/main' path='https://yan-resume.netlify.app/projects/jogo%20da%20velha%20com%20js/gamev' setLink={setLink}/>
          <Program tech='bootstrap css js ' setTech={setTech} icon={fbit} text='Site da Startup FB1T.html' path='https://yan-resume.netlify.app/projects/startup_fbit/' setLink={setLink}/>
          <Program tech='css js' setTech={setTech} icon={fbtech} text='Site da Incubadora Fbtech.html' path='https://yan-resume.netlify.app/projects/site%20da%20incubadora%20(rev%2029)/index.html' setLink={setLink}/>
          <Program tech='python js css' setTech={setTech} icon={py} text='Search Engine com Python.py' github='https://github.com/Yancap/Trabalho-Final-do-Modulo-de-Analise-de-Dados/tree/main' setLink={setLink}/>
          <Program tech='c' setTech={setTech} icon={show} text='Jogo Show do Milhão em C.ccp' github='https://github.com/Yancap/show-do-milhao-C' setLink={setLink}/>  
        </div>
        <TechHover tech={tech}/>
      </Window>
    
  )
}
