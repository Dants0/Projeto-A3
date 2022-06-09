import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

export function Page404() {
    return (


        <div className={styles.pageNotFoundContainer}>
            <h1> 404. </h1>
            <span> Parece que você pegou o caminho errado, clique no botão abaixo
                para pegar uma carona à página inicial.
            </span>
            <button>
               <Link to="/">
                Voltar para Home
               </Link> 
            </button>
            <img src="/404.svg" alt="Carro sendo rebocado" />

            
            
            <div className={styles.waveOne}>
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,500 C 0,500 0,250 0,250 C 68.04871794871795,217.82820512820513 136.0974358974359,185.65641025641025 218,205 C 299.9025641025641,224.34358974358975 395.65897435897443,295.2025641025641 471,280 C 546.3410256410256,264.7974358974359 601.2666666666667,163.53333333333333 692,161 C 782.7333333333333,158.46666666666667 909.2743589743591,254.6641025641025 994,270 C 1078.725641025641,285.3358974358975 1121.6358974358975,219.81025641025641 1189,203 C 1256.3641025641025,186.18974358974359 1348.1820512820514,218.09487179487178 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#81B29A" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
            </div>



            <div className={styles.waveTwo}>
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,500 C 0,500 0,250 0,250 C 68.04871794871795,217.82820512820513 136.0974358974359,185.65641025641025 218,205 C 299.9025641025641,224.34358974358975 395.65897435897443,295.2025641025641 471,280 C 546.3410256410256,264.7974358974359 601.2666666666667,163.53333333333333 692,161 C 782.7333333333333,158.46666666666667 909.2743589743591,254.6641025641025 994,270 C 1078.725641025641,285.3358974358975 1121.6358974358975,219.81025641025641 1189,203 C 1256.3641025641025,186.18974358974359 1348.1820512820514,218.09487179487178 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#2F2F2F" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
            </div>

        </div>


    )
}