var data = [
    {
        "id": "1",
        "name": "RIVAL STANDARD B2 WEIGHT BENCH",
        "category": "Weight Lift",
        "discription": "The Bodytone Urethane Dumbbells have been specifically designed to adapt to the use of free weight in fitness clubs.",
        "discription2": "These dumbbells are made of high quality steel and a Urethane coating to mitigate the impact of them against supports, floors, and even against the athlete himself, so that the comfort during use increases.",
        "price": "Euro 20",
        "features": {
            "feature1": "Bodytone",
            "feature2": "BT Strength",
            "feature3": "free weights"
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
        "name": "RIVAL STANDARD B2 WEIGHT BENCH",
        "category": "Home Gym",
        "discription": "The Rival Standard B2 Weight Training Bench is a professional multifunctional bench for intense and versatile strength training. The weight bench is a real all-rounder. Whether it is sit-ups, butterflies, bench presses or leg curls – the training bench offers you a variety of possibilities.",
        "discription2": "With the incline bench, you can effectively strengthen numerous muscles at home. Abdomen, legs, biceps, chest, back, shoulder or triceps - you can train your entire body.",
        "price": "Euro 97",
        "features": {
            "feature1": "- Maximum load of 80kg",
            "feature2": "- Adjustable leg trainer",
            "feature3": "- Dimensions: L 147x W 123x 119 H cm"
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
        "name": "NORDICTRACK T5.5 S TREADMILL",
        "category": "Exercise Treadmill",
        "discription": "Take your home cardio workouts up a level with the NordicTrack T5.5 S Folding Treadmill. Equipped with a 5” high contrast multi-colour display, a top speed of 19kph, max inclines of 12%, Flex Select™ cushioning and iFIT connectivity, the T5.5 S is a wise investment for the home gym.",
        "discription2": "The tread belt of the NordicTrack T5.5 S measures 51 x 140 cm and, powered by a 2.75 CHP drive system, is capable of reaching speeds of up to 19kph and inclines of up to 12%, both adjustable mid-run with digital quick controls. The deck is responsive and comfortable, enhanced by NordicTrack’s Flex Select™ cushioning system that can either soften the impact on your joints or replicate a real road-running experience. You can find all of your important workouts metrics on the 5” high contrast multi-colour display, and by downloading the iFIT app to your smart device (not included) and you can access an expanding library of trainer-led workouts, automatically track your progress, replicate real-life runs with Google Maps™, compete with your friends and custom tailor your training to your specific goals (30-day iFIT Family subscription included*).",
        "price": "Euro 990",
        "features": {
            "feature1": "5” High Contrast Multi-Color Display",
            "feature2": "Digital Quick Speed Control 0-19 KPH",
            "feature3": "Digital Quick Incline Control +12%"
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
    data.forEach((equipment)=>{
        var ele = `<div class="col">
            <div class="card" style="width: 18rem;">
                <img src="`+equipment.media[0].url+`" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">`+equipment.name+`</h5>
                <a href="./product.html?id=`+equipment.id+`" class="btn btn-primary">Details</a>
                </div>
            </div>
        </div>`;
        document.querySelector(`.products`).innerHTML = document.querySelector(`.products`).innerHTML + ele
    })
}

function showDetail() {
    var id = document.location.search.split("=")[1];
    data.forEach((equipment)=>{
        if (equipment.id == id) {
            var ele = `
            <!-- Left Column /  Image -->
            <div class="left-column">
                <img data-image="red" class="active" src="`+equipment.media[0].url+`" alt="">
            </div>
      
      
            <!-- Right Column -->
            <div class="right-column">
      
              <!-- Product Description -->
              <div class="product-description">
                <span>`+equipment.category+`</span>
                <h1>`+equipment.name+`</h1>
                <p>`+equipment.discription+`</p>
                <p>`+equipment.discription2+`</p>
              </div>
      
              <!-- Product Configuration -->
              <div class="product-configuration">
      
                <!-- Cable Configuration -->
                <div class="cable-config">
                  <span>Features</span>
      
                  <div class="cable-choose">
                    <button>Straight</button>
                    <button>Coiled</button>
                    <button>Long-coiled</button>
                  </div>
      
                  <a href="#">How to improve your muscle</a>
                </div>
              </div>
      
              <!-- Product Pricing -->
              <div class="product-price">
                <span>`+equipment.price+`</span>
                <a href="#" class="cart-btn">Add to cart</a>
              </div>
            </div>
            `;
        document.querySelector(`.items`).innerHTML = document.querySelector(`.items`).innerHTML + ele
        }
    })
}