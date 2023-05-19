import * as rev from "lodash/reverse";

class Product {
	price: number;
	name: string;

	constructor(name: string, price: number) {
		this.price = price;
		this.name = name;
	}
	getPrice() {
		return this.price;
	}
}

class ProductoElectronico extends Product {
	useBatteries: boolean;
	apps: string[];

	constructor(name: string, price: number, useBatteries) {
		super(name, price);
		this.useBatteries = useBatteries;
	}

	setApps(apps: string[]) {
		this.apps = apps;
	}

	getAppsReverse() {
		return rev(this.apps);
	}

	setUseBatteries(usa: boolean) {
		this.useBatteries = usa;
	}
}

function main() {
	const iphone = new ProductoElectronico("iphone X", 250000, true);
	iphone.setApps(["whatsapp", "applestore", "google"]);
	console.log(iphone.apps);
	console.log(iphone.getAppsReverse());
}

main();
