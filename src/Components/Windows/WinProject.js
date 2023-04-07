import React from 'react'
import { Window } from './Window'
import styles from './WinProject.module.scss'
import icon from '../../Assets/desktop/folder.png'
import { Button } from '../Common/Button'
import home from '../../Assets/home.svg'
import { Program } from './Program/Program'
import pizzascript from '../../Assets/project/pizza.png'
import loginNode from '../../Assets/project/login-node.png'
import blog from '../../Assets/project/notepad.png'
import py from '../../Assets/tech/python.svg'
import fox from '../../Assets/project/fox.png'
import fbit from '../../Assets/project/fbit.svg'
import fbtech from '../../Assets/project/fbtech.svg'

export const WinProject = () => {
  const [link, setLink] = React.useState()
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
          <Program icon={pizzascript} text='Projeto Pizzaria com ReactJs.url' path='https://pizzascript.netlify.app/' github='https://github.com/Yancap/pizzaria-react' setLink={setLink}/>
          <Program icon={loginNode} text='Sistema de Login com Node e React' path='https://login-node-react.netlify.app/' github='https://github.com/Yancap/projeto-login-node-react' setLink={setLink}/>
          <Program icon={blog} text='Pagina de Artigos' github='Em Produção!!!' setLink={setLink}/>
          <Program icon={py} text='Sistema de Login com Python.py' github='https://github.com/Yancap/sistema-de-login-python' setLink={setLink}/>
          <Program icon={py} text='Simulador de Banco em Python.py' github='https://github.com/Yancap/Simulador-de-Banco-em-Python' setLink={setLink}/>
          <Program icon={fox} text='Site Animais Fantasticos.html' github='https://github.com/Yancap/site-animais-projeto-origamid' setLink={setLink}/>
          <Program icon={fbit} text='Site da Incubadora FB1T.html' path='https://yan-resume.netlify.app/projects/startup_fbit/' setLink={setLink}/>
          <Program icon={fbtech} text='Site da Incubadora FB1T.html' path='https://yan-resume.netlify.app/projects/site%20da%20incubadora%20(rev%2029)/index.html' setLink={setLink}/>

            
        </div>
      </Window>
    
  )
}
