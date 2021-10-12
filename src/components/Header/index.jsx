import * as C from './styles';
import { AiFillStar, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

export const Header = () => {
 return(
    <C.Container>
        <C.Logo>
            <AiFillStar/>
            <p>selfcare</p>
        </C.Logo>
        <C.Icons>
            <a><AiOutlineSearch size={20} color={"#5CA720"}/></a>
            <a><AiOutlineUser size={20} color={"#5CA720"}/></a>
            <a><FiShoppingCart size={20} color={"#5CA720"}/></a>
        </C.Icons>
    </C.Container>    
 );   
}