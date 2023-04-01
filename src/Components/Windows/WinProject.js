import React from 'react'
import { Window } from './Window'
import styles from './WinProject.module.scss'
import icon from '../../Assets/desktop/folder.png'
import { Button } from '../Common/Button'
import home from '../../Assets/home.svg'
import { Project } from './Projects/Project'
import pizzascript from '../../Assets/project/pizza.png'
import loginNode from '../../Assets/project/login-node.png'
import blog from '../../Assets/project/notepad.png'
import py from '../../Assets/tech/python.svg'

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
    
      <Window icon={icon} path='Meus Projetos' target='my-projects' title='Projetos que desenvolvi'>
        <nav className={styles.path}>
          <Button icon={home} onClick={() => setLink(null)}/>
          <div className={styles.search}>
            <span>/
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
          <Project icon={pizzascript} text='Projeto Pizzaria com ReactJs.url' path='https://pizzascript.netlify.app/' github='https://github.com/Yancap/pizzaria-react' setLink={setLink}/>
          <Project icon={loginNode} text='Sistema de Login com Node e React' path='https://login-node-react.netlify.app/' github='https://github.com/Yancap/projeto-login-node-react' setLink={setLink}/>
          <Project icon={blog} text='Pagina de Artigos' github='Em Produção!!!' setLink={setLink}/>
          <Project icon={py} text='Sistema de Login com Python' github='https://github.com/Yancap/sistema-de-login-python' setLink={setLink}/>
          <Project icon={py} text='Simulador de Banco em Python' github='https://github.com/Yancap/Simulador-de-Banco-em-Python' setLink={setLink}/>
          <Project icon={pizzascript} text='Projeto Pizzaria com ReactJs.url' path='https://pizzascript.netlify.app/' github='https://github.com/Yancap/pizzaria-react' setLink={setLink}/>
          <Project icon={pizzascript} text='Projeto Pizzaria com ReactJs.url' path='https://pizzascript.netlify.app/' github='https://github.com/Yancap/pizzaria-react' setLink={setLink}/>
        </div>
      </Window>
    
  )
}
