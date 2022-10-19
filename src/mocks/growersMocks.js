import green from '../assets/grower/green.png'
import salad from '../assets/grower/salad.png'
import jennyJack from '../assets/grower/jennyjack.png'
import grow from '../assets/grower/grow.png'
import potager from '../assets/grower/potager.png'

import asparagus from '../assets/products/asparagus.png';
import broccoli from '../assets/products/broccoli.png';
import carrot_2 from '../assets/products/carrot_2.png';
import carrot from '../assets/products/carrot.png';
import cucumber from '../assets/products/cucumber.png';
import potato from '../assets/products/potato.png';
import products from '../assets/products/products.png';
import pumpkin from '../assets/products/pumpkin.png';
import tomato from '../assets/products/tomato.png';

const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const growersMocks = {
    list: [
        {
            id: 1,
            name: "Green",
            image: green,
            distance: rand(1, 500),
            stars: rand(1, 5),
            baskets: [
                {
                    id: 1,
                    details: {
                        name: "Brócolis e Pepino",
                        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                        price: "R$ 40,00",
                        image: cucumber
                    },
                    itens: [
                        {
                            id: 1,
                            name: "Brócolis",
                            image: broccoli,
                        },
                        {
                            id: 2,
                            name: "Pepino",
                            image: cucumber,
                        },
                    ]
                },
                {
                    id: 2,
                    details: {
                        name: "Brócolis",
                        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                        price: "R$ 40,00",
                        image: broccoli
                    },
                    itens: [
                        {
                            id: 1,
                            name: "Brócolis",
                            image: broccoli,
                        },
                    ]
                }
            ]
        },
        {
            id: 2,
            name: "Salad",
            image: salad,
            distance: rand(1, 500),
            stars: rand(1, 5),
            baskets: [
                {
                    id: 1,
                    details: {
                        name: "Salada completa",
                        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                        price: "R$ 40,00",
                        image: products
                    },
                    itens: [
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
                            name: "Pepino",
                            image: cucumber,
                        },
                    ]
                },
                {
                    id: 2,
                    details: {
                        name: "Tomate e cucumber",
                        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                        price: "R$ 40,00",
                        image: tomato
                    },
                    itens: [
                        {
                            id: 1,
                            name: "Tomate",
                            image: tomato,
                        },
                        {
                            id: 2,
                            name: "Pepino",
                            image: cucumber,
                        },
                    ]
                }
            ]
        },
        {
            id: 3,
            name: "Jenny Jack Farm",
            image: jennyJack,
            distance: rand(1, 500),
            stars: rand(1, 5),
            baskets: [
                {
                    id: 1,
                    details: {
                        name: "Muita Batata",
                        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                        price: "R$ 40,00",
                        image: potato
                    },
                    itens: [
                        {
                            id: 1,
                            name: "Batata",
                            image: potato,
                        },
                    ]
                },
                {
                    id: 2,
                    details: {
                        name: "Tomate e Brócolis",
                        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                        price: "R$ 40,00",
                        image: broccoli
                    },
                    itens: [
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
                    ]
                }
            ]
        },
        {
            id: 4,
            name: "Grow",
            image: grow,
            distance: rand(1, 500),
            stars: rand(1, 5),
            baskets: [
                {
                    id: 1,
                    details: {
                        name: "Abobora e Aspargos",
                        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                        price: "R$ 40,00",
                        image: asparagus
                    },
                    itens: [
                        {
                            id: 1,
                            name: "Abóbora",
                            image: pumpkin,
                        },
                        {
                            id: 2,
                            name: "Aspargos",
                            image: asparagus,
                        }
                    ]
                },
                {
                    id: 2,
                    details: {
                        name: "Tomate e Abobora",
                        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                        price: "R$ 40,00",
                        image: pumpkin
                    },
                    itens: [
                        {
                            id: 1,
                            name: "Tomate",
                            image: tomato,
                        },
                        {
                            id: 2,
                            name: "Abóbora",
                            image: pumpkin,
                        }
                    ]
                }
            ]
        },
        {
            id: 5,
            name: "Potager",
            image: potager,
            distance: rand(1, 500),
            stars: rand(1, 5),
            baskets: [
                {
                    id: 1,
                    details: {
                        name: "Pepinos",
                        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                        price: "R$ 40,00",
                        image: cucumber
                    },
                    itens: [
                        {
                            id: 1,
                            name: "Pepino",
                            image: cucumber,
                        },
                    ]
                },
                {
                    id: 2,
                    details: {
                        name: "Brócolis, Aspargos e Cenoura",
                        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                        price: "R$ 40,00",
                        image: carrot_2
                    },
                    itens: [
                        {
                            id: 1,
                            name: "Brócolis",
                            image: broccoli,
                        },
                        {
                            id: 2,
                            name: "Aspargos",
                            image: asparagus,
                        },
                        {
                            id: 3,
                            name: "Cenoura",
                            image: carrot,
                        }
                    ]
                }
            ]
        }
    ]
};

export default growersMocks;