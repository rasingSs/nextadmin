import React from "react";
import Navbar from "../ui/deshboard/navbar/navbar";
import Sidebar from "../ui/deshboard/sidebar/sidebar";
import styles from "../ui/deshboard/dashboard.module.css"

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                < Navbar  />
                {children}
            </div>
        </div>
    )
}

export default Layout