import { useEffect, useState } from "react";
import ItemDestacado from "../ItemDestacado/ItemDestacado";
import {  useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const Destacado = () => {
    const [productos, setProductos] = useState([]);
    const { categoriaNombre } = useParams();
    const [loading, setLoading] = useState(true);

    const getProducts = () => {
        const db = getFirestore();
        const queryBase = collection(db, 'productos');
        const queryShop = categoriaNombre
            ? query(queryBase, where('categoria', '==', categoriaNombre)) : queryBase;
        getDocs(queryShop)
            .then((response) => {
                const data = response.docs.map((product) => {
                    return { id: product.id, ...product.data() }
                });
                setProductos(data)
            })
            .catch((error) => { console.log(error) });

    }
    useEffect(() => {
        getProducts()
        setLoading(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoriaNombre]);
    return (
        <main className="container_Main">
        <div className="container_products">{loading ? (<Spinner animation="border" role="status" />) : (<ItemDestacado productos={productos.slice(0,4)} />)}
        </div>
        </main>
    )
}

export default Destacado