import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Movie from "./Movie/Movie"
import CompA from "./props/CompA";
import Message from "./EventBinding/Message";
import User from "./Http/User";
function App(){
    return <div>
        <h1>App component</h1>
        <hr></hr>
        {/* <h1>Gnanesh</h1> */}
        {/* <Header/>
        <Footer/>
        <Movie/>
        <CompA/> */}
        <Message/>
        <User/>
        </div>
}
export default App;