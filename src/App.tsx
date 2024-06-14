import './global.css';

import styles from './App.module.css';
import {Header} from './components/Header';
import {Sidebar} from './components/Sidebar';
import {Post} from './components/Post';

const posts: {
  id: string;
  author: {name: string; role: string; avatarUrl: string};
  publishedAt: Date;
  content: {type: 'paragraph' | 'link'; content: string}[];
}[] = [
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
      {type: 'link', content: 'jane.design/doctorcare'},
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
      {type: 'paragraph', content: 'Fala galeraa'},
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portfólio',
      },
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-06-10 20:00:00'),
  },
  {
    id: '3',
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
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-05-13 20:00:00'),
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
            <Post key={postData.id} {...postData} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
