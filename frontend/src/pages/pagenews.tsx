import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import api from '../services/api';


function Pagenews() {
  const [news, setNews] = useState<any[]>([])

  console.log(news)

  useEffect(() => {
    api.get('api/news/published').then(response => {
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
                  {/* <h1>id {item.id}</h1> */}
                  <h1>{item.title.toUpperCase()}</h1>
                  <h2>{item.content}</h2>
                  {/* <div id="linha"></div> */}
                </div>
              </div>
            )
          }).reverse()}
        </div>
        <footer className="footer"><span>Desenvolvido por <a target="_blank" rel="noopener noreferrer" href="http://phdeveloper.com.br">phdeveloper.com.br</a></span></footer>
      </header>
    </div>
  );
}

export default Pagenews