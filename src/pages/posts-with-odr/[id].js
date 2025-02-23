import styles from "../../styles/post.module.css";
import { getById } from '../../lib/posts'

export async function getStaticPaths() {
  return {
      paths: [
        { params: { id: '1' } },
        { params: { id: '2' } },
        { params: { id: '3' } },
        { params: { id: '4' } },
        { params: { id: '5' } },
      ],
      fallback: 'blocking',
    }
}

export async function getStaticProps({ params }) {
    const post = await getById(params.id)
    return {
        props: {
            post
        },
      revalidate: 10,
    }
  }

export default function ISRPostPage({ post }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.heading}>Post Details</h2>
        <div className={styles.postCard}>
          <p>
            <strong>User ID:</strong> {post.userId}
          </p>
          <p>
            <strong>ID:</strong> {post.id}
          </p>
          <p>
            <strong>Title:</strong> {post.title}
          </p>
          <p>
            <strong>Body:</strong> {post.body}
          </p>
          <p className={styles.timestamp}>
            <strong>Last Updated:</strong> {post.timestamp}
          </p>
        </div>
      </main>
    </div>
  );
}
