import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar'
import Newscard from '../pages/pagenews'
import { useParams, useHistory } from 'react-router-dom';
import api from '../services/api';


function Deletenews() {
  const history = useHistory()

  // const [title, setTitle] = useState('')
  // const [content, setContent] = useState('')
  // const [published, setPublished] = useState(false)

  const { id } = useParams()
  
  useEffect(() => {
    async function getNews() {
      const response = await api.delete(`/api/news/${id}`)
      // console.log(response.data)
      // console.log(response.data.title)
      console.log(response)
      
      console.log(response.data.id)
      // setTitle(response.data.title)
      // setContent(response.data.content)
      // setPublished(response.data.published)
      history.push('/')
      window.location.reload(true);
    }
    getNews()
  },[])

  // function handleSubmit(event: FormEvent) {
  //   event.preventDefault()
    // console.log({
    //   title,
    //   content,
    //   published,
    // })

    // const data = JSON.stringify({
    //   title: title,
    //   content: content,
    //   published: published
    // });
    // const fm = new FormData()
    // fm.append('data', data)

  //   api.delete(`/api/delete/${id}`)
  //   console.log(id)
  //   alert('Cadastro Deletado com sucesso!')

  //   history.push('/')
  //   window.location.reload(true);
  // }


  return (
    <div className="App">
    <header className="App-header">
      <h1 className="Titulo">CRUD News</h1>
      <Sidebar/>
      <Newscard/>
      <footer className="footer"><span>Desenvolvido por <a target="_blank" rel="noopener noreferrer" href="http://phdeveloper.com.br">phdeveloper.com.br</a></span></footer>
    </header>
  </div>
  );
}

export default Deletenews