import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import api from '../services/api';


function Editnews() {
  const history = useHistory()
  const [news, setNews] = useState<any[]>([])

  console.log(news)

  useEffect(() => {
    api.get('api/news').then(response => {
      // const news = response.data
      setNews(response.data)
      // console.log(response.data)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Titulo">CRUD News</h1>
        <Sidebar/>
        <div className="App-body">
          {news.map(item => {
            // console.log('item')
            return (
              <div className="card" key={item.id}>
                <div className="App-news" key={item.id}>
                  {/* <span>Criado em: {item.created_at}</span> */}
                  {/* <h1>id {item.id}</h1> */}
                  <span>Data de Publicação: </span>
                  {<span>
                    {new Intl.DateTimeFormat('pt-BR', {
                      month: 'numeric',
                      day: 'numeric',
                      year: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric',
                      second: 'numeric',
                    }).format(new Date(item.created_at))}
                  </span>}
                  <h1>{item.title.toUpperCase()}</h1>
                  <h2>{item.content}</h2>
                  <button onClick={(event: any) => history.push(`/update/${item.id}`)} >Editar</button>
                  <button id='button_del' onClick={(event: any) => history.push(`/delete/${item.id}`)} >Apagar</button>
                  {/* <div id="linha"></div> */}
                </div>
              </div>
            )
          }).reverse()}
        <footer className="footer"><span>Desenvolvido por <a target="_blank" rel="noopener noreferrer" href="http://phdeveloper.com.br">phdeveloper.com.br</a></span></footer>
        </div>
      </header>
    </div>
  );
}

export default Editnews