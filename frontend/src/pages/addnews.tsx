import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';
import Sidebar from '../components/Sidebar'


function Pageadd() {
  const history = useHistory()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [published, setPublished] = useState(false)

  async function handleSubmit(event: FormEvent){
    event.preventDefault()
    console.log({
      title,
      content,
      published
    })

    const data = JSON.stringify({
      title: title,
      content: content,
      published: published
    });
    const fm = new FormData()
    fm.append('data', data)
    
    await api.post('/api/news', data)
    alert('Cadastro realizado com sucesso!')

    history.push('/')
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Titulo">CRUD News</h1>
        <Sidebar/>
        <div className="App-body">
          <div className="Form">
            <form onSubmit={handleSubmit}>
              <div>
                TÍTULO: <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={event => setTitle(event.target.value)}
                />
              </div>
              <div>
                CONTEÚDO: <textarea
                  id="content"
                  name="content"
                  value={content}
                  onChange={event => setContent(event.target.value)}
                />
              </div>
              <label>
                PUBLICADO:
                    <input
                  id="published"
                  type="checkbox"
                  name="published"
                  checked={published}
                  onChange={(event: any) => setPublished(event.target.checked)} />
              </label>
              <input type="submit" value="ENVIAR"></input>
            </form>
          </div>
          <footer className="footer"><span>Desenvolvido por <a target="_blank" rel="noopener noreferrer" href="http://phdeveloper.com.br">phdeveloper.com.br</a></span></footer>
        </div>
      </header>
    </div>
  );
}

export default Pageadd