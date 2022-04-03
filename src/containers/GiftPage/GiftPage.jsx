import {useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import { testWithoutRepeat } from '../../utils/test';
import styles from './giftpage.module.css';
import backgd from '../../assets/background2.png';
import imgTitle from '../../assets/title.png';
import imgButton from '../../assets/button.png'

const GiftPage = ({setMainPage}) => {
	const [t, i18n] = useTranslation();
	const [dataUsers, setDataUsers] = useState([])
	const [resultUsers, setResultUsers] = useState([])

	const goHomeHandle = () => {
		setMainPage(true);
	}
	useEffect(() => {
		let users = [];
		for (let i=0; i< 47; i++) {
			let uuid = uuidv4();
			let user = {
				uuid:uuid,
				email: "email"+i + "@exemple.com",
				firstName: "firstName"+i ,
				lastName: "lastName" + i
			} 
			users.push(user);
		}

		setDataUsers(users);
		setResultUsers(drawCalcHandle(users));
	}, []);

	const sendHandle = () => {
			alert(t('alertMessage'));
			const testResult = testWithoutRepeat(resultUsers);
			if (testResult.sendersWithoutRepeat) {alert( "Il n'y a pas de répétition dans la liste des éxpéditeurs !")} 
			 else {alert( "Attention, il y a  de répétition dans la liste des éxpéditeurs !")} ;
			 if (testResult.recipientsWithoutRepeat) {alert( "Il n'y a pas de répétition dans la liste des destinataires !")} 
			 else {alert( "Attention, il y a  de répétition dans la liste des destinataires !")} ;
	}

	

	const arrayRandElement = (arr) => {
		var rand = Math.floor(Math.random() * arr.length);
			const res = {
			elem: arr[rand], 
			index: rand
		}
		return res;
  }
  
	const drawCalcHandle = (arr) => {
		let sendUsersList = JSON.parse(JSON.stringify(arr));// dataUsers.slice();
		let receiveUsersList =  JSON.parse(JSON.stringify(arr));//dataUsers.slice();

		let resultUsersList = [];

		while (sendUsersList.length > 2) {
			const currentSendUser = arrayRandElement(sendUsersList); 
			const currentReceiveUser = arrayRandElement(receiveUsersList);

			if (currentSendUser.elem.uuid !== currentReceiveUser.elem.uuid) {
				resultUsersList.push({
					sender: currentSendUser.elem,
					recipient: currentReceiveUser.elem
				})
				sendUsersList.splice(currentSendUser.index, 1);
				receiveUsersList.splice(currentReceiveUser.index, 1)
				
			} else {
				continue;
			}
		}
		if (sendUsersList.length === 2) {
			if (sendUsersList[0].uuid !== receiveUsersList[0].uuid) {
				resultUsersList.push({
					sender: sendUsersList[0],
					recipient: receiveUsersList[0]
				})
				resultUsersList.push({
					sender: sendUsersList[1],
					recipient: receiveUsersList[1]
				})
				sendUsersList.splice(0, 1);
				receiveUsersList.splice(0, 1);
			} else {
				resultUsersList.push({
					sender: sendUsersList[0],
					recipient: receiveUsersList[1]
				})
				resultUsersList.push({
					sender: sendUsersList[1],
					recipient: receiveUsersList[0]
				})
				sendUsersList.splice(0, 1);
				receiveUsersList.splice(1, 1);
			}
		}

		return resultUsersList;

	}


	return (

		<div className={styles.wrapper} style = {{backgroundImage: `url(${backgd})`}} >

         <div className={styles.imgshadow}  onClick = {goHomeHandle}>
				<div className={styles.imgwrapper}>
					<img src={imgTitle} alt="background title" />
					
				</div>
			</div>

			<div className={styles.title}>{t('title2')}</div>
			<div className={styles.table}  >
				<div className={styles.table__title}>
					<div className={styles.table__titleS}>{t('titleTableSender')}</div>
					<div className={styles.table__titleR}>{t('titleTableRecipient')}</div>
				</div>

				<ul className={styles.table__list}>
					{resultUsers.map((usersPair, index) => 
						<li  key = {index} className={styles.table__row}>
						
								<div className={styles.table__rowS}>{usersPair.sender.email}</div>
								<div className={styles.table__rowR}>{usersPair.recipient.email}</div>
						
						
						</li>
					)}
				</ul>
				
			</div>
			<div className={styles.action__btn} onClick = {sendHandle}>
					<img src={imgButton} alt="background button"  />
					<span className={styles.action__title}>{t('actionSend')}</span>
			</div>

		</div>

	)
}

export default GiftPage;