import { Component } from "react";
import Logo from './Logo'
import Carro from './Carro'

const styles ={
    navbar:{
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        heigth: '100px',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '15px 50px',
        boxShadow: '0 2px 3px rgba(0,0,0,0.1)'
    },
    logo:{

    }

}

class Navbar extends Component{
    render(){
        const {carro, esCarroVisible,mostrarCarro} = this.props
        return(
            <nav style={styles.navbar}>
                <Logo />
                <Carro carro={carro}
                esCarroVisible={esCarroVisible}
                mostrarCarro={mostrarCarro}/>
            </nav>
        )
    }
}

export default Navbar