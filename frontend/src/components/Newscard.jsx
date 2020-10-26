import React, { useEffect, useState } from 'react';
import api from '../services/api';

const [news, setNews] = useState([])

useEffect(() => {
  api.get('api/news/published').then(response => {
    // const news = response.data
    setNews(response.data)
    // console.log(response.data)
  })
}, [])

const Newscard = (props) => (
  
  <div className="App-body">
  {news.map(item => {
    console.log(props)
    return (
      <div className="card">
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
);

export default Newscard