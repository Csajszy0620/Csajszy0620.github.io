var imagesData = [
    {
        photo: "images/claryfray.jpg",
        thumb: "images/thumbnails/claryfraythumb.jpg",
        title: "Clary Fray",
        description: "Clary a női főszereplő. Erős, okos és állhatatos művészlélek, aki legjobb barátja, Simon oldalán érzi jól magát. Nem tudja magáról sokáig, hogy árnyvadász. A hír, az édesanyja elrablása, és a piszkosul jóképű, de annál nagypofájúbb Jace Wayland felforgatják az addig békésnek hitt életét."
    },
    {
        photo: "images/jacewayland.jpg",
        thumb: "images/thumbnails/jacewaylandthumb.jpg",
        title: "Jace Wayland",
        description: "Gyerekként került a Lightwood családhoz, előtte apja, a rettegett Valentine nevelte őt, igaz, álnéven. Jace jóképű fiatal felnőtt lett, erre büszke is, igencsak nagyképű. Hamar belezúg Clarybe, és úgy dönt, mindent megtesz, hogy megmentse a lányt. Testvéri kapcsolat fűzi Alechez és Isabellehez."
    },
    {
        photo: "images/simonlewis.jpg",
        thumb: "images/thumbnails/simonlewisthumb.jpg",
        title: "Simon Lewis",
        description: "Clary legjobb barátja zsidó családból származik, imádja a videójátékokat és az animéket, és zenél is. Évek óta mélységesen szerelmes Clarybe, a legjobb barátjába, és szeretné, ha történhetne köztük valami, de az árnyvadász világ megismerése, és a csinos Isabelle felbukkanása némiképp megnehezítheti ezt."
    },
    {
        photo: "images/isabellelightwood.jpg",
        thumb: "images/thumbnails/isabellelightwoodthumb.jpg",
        title: "Isabelle Lightwood",
        description: "Gyönyörű, de veszélyes. Isabelleről senki se hinné, hogy profi a démonölésben, és kevés nála kitartóbb, szenvedélyesebb árnyvadász létezik. Elkötelezetten védi a családját, igyekszik mindig a legjobb döntéseket meghozni, de szerelmi téren gyakran mellényúl. Annak sem örül túlzottan, hogy felfigyel Simonra."
    },
    {
        photo: "images/aleclightwood.jpg",
        thumb: "images/thumbnails/aleclightwoodthumb.jpg",
        title: "Alec Lightwood",
        description: "Mindig is próbálta eltitkolni, de szerelmes Jace-be, a fogadott bátyjába, aki egyben a legjobb barátja is. Alec higgadt, megfontolt, tökéletesen megbízható, de az idegenekkel szemben bizalmatlan, Clary pedig nem csak féltékenységet gerjeszt benne, hanem felkelti a veszélyérzetét is. Amint megismeri a jóképű Magnus Banet, kénytelen újragondolni életfilozófiáját."
    },
    {
        photo: "images/magnusbane.jpg",
        thumb: "images/thumbnails/magnusbanethumb.jpg",
        title: "Magnus Bane",
        description: "Ő az egyik leghatalmasabb boszorkánymester, különleges erők birtokában van. Évszázadok óta él, különc a maga módján: divatőrült, szeret a középpontban lenni és élvezi, ha zajlanak az események. Egyből felfigyel Alecre, noha megfogadta, nem kezd többet árnyvadásszal."
    },
    {
        photo: "images/raphaelsantiago.jpg",
        thumb: "images/thumbnails/raphaelsantiagothumb.jpg",
        title: "Raphael Santiago",
        description: "Fiatalon lett vámpírrá, és ő lett a new yorki vámpírklán vezetője."
    },
]

var currentPhoto = 0
var activeIndex = currentPhoto

var loadImageContainer = function(currentPhoto) {
    $("#photo").attr("src", imagesData[currentPhoto].photo)
    $("#image-title").text(imagesData[currentPhoto].title)
    $("#image-description").text(imagesData[currentPhoto].description)
}

function loadThumbnails(itemData, index) {
    $("#thumbnails-container").append(
        `<div class="thumbnail-box">
            <img class="thumbnail" data-idx="${index}" src="${itemData.thumb}">
            <p class="title">${itemData.title}</p>
        </div>`
    )
}

loadImageContainer(currentPhoto)
imagesData.forEach(loadThumbnails)
$(`.thumbnail[data-idx="${activeIndex}"]`).css({"box-shadow": "0 4px 8px black"})

$("#arrow-left").click(function() {
    activeIndex = currentPhoto
    if(currentPhoto > 0) {
        currentPhoto--
    } else {
        currentPhoto = imagesData.length - 1
    }
    loadImageContainer(currentPhoto)
    activeThumbnail(activeIndex)
})

$("#arrow-right").click(function() {
    activeIndex = currentPhoto
    if(currentPhoto < imagesData.length - 1) {
        currentPhoto++
    } else {
        currentPhoto = 0
    }
    loadImageContainer(currentPhoto)
    activeThumbnail(activeIndex)
})

$(".thumbnail").click(function(event) {
    activeIndex = currentPhoto
    var idxClicked = $(event.target).attr("data-idx")
    var idxNumber = parseInt(idxClicked)
    currentPhoto = idxNumber
    activeThumbnail(activeIndex)
    loadImageContainer(currentPhoto)
})

function activeThumbnail (activeIndex) {
    $(`.thumbnail[data-idx="${activeIndex}"]`).removeAttr("style")
    activeIndex = currentPhoto
    $(`.thumbnail[data-idx="${activeIndex}"]`).css("box-shadow", "0 4px 8px black")
}