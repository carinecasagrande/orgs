import green from '../assets/grower/green.png'
import salad from '../assets/grower/salad.png'
import jennyJack from '../assets/grower/jenny-jack.png'
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
                    details: {
                        name: "Brócolis e cucumber",
                        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                        price: "R$ 40,00",
                        image: cucumber
                    },
                    itens: [
                        {
                            name: "Brócolis",
                            image: broccoli,
                        },
                        {
                            name: "cucumber",
                            image: cucumber,
                        },
                    ]
                },
                {
                    details: {
                        name: "Brócolis",
                        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                        price: "R$ 40,00",
                        image: broccoli
                    },
                    itens: [
                        {
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
                    details: {
                        name: "Salada completa",
                        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                        price: "R$ 40,00",
                        image: products
                    },
                    itens: [
                        {
                            name: "tomato",
                            image: tomato,
                        },
                        {
                            name: "Brócolis",
                            image: broccoli,
                        },
                        {
                            name: "cucumber",
                            image: cucumber,
                        },
                    ]
                },
                {
                    details: {
                        name: "tomato e cucumber",
                        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                        price: "R$ 40,00",
                        image: tomato
                    },
                    itens: [
                        {
                            name: "tomato",
                            image: tomato,
                        },
                        {
                            name: "cucumber",
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
                    details: {
                        name: "Muita potato",
                        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                        price: "R$ 40,00",

                        image: potato
                    },
                    itens: [
                        {
                            name: "potato",
                            image: potato,
                        },
                    ]
                },
                {
                    details: {
                        name: "tomato e Brócolis",
                        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                        price: "R$ 40,00",
                        image: broccoli
                    },
                    itens: [
                        {
                            name: "tomato",
                            image: tomato,
                        },
                        {
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
                    details: {
                        name: "pumpkin e asparagus",
                        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                        price: "R$ 40,00",
                        image: asparagus
                    },
                    itens: [
                        {
                            name: "Abóbora",
                            image: pumpkin,
                        },
                        {
                            name: "asparagus",
                            image: asparagus,
                        }
                    ]
                },
                {
                    details: {
                        name: "tomato e pumpkin",
                        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                        price: "R$ 40,00",
                        image: pumpkin
                    },
                    itens: [
                        {
                            name: "tomato",
                            image: tomato,
                        },
                        {
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
                    details: {
                        name: "Pepinos",
                        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                        price: "R$ 40,00",
                        image: cucumber
                    },
                    itens: [
                        {
                            name: "cucumber",
                            image: cucumber,
                        },
                    ]
                },
                {
                    details: {
                        name: "Brócolis, asparagus e carrot",
                        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                        price: "R$ 40,00",
                        image: carrot_2
                    },
                    itens: [
                        {
                            name: "Brócolis",
                            image: broccoli,
                        },
                        {
                            name: "asparagus",
                            image: asparagus,
                        },
                        {
                            name: "carrot",
                            image: carrot,
                        }
                    ]
                }
            ]
        }
    ]
};

export default growersMocks;