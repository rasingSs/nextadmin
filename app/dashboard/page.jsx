import React from "react"
import Cart from "@/app/ui/deshboard/card/card";
import Rightbar from "../ui/deshboard/rightbar/rightbar";
import Chart from "../ui/deshboard/chart/chart";
import Transactions from "../ui/deshboard/transactions/transactions";
import styles from './dashboard.module.css';

const Dasboard = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <Cart />
                    <Cart />
                    <Cart />
                </div>
                <Chart />
                <Transactions />
            </div>
            <div className={styles.side}>
                <Rightbar />
            </div>
        </div>
    )
}

export default Dasboard