import { useState, useEffect } from 'react';
import axios from 'axios'
export default function Caridata(query, pn) {
    let url = "http://www.omdbapi.com/?apikey=7064a469&"
    let [loading, setLoading] = useState(true)
    let [film, setFilm] = useState([])
    let [error, setError] = useState(false)

    useEffect(() => {
        setFilm([])
    }, [query])

    useEffect(() => {


        setLoading(true)
        setError(false)
        let cancel
        axios({
            method: 'GET',
            url: url,
            params: { s: query, page: pn },
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            if (res.data.Response) {
                setFilm(res.data.Search)
            }
            setLoading(false)
        }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
        })
        return () => cancel()
    }, [query, pn])

    return { loading, error, film }
}