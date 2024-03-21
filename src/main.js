var data = [
    {
        "id": "1",
        "name": "Dumbel",
        "model": "i4",
        "make": "BMW",
        "year": "2017",
        "price": "27,000",
        "spec": {
            "transmission": "auto",
            "engin": "iDrive40",
            "horsepower": "360"
        },
        "media": [
            {
                "url": "https://s3.us-east-2.amazonaws.com/s3.zerustproducts.com/wp-content/uploads/2021/07/28193021/AdobeStock_294620656.jpeg",
                "type": "image"
            },
            {
                "url": "some-video-url",
                "type": "video"
            }
        ]
    },
    {
        "id": "2",
        "name": "Beanch",
        "model": "iX",
        "make": "Ferari",
        "year": "2020",
        "price": "77,000",
        "spec": {
            "transmission": "auto",
            "engin": "iDriveX",
            "horsepower": "560"
        },
        "media": [
            {
                "url": "https://www.elverys.ie/medias/C1-000000000001119267-636Wx636H?context=bWFzdGVyfGltYWdlc3wxMDk0Nzh8aW1hZ2UvanBlZ3xhRE5qTDJoaU1TOHhNRGc0TURNeU5qTXdNemMzTkM5RE1WOHdNREF3TURBd01EQXdNREV4TVRreU5qZGZOak0yVjNnMk16Wkl8MTJlZjMzZDJhZDBjODFkMTNmM2VmNWYwMGU3ZmVjNDM3ZWYzNzY5MDczM2IzYTAwMzEyNGRhOTVmZmIzYzBhZA",
                "type": "image"
            },
            {
                "url": "some-video-url",
                "type": "video"
            }
        ]
    },
    {
        "id": "3",
        "name": "Bicycle",
        "model": "iX",
        "make": "Ferari",
        "year": "2020",
        "price": "77,000",
        "spec": {
            "transmission": "auto",
            "engin": "iDriveX",
            "horsepower": "560"
        },
        "media": [
            {
                "url": "https://benysports-static.myshopblocks.com/images/2019/06/resize/1024x1024/9ee9fae5127ff6783f2734b77ceba4af.jpg",
                "type": "image"
            },
            {
                "url": "some-video-url",
                "type": "video"
            }
        ]
    }
];

function loadData() {
    data.forEach((car)=>{
        var ele = `<div class="col">
            <div class="card" style="width: 18rem;">
                <img src="`+car.media[0].url+`" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">`+car.name+`</h5>
                <p class="card-text">`+car.make+`</p>
                <a href="./product.html?id=`+car.id+`" class="btn btn-primary">Details</a>
                </div>
            </div>
        </div>`;
        document.querySelector(`.products`).innerHTML = document.querySelector(`.products`).innerHTML + ele
    })
}

function showDetail() {
    var id = document.location.search.split("=")[1];
    data.forEach((car)=>{
        if (car.id == "2") {
            var el = `
            <img style="width: 100%; " src="https://media.ed.edmunds-media.com/bmw/m4/2022/oem/2022_bmw_m4_coupe_competition_fq_oem_1_1600.jpg">
            <p style="font: 1.2rem;">Hellow World</p> `;

            document.querySelector(`boxes`).innerHTML = document.querySelector(`boxes`).innerHTML + el;
        }
        else if (car.id == id) {
            document.querySelector('p.name').innerHTML = car.name;
        }
    })
}