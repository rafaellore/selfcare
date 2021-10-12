import * as C from './styles';
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import { GrVisa, GrPaypal, GrMastercard } from "react-icons/gr";
import { SiMastercard } from "react-icons/si";

export const Footer = () => {
    return(
        <C.Footer>
            <C.Top>
                <C.Pages>
                    <a>Contato</a>
                    <a>Termos de serviço</a>
                    <a>Política de privacidade</a>
                    <a>Cancelamento, troca e reembolso</a>
                </C.Pages>
                <C.Email>
                    <p>Newsletter</p>
                    
                        <input type="text" placeholder="Digite seu melhor e-mail"/>
                        <button>Inscrever</button>
                    
                </C.Email>
            </C.Top>
            <C.Bottom>
                <div>
                <AiOutlineInstagram size={30} color={"#5CA720"}/>
                <AiOutlineFacebook size={30} color={"#5CA720"}/>
                </div>
                <div>
                <a><GrVisa size={30} color={"#5CA720"}/></a>
                <a><GrPaypal size={25} color={"#5CA720"}/></a>
                <a><SiMastercard size={28} color={"#5CA720"}/></a>
                </div>
            </C.Bottom>
        </C.Footer>
    );
}