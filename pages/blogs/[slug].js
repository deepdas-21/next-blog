import { createClient } from 'contentful'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styles from '../../styles/Blog.module.css'

const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: 'blogs'})  
    
    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug },
        }
    })
    
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const { items } = await client.getEntries({
        content_type: 'blogs',
        'fields.slug': params.slug
    })
    return {
        props: {
            blog: items[0]
        }
    }
}

function BlogDetails({ blog }) {
    const { featuredImage, title, description } = blog.fields;
    console.log(blog);
    return (
        <div className={styles.container }>
            <Image
                src={`https://${featuredImage.fields.file.url}`}
                alt=""
                width={featuredImage.fields.file.details.image.width}
                height={featuredImage.fields.file.details.image.height}
            />
            <div className={styles.content }>
                {documentToReactComponents(description)}
            </div>
        </div>
    )
}

export default BlogDetails
