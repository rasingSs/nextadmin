import styles from './transactions.module.css';


const Transactions = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>Transactions</div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Status</td>
                            <td>Data</td>
                            <td>Amount</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className={styles.user}>
                                    <img src="/noavatar.png"
                                        alt=""
                                        width={40}
                                        height={40}
                                        className={styles.userImage}
                                    />
                                    John Doe
                                </div>
                            </td>
                            <td>
                                <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                            </td>
                            <td>14.02.2024</td>
                            <td>$3.200</td>
                        </tr>
                        <tr>
                            <td>
                                <div className={styles.user}>
                                    <img src="/noavatar.png"
                                        alt=""
                                        width={40}
                                        height={40}
                                    />
                                    John Doe
                                </div>
                            </td>
                            <td>
                                <span className={`${styles.status} ${styles.done}`}>Done</span>
                            </td>
                            <td>14.02.2024</td>
                            <td>$3.200</td>
                        </tr>
                        <tr>
                            <td>
                                <div className={styles.user}>
                                    <img src="/noavatar.png"
                                        alt=""
                                        width={40}
                                        height={40}
                                    />
                                    John Doe
                                </div>
                            </td>
                            <td>
                                <span className={`${styles.status} ${styles.cancelled}`}>cancelled</span>
                            </td>
                            <td>14.02.2024</td>
                            <td>$3.200</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Transactions