import { createClient } from 'contentful'
import BlogCard from '../../comps/BlogCard'
import styles from "../../styles/BlogLayout.module.css"

export async function getStaticProps() {
    
    const client = createClient({
        space: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN
    })

  const res = await client.getEntries({ content_type: 'blogs'})

  return {
    props: {
      blogs: res.items
    }
  }
}

export default function Home({ blogs }) {
  return (
    <div className={styles.container}>
      { blogs.map((blog) => (
        <BlogCard key={blog.sys.id} blog={ blog }/>
      ))}
    </div>
  )
}

