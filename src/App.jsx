import Header from "./components/Header"
import ReviewItems from "./components/ReviewItems"

function App() {
  

  return (
    <>
    <Header text={"Review Application"} />
    <div className="container">
      <ReviewItems review={"i am your first review text"} score={10} />
      <ReviewItems review={"I love this project"} score={7} />
      <ReviewItems review={"This is a props example"} score={2} />
     </div>
    </>
  )
}

export default App
