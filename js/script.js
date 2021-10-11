window.onload = () => {
	fetch("https://apicovid19indonesia-v2.vercel.app/api/indonesia", {
		method: "GET"
	}).then(res => res.json()).then(res => {
		let dataTU = getDocById("terakhir-update");
		dataTU.innerHTML = res.lastUpdate;

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

	fetch("https://vaksincovid19-api.vercel.app/api/vaksin", {
		method: "GET"
	}).then(res => res.json()).then(res => {
		let v1 = getDocById("data-v1");
		let v2 = getDocById("data-v2");

		v1.innerHTML = res.vaksinasi1.toLocaleString();
		v2.innerHTML = res.vaksinasi2.toLocaleString();
	})
}