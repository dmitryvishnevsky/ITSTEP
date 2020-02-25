let name = prompt('Введи свое имя, странник'),
		letters = ["ш", "щ", "ч", "ж"],
		nameLen = name.length;
		isBadName = false;
		replics = ['Подозрительное у тебя имя, странник. Дам-ка я тебе задание на убийство крыс в канализации.', 
        'Отличное имя, странник. Вот тебе квест на убийство дракона.',
    ];
for(let i = 0; i < nameLen; i++){
	let name1 = name.toLowerCase();
	if(name1.indexOf(letters[i])  !== -1){
		isBadName = true;
	}
}
console.log(isBadName);
if(isBadName == true){
	console.log(replics[0]);
}else{
	console.log(replics[1]);
}
