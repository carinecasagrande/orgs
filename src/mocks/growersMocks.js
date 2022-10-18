import green from '../assets/grower/green.png'
import salad from '../assets/grower/salad.png'
import jennyJack from '../assets/grower/jenny-jack.png'
import grow from '../assets/grower/grow.png'
import potager from '../assets/grower/potager.png'

const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const growersMocks = {
    title: 'Produtores',
    list: [
        {
            id: 1,
            name: 'Green',
            image: green,
            distance: rand(1, 500),
            stars: rand(1, 5),
        },
        {
            id: 2,
            name: 'Salad',
            image: salad,
            distance: rand(1, 500),
            stars: rand(1, 5),
        },
        {
            id: 3,
            name: 'Jenny Jack Farm',
            image: jennyJack,
            distance: rand(1, 500),
            stars: rand(1, 5),
        },
        {
            id: 4,
            name: 'Grow',
            image: grow,
            distance: rand(1, 500),
            stars: rand(1, 5),
        },
        {
            id: 5,
            name: 'Potager',
            image: potager,
            distance: rand(1, 500),
            stars: rand(1, 5),
        }
    ]
}

export default growersMocks