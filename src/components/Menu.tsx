import styles from '../styles/components/Menu.module.css';

export function Menu() {
    return (
        <div className={styles.menuContainer}>
            <div className={styles.menuLogo}>
                <img src="icons/menu-toggle.svg" alt="menu" />
            </div>
            <ul className={styles.menuOptions}>
                <li> <img src="icons/services.svg" alt="Serviços" /> </li>
                <li> <img src="icons/add.svg" alt="Adicionar Soluções" /> </li>
                <li> <img src="icons/phone.svg" alt="Contactar" /> </li>
            </ul>
            <ul className={styles.menuSocialNetwork}>
                <li>
                    <a href="#">
                        <img src="icons/whatsapp.svg" alt="Whatsapp" />
                    </a>
                </li>
                <li>
                    <a href="https://facebook.com/sejacriativomz">
                        <img src="icons/facebook.svg" alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/sejacriativomz">
                        <img src="icons/instagram.svg" alt="Instagram" />
                    </a>
                </li>
            </ul>
        </div>
    )
}