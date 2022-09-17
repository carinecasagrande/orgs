import jennyJackFarm from '../assets/farm/jenny-jack.png'
import tomato from '../assets/products/tomato.png'
import broccoli from '../assets/products/broccoli.png'
import potato from '../assets/products/potato.png'
import cucumber from '../assets/products/cucumber.png'
import pumpkin from '../assets/products/pumpkin.png'

const basketMocks = {
    header: {
        title: 'Detalhe da Cesta'
    },
    details: {
        name: 'Cesta de Verduras',
        farmLogo: jennyJackFarm,
        farmName: 'Jenny Jack Farm',
        description: 'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.',
        price: 'R$ 40,00',
        button: 'Comprar'
    },
    itens: {
        title: "Itens da Cesta",
        list: [
            {
                id: 1,
                name: "Tomate",
                image: tomato,
            },
            {
                id: 2,
                name: "Brócolis",
                image: broccoli,
            },
            {
                id: 3,
                name: "Batata",
                image: potato,
            },
            {
                id: 4,
                name: "Pepino",
                image: cucumber,
            },
            {
                id: 5,
                name: "Abóbora",
                image: pumpkin,
            }
        ]
    }
}

export default basketMocks