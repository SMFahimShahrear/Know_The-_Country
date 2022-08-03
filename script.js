let country ={
    fetchInfo: function(city){
        fetch("https://restcountries.com/v3.1/name/" + city + "?fullText=true") //For Search by full Name Only 
        // fetch("https://restcountries.com/v3.1/name/" + city )
        .then((response) => response.json())
        .then((data) => this.displayInfo(data));
    },
    displayInfo: function(data){
        console.log(data[0]);
        const officialName  = data[0].name.official;
        const area  = data[0].area;
        const capital = data[0].capital[0];
        const continents = data[0].continents[0];
        const population = data[0].population;
        const flag = data[0].flags.png;
        const languages = Object.values(data[0].languages);
        document.querySelector(".cityName").innerText =  officialName;
        document.querySelector(".icon").src = flag;
        document.querySelector(".capital").innerText = "Capital:  " + capital;
        document.querySelector(".area").innerText = "Area:  " + area + " Square Kilometers";
        document.querySelector(".continents").innerText = "Continents:  " + continents;
        document.querySelector(".population").innerText = "Population:  " + population;
        document.querySelector(".languages").innerText = "Languages:  " + languages;
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + document.querySelector(".searchbar").value + "')";
    },
    search: function(){
            this.fetchInfo(document.querySelector(".searchbar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function(){
    country.search();
    document.querySelector(".mainContainer").classList.remove("notSearched");
});


document.querySelector(".searchbar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        country.search(); 
        document.querySelector(".mainContainer").classList.remove("notSearched");
    }
})