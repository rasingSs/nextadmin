import { MdSupervisedUserCircle } from 'react-icons/md';
import styles from './card.module.css';

const Cart = () => {
    return (
        <>
            <div className={styles.container}>
                <MdSupervisedUserCircle />
                <div className={styles.text}>
                    <span className={styles.title}>Total Users</span>
                    <span className={styles.munber}>10.273</span>
                    <span className={styles.detaile}>
                        <span className={styles.positive}>12%</span> more than previons week
                    </span>
                </div>
            </div>
        </>
    )
}

export default Cart