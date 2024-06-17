import './global.css';

import styles from './App.module.css';
import {Header} from './components/Header';
import {Sidebar} from './components/Sidebar';
import {Post, PostType} from './components/Post';

const posts: PostType[] = [
  {
    id: '1',
    author: {
      avatarUrl: 'https://github.com/castrosuellenx.png',
      name: 'Suéllen Castro',
      role: 'Full-Stack Developer',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa'},
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portfólio',
      },
      {
        type: 'link',
        content: 'https://github.com/castrosuellenx',
      },
    ],
    publishedAt: new Date('2024-06-14 20:00:00'),
  },
  {
    id: '2',
    author: {
      avatarUrl: 'https://github.com/castrosuellenx.png',
      name: 'Suéllen Castro',
      role: 'Full-Stack Developer',
    },
    content: [
      {type: 'paragraph', content: 'E ai pessoal'},
      {
        type: 'paragraph',
        content:
          'Estudando os fundamentos do React.js novamente, sempre buscando ter o conteúdo mais atual! #NeverStopLearning',
      },
      {type: 'link', content: 'https://app.rocketseat.com.br/'},
    ],
    publishedAt: new Date('2024-06-10 20:00:00'),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((postData) => (
            <Post key={postData.id} post={postData} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
