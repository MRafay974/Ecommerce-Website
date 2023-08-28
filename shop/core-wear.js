document.addEventListener("DOMContentLoaded", function () {

    let description = document.querySelector("#Description")
    let additionalInfo = document.querySelector("#Additional-info")
    let rav = document.querySelector("#Reviews")
    let content = document.querySelector(".text-part")


    description.addEventListener('click', function () {
        content.innerHTML = `   <h1>Game Console Controller Cable</h1>
        <p>Hills Science Plan Healthy Development Puppy Food Large Breed with Chicken is specifically formulated
            to meet the nutritional needs of your large breed puppy to help support its growth and development.
        </p>
        <p>Made from high quality ingredients including a minimum of 34% chicken, Hills Science Plan Canine
            Puppy Large Breed is infused with:</p>
        <p>Controlled Fat and Calories – to help large breed puppies grow at the proper rate;
            Controlled Calcium – for healthy joint and bone development;
            L-carnitine – a special nutrient shown to enhance bone and muscle strength;
            High Quality Protein – to support healthy growth and strong muscles;
            Minerals – provides the optimum amount for growth and development;
            With added calcium to help keep bones and teeth strong;
            Natural Fibre – for a healthy digestive system;
            Omega 3 and 6 Fatty Acids – for a shiny, healthy coat;
            Anti-oxidants – boosts your puppys immune system, reduces cell damage and aids growth.</p>
        <hr>
        <p>The crunchy kibble will help aid your puppys dental health through the natural crunching process,
            promoting dental care from a young age.</p>
        <p>Suitable for puppies from weaning up to 1 year old whose adult body weight will exceed 25kg.</p>
        <p>Hills Science Plan Canine Puppy Large Breed is part of the Pets at Home Nutrition Centre</p>
        <p>Approximate Dimensions (Product): 42 x 15 x 20cm</p> `
    })




    additionalInfo.addEventListener('click', function () {
        content.innerHTML = `  
        <h1>Details Specifications</h1>

        <div id="container">


            <div class="box box11">
                <h1>Brand:</h1>
                <p>sony, xiaomi</p>
            </div>
            <div class="box">
                <h1>Format:</h1>
                <p>Paperback Book, 539 pages</p>
            </div>
            <div class="box box11">
                <h1>Publisher:</h1>
                <p>Pearson Education (Mar. 1st, 2012)</p>
            </div>
            <div class="box">
                <h1>Language:</h1>
                <p>English</p>
            </div>
            <div class="box box11">
                <h1>Dimensions:</h1>
                <p>8.40 x 10.70 x 0.90 inches</p>
            </div>
            <div class="box">
                <h1>ISBN-13:</h1>
                <p>9780321793911</p>
            </div>
            <div class="box box11">
                <h1>Categories: </h1>
                <p>Elementary Education</p>
            </div>
            <div class="box">
                <h1>Color:</h1>
                <p>Blue, Green, Orange, Red</p>
            </div>
            <div class="box box11">
                <h1>Size:</h1>
                <p>M, XL, XS</p>
            </div>
        </div>

    </div>
        `
    })



    rav.addEventListener('click', function () {
        content.innerHTML = `
     <h1>2 reviews for Gore Wear C7</h1>
    <div class="message1">
        <div class="user1">
            <h1>Anonymous</h1>
            <p>May 2, 2021</p>
        </div>
        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring
            which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot,
            which was created for the bliss of souls like mine. I am so happy.</p>
        <i class="fa-solid fa-heart"></i>
    </div>

    <div class="message2">
        <div class="user2">
            <h1>Anonymous</h1>
            <p>May 2, 2021</p>
        </div>
        <p>my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my
            talents.</p>
        <i class="fa-solid fa-heart"></i>
    </div>

    <div class="message3">
        <div class="user3">
            <h1>Anonymous</h1>
            <p>May 2, 2021</p>
        </div>
        <p>I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary.</p>
        <i class="fa-solid fa-heart"></i>
    </div>

    <h1 class="Review">Add a Review</h1>
    <div class="form-parta">
        <div class="frm-hading">
            <h1>Add a Comment</h1>
            <p>Your email address will not be published. Required fields are marked *</p>
        </div>

        <form class="form-section">
            <div class="form-section-a">
                <label for="name"></label>
                <input id="name" type="text" placeholder="Name(Required)" required>

                <label for="email1"></label>
                <input id="email1" type="email" placeholder="Email(Required)" required>
            </div>


            <label for="website"></label>
            <input id="website" type="text" placeholder="Website" required>

            <textarea rows="20" cols="40" id="comment" placeholder="Comment" required></textarea>


            <button id="submit1" type="submit">Submit</button>

        </form>


    </div>`
    })


    let counterValue = 1; // Initial counter value
    const counterInt = document.querySelector(".int");

    const incrementButton = document.querySelector(".pos");
    const decrementButton = document.querySelector(".neg");

    incrementButton.addEventListener("click", function () {
        counterValue++;
        counterInt.textContent = counterValue;
    });

    decrementButton.addEventListener("click", function () {
        if (counterValue > 1) {
            counterValue--;
            counterInt.textContent = counterValue;
        }
    });


    const image = document.querySelector('.zoom-image');
    const container = document.querySelector('.image-container');

    container.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = container.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        const scaleAmount = 1.2; // Adjust this value to control the zoom level

        const translateX = (width * scaleAmount - width) * x;
        const translateY = (height * scaleAmount - height) * y;

        image.style.transform = `scale(${scaleAmount}) translate(${-translateX}px, ${-translateY}px)`;
    });

    container.addEventListener('mouseleave', () => {
        image.style.transform = 'none';
    });

    /* sizes part  */

    const sizeButtons = document.querySelectorAll('.size');

    sizeButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            sizeButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to the clicked button
            this.classList.add('active');
        });
    });


    const sizeDivs = document.querySelectorAll('.size');

    // Add click event listener to each "size" div
    sizeDivs.forEach(div => {
        div.addEventListener('click', function () {
            resetSizeDivs();
            this.classList.add('active');
        });
    });

    // Add click event listener to the document to reset the "size" divs
    document.addEventListener('click', function (event) {
        const target = event.target;

        // If the clicked target is not a "size" div, reset all "size" divs
        if (!target.classList.contains('size')) {
            resetSizeDivs();
        }
    });

    // Function to reset the active state of all "size" divs
    function resetSizeDivs() {
        sizeDivs.forEach(div => {
            div.classList.remove('active');
        });
    }






})

