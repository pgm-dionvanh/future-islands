(() => {
const NavigationArray = [
    {
        name: "Sahin zijn ma",
        link: "hallo.com",
        type: "internal"
    }
];

const app = {
    loopNavigation() {
        for (item of NavigationArray){
            console.log(item);
        }
    },
    
    Initialize() {
        this.loopNavigation();
    }
}

app.Initialize(); /* Initialize app */



})();