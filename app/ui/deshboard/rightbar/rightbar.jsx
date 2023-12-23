import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md';
import styles from './rightbar.module.css';

const Rightbar = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.item}>
                    <div className={styles.bgContainer}>
                        <img src="./astronaut.png" alt='' fill />
                    </div>
                    <div className={styles.text}>
                        <span className={styles.notification}> Available Now</span>
                        <h3 className={styles.titles}>How to use the new version of the admin dashboard</h3>
                        <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                        <p className={styles.desc}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Odio quo facilis quisquam non optio illo vitae eum vel,
                            eveniet magni, tempora officiis
                            ducimus omnis molestias? Est obcaecati excepturi
                            ullam temporibus!
                        </p>
                        <button className={styles.button}>
                            <MdPlayCircleFilled />
                            Watch
                        </button>
                    </div>
                </div>
                <div className={styles.item}>
                    {/* <div className={styles.bgContainer}>
                        <img src="./astronaut.png" alt='' fill/>
                    </div> */}
                    <div className={styles.text}>
                        <span className={styles.notification}> Coming Soon</span>
                        <h3 className={styles.titles}>How to use the new version of the admin dashboard</h3>
                        <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                        <p className={styles.desc}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Odio quo facilis quisquam non optio illo vitae eum vel,
                            eveniet magni, tempora officiis
                            ducimus omnis molestias? Est obcaecati excepturi
                            ullam temporibus!
                        </p>
                        <button className={styles.button}>
                            <MdReadMore />
                            Learn
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rightbar