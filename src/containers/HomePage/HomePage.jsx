import { useTranslation } from 'react-i18next';
import i18n from '../../utils/i18n'
import backgd from '../../assets/background.png'
import imgTitle from '../../assets/title.png'
import imgActionBg from '../../assets/santa.png'
import imgButton from '../../assets/button.png'
import styles from './homepage.module.css'

const HomePage = ({setMainPage}) => {
	const [t, i18n] = useTranslation();

	const actionHandle = () => {
		setMainPage(false);
		
	}
	return (
		<div className={styles.wrapper} style = {{backgroundImage: `url(${backgd})`}} >
			<div className={styles.imgwrapper} >
				<img src={imgTitle} alt="background title" />
			</div>
				
			<div className={styles.title}>{t('title1')}</div>
			<div className={styles.action}  >
				<img src={imgActionBg} alt="background santa"  />
				<div className={styles.action__btn} onClick = {actionHandle}>
					<img src={imgButton} alt="background button"  />
					<span className={styles.action__title}>{t('actionLaunch')}</span>
				</div>
			</div>
		</div>
	)
}



export default HomePage;