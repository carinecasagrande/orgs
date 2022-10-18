import { useState, useEffect } from 'react'
import { loadGrowers } from '../services/loadData'

export default function useGrowers(bestGrowers) {
    const [list, setList] = useState([])

    useEffect(() => {
        const data = loadGrowers()
        data.list.sort(
            (growerA, growerB) => growerA.distance - growerB.distance,
        )

        let newList = data.list
        if (bestGrowers) {
            newList = newList.filter(
                (grower) => grower.stars > 3
            )
        }
        setList(newList)
    }, [])

    return list
}