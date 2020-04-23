import React, { useState } from 'react'
import Caridata from './search-api'
import Card from './components/cards'
import Loading from './components/loading'
import Loadnow from './components/searchnow'


export default function Movie() {
    const [query, setQuery] = useState('')
    const [pn, setPn] = useState(1)

    function handlesearch(e) {
        setQuery(e.target.value)
        setPn(1)
    }

    const {
        loading, error, film
    } = Caridata(query, pn)


    return (
        <div>
            <div className="justify-content-center row bg-dark text-white pt-5 pb-5">
                <div className="col-4">
                    <h3 className="text-center">Your Movie</h3>
                    <p className="text-muted">see details and info from your fav moive here</p>
                </div>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-5">
                    <input className="form-control form-control-lg" onChange={handlesearch} type="text" placeholder="input title here" />

                </div>

            </div>
            <div className="container mt-5">

                <div className="row justify-content-center text-center">
                    {
                        loading && <Loading />

                    }

                    {film ? film.map((data, index) => {
                        return <Card key={index} title={data.Title} image={data.Poster} />
                    }) : <Loadnow />


                    }
                    {error && <p className="red-text text-center">Error</p>}
                </div>
            </div>

            {/* {status ?
            <h1>LOADING</h1> : <Card />
        } */}

        </div>
    )
}