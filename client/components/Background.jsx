import React from 'react'
//import logo from '../components/images/cant_image.JPG'
//import second from '../components/images/can_image.JPG'
import '../../server/public/main.css'


class Background extends React.Component {

  state = {
    logoVisible: true,
    sndImage: false
  }

  componentDidMount () {
    setInterval(this.switch, 5000 )
  }

 switch = () => {
  this.setState ({
  logoVisible: !false,
  sndImage: !true
})
}

render () {
    return (
        <>
            {this.state.logoVisible && <img className='Background' src={logo} alt='' />}
            {this.state.sndImage && <img className='Background' src={second} alt='' />}
        
        </> 
       
      )





    }
}
export default Background
