import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import Profile from './Components/profile/Profile'
import { data } from './data'
function App() {
  const styles = { color: "red",textAlign:"center", backgroundImage:" url(./assets/bg.jpg)"}
  return (
    <div style={{styles}}>
      <div >
        <NavBar />
        <Profile data={data} />
        <Footer/>
        </div>
      
    </div>
  );
}

export default App;
