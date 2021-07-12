import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Card.module.css'

function BlogCard({ blog }) {
    const { title, slug, thumbnail} = blog.fields
    return (
        
            <div className={ styles.container }>
                <div className={styles.content}>
                    <Image
                    src={`https:${thumbnail.fields.file.url}`}
                    width={thumbnail.fields.file.details.image.width}
                    height={thumbnail.fields.file.details.image.height}
                    alt=""
                    />
                <p>{title}</p>
                <Link href={`/blogs/${slug}`} passHref>
                    <a>See More</a>
                </Link>
                </div>
            </div>
    )
}

export default BlogCard
