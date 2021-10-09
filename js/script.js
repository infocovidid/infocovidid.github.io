window.onload = () => {
	fetch("https://apicovid19indonesia-v2.vercel.app/api/indonesia", {
		method: "GET"
	}).then(res => res.json()).then(res => {
		let dataTU = getDocById("terakhir-update");
		let getDataTU = new Date(res.lastUpdate);
		dataTU.innerHTML = `${getDataTU.getUTCDay()} / ${getDataTU.getUTCMonth()} / ${getDataTU.getUTCFullYear()}`

		let sembuh = res.sembuh;
		let meninggal = res.meninggal;
		let positif = res.positif;
		let dirawat = res.dirawat;

		let dataS = getDocById("data-sembuh");
		let dataP = getDocById('data-positif');
		let dataM = getDocById("data-meninggal");
		let dataD = getDocById("data-dirawat");

		dataS.innerHTML = sembuh.toLocaleString();
		dataP.innerHTML = positif.toLocaleString();
		dataM.innerHTML = meninggal.toLocaleString();
		dataD.innerHTML = dirawat.toLocaleString();
	})
}