import Container from "../components/Container"
import bannerImage from '../images/task.png'

function Banner() {
  return (
     <Container className="grid grid-cols-2 items-center">
        <div>
            <h1 className="text-5xl font-bold mb-3 text-red-600 dark:text-amber-300">Task  Management</h1>
            <p className="text-lg dark:text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
        </div>
        <div className="m-auto">
            <img className="max-w-sm " src={bannerImage} alt="banner image" />
        </div>
     </Container>
  )
}

export default Banner