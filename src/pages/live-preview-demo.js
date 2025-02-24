import styles from "../styles/preview.module.css";
import Contentstack from "contentstack";

// // ✅ Contentstack Configuration
// const Stack = Contentstack.Stack({
//   api_key: process.env.CONTENTSTACK_API_KEY || "",
//   delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN || "",
//   environment: process.env.CONTENTSTACK_ENVIRONMENT || "",
// });

const Stack = Contentstack.Stack({ 
  "api_key": process.env.CONTENTSTACK_API_KEY || 'blt91377ab7c766f7e9', 
  "delivery_token": process.env.CONTENTSTACK_DELIVERY_TOKEN || "cs1e98b519fb972881c64b6546",
  "environment": process.env.CONTENTSTACK_ENVIRONMENT || "dev",
  live_preview: {
      preview_token: process.env.CONTENTSTACK_PREVIEW_TOKEN || "cs2a27637db06d1984a3fbc071",
      enable: true,
      host: process.env.CONTENTSTACK_PREVIEW_HOST || 'rest-preview.contentstack.com'
    },
});

// export async function getStaticProps() {
//   try {
//     const entry = Stack.ContentType("lyrics").Entry("blt2000c7a1a79aa2cb");
//     const result = await entry.toJSON().fetch();
//     return {
//       props: {result: result},
//   }
//   } catch (err) {
//     console.error("Error fetching data:", err);
//     return null;
//   }
// }

export default function Home({result}) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.heading}>CMS Data</h1>
        {result ? (
          <p className={styles.text}>Title: {result.title}</p>
        ) : (
          <p className={styles.error}>Failed to load content.</p>
        )}
      </main>
    </div>
  );
}
