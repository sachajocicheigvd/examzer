class t{constructor(t){this.present=!1,this.titre=t[0]+" "+t[2]+" "+t[3],this.years=t[5]+"years old",this.location=t[3]+" "+t[4],this.email=t[6],this.img=t[7],this.element=`<div class="user" data-present="false">\n\t\t<img src="${this.img}">\n\t\t<div class="user--info">\n\t\t\t\t<h1>${this.titre}</h1>\n\t\t\t\t<p>${this.years}</p>\n\t\t\t\t<p>${this.location}</p>\n\t\t</div>\n\t\t<a href="mailto:mareike.${this.email}">\n\t\t\t\t<span class="mail">✉️</span>\n\t\t</a>\n         </div>`,this.render()}render(){document.querySelector("main").insertAdjacentHTML("beforeend",this.element)}}let e=document.querySelector("main"),s=[];(async function(){return(await fetch("https://randomuser.me/api/?results=20")).json()})().then((e=>{for(let r=0;r<20;r++)s.push(new t([e.results[r].name.title,e.results[r].name.first,e.results[r].name.last,e.results[r].location.city,e.results[r].location.country,e.results[r].dob.age,e.results[r].email,e.results[r].picture.large]))})).catch((t=>console.log(t))),console.log(s);let r=0;e.addEventListener("click",(t=>{console.log(t.target),"false"==t.target.closest(".user").getAttribute("data-present")?(r++,t.target.closest(".user").setAttribute("data-present","true"),document.querySelector("body > header > p").innerHTML=`${r}/20 people are here`):(r--,t.target.closest(".user").setAttribute("data-present","false"),document.querySelector("body > header > p").innerHTML=`${r}/20 people are here`)}));
//# sourceMappingURL=index.aa5bacea.js.map
