(() => {

/* Navigation array */
const NavigationArray = [
    {
        name: "Test",
        link: "hallo.com",
        type: "internal"
    },
    {
        name: "Test",
        link: "hallo.com",
        type: "internal"
    }
];

const app = {
    loopNavigation() {
        for (item of NavigationArray){
            /* Usage of jquery */
            $('#NavigationList').append($(`<li><a>${item.name}</a></li>`));
        }
    },
    
    Initialize() {
        this.loopNavigation();
    }
}

app.Initialize(); /* Initialize app */



})();