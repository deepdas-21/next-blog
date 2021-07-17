import Image from "next/image"
import banner from '../public/banner.png'
import styles from '../styles/Home.module.css'

const heading = "Welcome to Next Blog"

const paragraphs = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis vestibulum quam condimentum eleifend. Integer eu lectus convallis, egestas tellus quis, cursus turpis. Phasellus egestas ligula non rhoncus molestie.Phasellus egestas ligula non rhoncus molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque commodo odio ut quam congue interdum. Suspendisse congue urna id eleifend semper. Pellentesque congue nisi odio.",
  "Vivamus volutpat sapien eu urna facilisis, a euismod purus feugiat. Vivamus laoreet neque et congue lacinia. Etiam ac laoreet dolor. Cras viverra non risus vel lacinia. Ut consequat, velit non mattis tristique, neque turpis porta ex, quis fringilla nunc dolor et risus.  Aliquam non dolor porta, maximus risus a, finibus velit. Suspendisse quis est purus. Donec sed orci viverra, fermentum tortor ut, tempus ipsum. Ut fringilla nibh nibh, id porttitor metus porttitor a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
]


export default function Home() {
  
  return (
    <div className={ styles.container }>
      <Image src={banner} alt="banner" />
      <div className={ styles.content }>
        <br /><h2>{ heading }</h2><br />
        {paragraphs.map((paragraph, i) => (
          <p key={i}>{ paragraph }</p>
        ))}
      </div>
    </div>
  )
}
