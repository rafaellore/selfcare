import * as C from './styles';


export const Product = ({img}) => {
    return(
        <C.Container>
            <img src={img} alt="Product" />
            <p className="title">Lorem ipsum dolor sit</p>
                <div className="price"><p>R$</p> <p className="value">50,00</p></div>
        </C.Container>
    );
}