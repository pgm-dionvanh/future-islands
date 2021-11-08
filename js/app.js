(() => {
    const app = {
        loopNavigation() {
            console.log("Create navigation")
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
                const ArtistPlayDay = new Date(item.from).getDay();

                return $('.test').append($(`<li>hi</li>`));
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