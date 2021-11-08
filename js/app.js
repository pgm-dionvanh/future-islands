(() => {
    const app = {
        loopNavigation() {
            console.log("Create Navigation")
            return NavigationArray.map((item) => {
                if(item.type === "internal"){
                    if(item.name === "koop tickets")
                        return $('.navmenu').append($(`<li class="nav__item lastchild"><a class="lastchild" href="${item.link}" target="_blank">${item.name}</a></li>`)) /* todo external class */
                    else
                        return $('.navmenu').append($(`<li class="nav__item"><a href="${item.link}" target="_blank">${item.name}</a></li>`)) /* todo external class */
                } else {
                    return $('.navmenu').append($(`<li class="nav__item"><a href="${item.link}" target="_blank">${item.name}</a></li>`)) /* todo external class */
                }
            }).join('')
        },
        loopLineUp() {
            console.log("Create LineUp");
            return LineUpArray.map((item) => {
                const ArtistPlayDay = days[new Date(item.from).getDay()];
                return $('.test').append($(`
                <div class="lineup__info">
                    <img src="${item.artist.picture.small}" alt="">
                    <div>
                        <span>${ArtistPlayDay}</span>
					    <span></span>
                    </div>
                </div>
                `));
            });
        },
        Initialize() {
            console.log("Initialize app");
            this.loopNavigation();
            this.loopLineUp();
        }
    }

    app.Initialize(); /* Initialize app */



})();