import {ThumbsUp, Trash} from 'phosphor-react';

import styles from './Comment.module.css';
import {Avatar} from './Avatar';

export function Comment({content}: {content: string}) {
  return (
    <div className={styles.comment}>
      <Avatar
        src="https://github.com/castrosuellenx.png"
        alt=""
        hasBorder={false}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Suéllen Castro</strong>

              <time
                title="09 de Dezembro de 2022"
                dateTime="2022-09-12 23:09:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
