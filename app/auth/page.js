import styles from './page.module.css'

export default function Auth() {
    function handleSubmit() {
        console.log("nothing");
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2>Welcome to My Shop!</h2>
                <h3 className={styles.formTitle}>
                    Please register below
                </h3>
            </form>
        </div>
    )
};