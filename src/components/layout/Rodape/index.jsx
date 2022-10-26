import { FaLinkedin, FaGithubSquare} from 'react-icons/fa'

import {Footer, SocialList, Copyright} from './styles'

function Rodape() {
    return(
        <Footer>
            <SocialList>
                <li><a href="#" target='_black'><FaLinkedin/></a></li>
                <li><a href="#" target='_black'><FaGithubSquare/></a></li>
            </SocialList>
            <Copyright><span>Costs</span> &copy; 2022 - Vinicius Sousa</Copyright>
        </Footer>
    )
}

export default Rodape