import {useState} from 'react';
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
  const [comments, setComments] = useState(['Que massa!']);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {locale: ptBR}
  );

  const publishedDataRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();

    setComments((prevState) => [...prevState, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(
    event: React.FormEvent<HTMLTextAreaElement>
  ) {
    (event.target as HTMLTextAreaElement).setCustomValidity(
      'Esse campo é obrigatório'
    );
  }

  function deleteComment(commentToDelete: string) {
    setComments((prevState) => [
      ...prevState.filter((comment) => comment !== commentToDelete),
    ]);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

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
            paragraph: <p key={line.content}>{line.content}</p>,
            link: (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            ),
          };

          return lineByType[line.type];
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
