export class User {
    constructor(infoUser) {
        this.present = false
        this.titre = infoUser[0] + ' ' + infoUser[2] + ' ' + infoUser[3]
        this.years = infoUser[5] + "years old"
        this.location = infoUser[3] + ' ' + infoUser[4]
        this.email = infoUser[6];
        this.img = infoUser[7];
        this.element = `<div class="user" data-present="false">
		<img src="${this.img}">
		<div class="user--info">
				<h1>${this.titre}</h1>
				<p>${this.years}</p>
				<p>${this.location}</p>
		</div>
		<a href="mailto:mareike.${this.email}">
				<span class="mail">✉️</span>
		</a>
         </div>`
        this.render()

    }
//
    render() {
        document.querySelector("main").insertAdjacentHTML("beforeend", this.element)

    };

}

