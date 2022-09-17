import green from "../assets/farm/green.png"
import salad from "../assets/farm/salad.png"
import jennyJack from "../assets/farm/jenny-jack.png"
import grow from "../assets/farm/grow.png"
import potager from "../assets/farm/potager.png"

const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const farmMocks = {
    title: "Produtores",
    list: [
        {
            id: 1,
            name: "Green",
            image: green,
            distance: rand(1, 500),
            stars: rand(1, 5),
        },
        {
            id: 2,
            name: "Salad",
            image: salad,
            distance: rand(1, 500),
            stars: rand(1, 5),
        },
        {
            id: 3,
            name: "Jenny Jack Farm",
            image: jennyJack,
            distance: rand(1, 500),
            stars: rand(1, 5),
        },
        {
            id: 4,
            name: "Grow",
            image: grow,
            distance: rand(1, 500),
            stars: rand(1, 5),
        },
        {
            id: 5,
            name: "Potager",
            image: potager,
            distance: rand(1, 500),
            stars: rand(1, 5),
        }
    ]
}

export default farmMocks