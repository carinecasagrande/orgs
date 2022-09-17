import { useState, useEffect, use } from "react"
import { loadFarm } from "../services/loadData"

export default function useFarm() {
    const [title, setTitle] = useState("")
    const [list, setList] = useState([])

    useEffect(() => {
        const data = loadFarm()

        data.list.sort(function (a, b) {
            return a.distance - b.distance;
        });

        setTitle(data.title)
        setList(data.list)
    }, [])

    return [title, list];
}