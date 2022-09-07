import farmLogo from '../../assets/farmLogo.png'
import tomate from '../../assets/products/Tomate.png';
import brocolis from '../../assets/products/Brocolis.png';
import batata from '../../assets/products/Batata.png';
import pepino from '../../assets/products/Pepino.png';
import abobora from '../../assets/products/Abobora.png';

const basketMocks = {
    header: {
        title: 'Detalhe da Cesta'
    },
    details: {
        name: 'Cesta de Verduras',
        farmLogo: farmLogo,
        farmName: 'Jenny Jack Farm',
        description: 'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.',
        price: 'R$ 40,00',
        button: 'Comprar'
    },
    itens: {
        title: "Itens da Cesta",
        list: [
            {
                name: "Tomate",
                image: tomate,
            },
            {
                name: "Brócolis",
                image: brocolis,
            },
            {
                name: "Batata",
                image: batata,
            },
            {
                name: "Pepino",
                image: pepino,
            },
            {
                name: "Abóbora",
                image: abobora,
            }
        ]
    }
}

export default basketMocks;