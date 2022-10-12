import React, {useState, useEffect} from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import styles from './Shop.module.css'
import Data from '../../components/Data'
import Card from '../../components/card/Card'

const Shop = () => {
    const [data, setData] = useState(Data)
    const [filter, setFilter] = useState(false)

    function sortTitle(property) {
        let sortOrder = 1;
    
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
    
        return function (a,b) {
            if(sortOrder == -1){
                return b[property].localeCompare(a[property]);
            }else{
                return a[property].localeCompare(b[property]);
            }        
        }
    }

    function sortLow(price) {
        return function(a,b){
            return a[price] - b[price]
        }
    }

    function sortHigh(price){
        return function(a,b){
            return b[price] - a[price]
        }
    }

    const sortProducts = (e) =>{
        let sort = e.target.value;
        data.slice().sort(() => {
            if(sort === 'A-Z'){
                setData(data.sort(sortTitle("title")))
                setFilter(true)
            }
            if(sort === 'Z-A'){
                setData(data.sort(sortTitle("-title")))
                setFilter(true)
            }
            if(sort === 'lowToHigh'){
                setData(data.sort(sortLow('price')))
                setFilter(true)
            }
            if(sort === 'highToLow'){
                setData(data.sort(sortHigh('price')))
                setFilter(true)
            }
        })
    }
    useEffect(() => {
        setTimeout(() => {
          setFilter(false);
        }, 10);
    });
  return (
    <div className={styles.Container}>
        <Header />
            <div className={styles.Shop}>
                <select className={styles.Sort} onChange={sortProducts}>
                    <option value='0'>Sort By...</option>
                    <option value='lowToHigh'>Price (low to high)</option>
                    <option value='highToLow'>Price (high to low)</option>
                    <option value='A-Z'>Name (A-Z)</option>
                    <option value='Z-A'>Name (Z-A)</option>
                </select>
                <div className={styles.Wrapper}>
                    <div className={styles.Items}>
                        {!filter && data.map((product, index) => {
                            return ( 
                                <div className={styles.Item} key={index}>
                                    <Card 
                                        image={product.image}
                                        title={product.title}
                                        price={product.price}
                                        id={product.id}
                                    />
                                </div>
                            )
                        })}
                        {filter && data.map((product, index) => {
                            return ( 
                                <div className={styles.Item} key={index}>
                                    <Card 
                                        image={product.image}
                                        title={product.title}
                                        price={product.price}
                                        id={product.id}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div> 
            </div>
        <Footer />
    </div>
  )
}

export default Shop