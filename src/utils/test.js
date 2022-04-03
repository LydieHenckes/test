	/* la structure du tableau controlé
	[
		{
			sender: {
				uuid:
				email:
				firstName:
				lastName:
			}
			recipient: {
				uuid:
				email:
				firstName:
				lastName
			}
		}
		...
		{}
	]
	 */
export const testWithoutRepeat = (arr) => {
	const result = {
		sendersWithoutRepeat : true,
		recipientsWithoutRepeat: true
	}

	const dictionarySenders = {};
	const dictionaryRecipients = {};

	for (let i = 0; i < arr.length; i++) {
		 const itemSender = arr[i].sender.uuid;
		 dictionarySenders[itemSender] = dictionarySenders[itemSender] ? dictionarySenders[itemSender] + 1 : 1;

		 const itemRecipient = arr[i].recipient.uuid;
		 dictionaryRecipients[itemRecipient] = dictionaryRecipients[itemRecipient] ? dictionaryRecipients[itemRecipient] + 1 : 1;
	}
	for (let i = 0; i < arr.length; i++) {
		 const item = arr[i].sender.uuid;
		 if (dictionarySenders[item] > 1) {
			  result.sendersWithoutRepeat = false;
		 };
		 if (dictionaryRecipients[item] > 1) {
			result.recipientsWithoutRepeat = false;
	  }
	}
	console.log('test : ', result)
	return result;


}