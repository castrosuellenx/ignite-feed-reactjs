import {format, formatDistanceToNow} from 'date-fns';
import {ptBR} from 'date-fns/locale';

import {Avatar} from './Avatar';
import {Comment} from './Comment';
import styles from './Post.module.css';

type Props = {
  id: string;
  author: {name: string; role: string; avatarUrl: string};
  publishedAt: Date;
  content: {type: 'paragraph' | 'link'; content: string}[];
};

export function Post({author, publishedAt, content}: Props) {
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {locale: ptBR}
  );

  const publishedDataRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} alt="" />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDataRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          const lineByType = {
            paragraph: <p>{line.content}</p>,
            link: (
              <p>
                <a href="#">{line.content}</a>
              </p>
            ),
          };

          return lineByType[line.type];
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
