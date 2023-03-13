import styles from './OneProduct.module.css';

const OneProduct = (props) => {
    console.log(props)
    return (
        <div className={styles.list}>
            {
                props.items.map(item => {
                    return (
                        <div key={item.id} className={styles.oneProduct}>
                            <h2>{item.title}</h2>
                            <p>Category: {item.category}</p>
                            <div className={styles.oneProductPic}>
                            <img src={item.image} alt=""></img>
                            </div>
                            <div className={styles.bottomInfo}>
                            <p>{item.description}</p>
                            <p>Price: {item.price} eur.</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default OneProduct