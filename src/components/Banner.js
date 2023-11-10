import '../styles/Banner.css'
import logo from '../asset/logo.png'


function Banner() {
    return <div className="lmj-banner">
        <img src={logo} alt="maison-jungle" className='lmj-logo' />
        <h1 className='lmj-title'>La maison jungel</h1>
    </div>
}

export default Banner