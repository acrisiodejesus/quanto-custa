import styles from '../styles/components/Menu.module.css';

export function Menu() {
    return (
        <div>
            <div className={styles.menuContainer}>
                <div className={styles.menuLogo}>
                    <img src="" alt="Logo da Quanto Custa" />
                </div>
                <ul className={styles.menuOptions}>
                    <li>Serviços</li>
                    <li>Cadastrar Soluções</li>
                    <li>Contacto</li>
                </ul>
                <ul className={styles.menuSocialNetwork}>
                    <li><i></i>+258 847 4246 54</li>
                    <li>/quantocustamz</li>
                    <li>/quantocustamz</li>
                </ul>
            </div>
        </div>
    )
}