const dropDown1 = document.querySelector(".down-1");
const dropDown2 = document.querySelector(".down-2");
const dropDown3 = document.querySelector(".down-3");
const dropDown4 = document.querySelector(".down-4");
const takeUp1 = document.querySelector(".up-1");
const takeUp2 = document.querySelector(".up-2");
const takeUp3 = document.querySelector(".up-3");
const takeUp4 = document.querySelector(".up-4");
const para1 = document.querySelector(".hide-para-1");
const para2 = document.querySelector(".hide-para-2");
const para3 = document.querySelector(".hide-para-3");
const para4 = document.querySelector(".hide-para-4");

dropDown1.addEventListener("click", (e) => {
  e.preventDefault();
  para1.style.cssText = "display: block;";
  takeUp1.style.cssText = "display: block; color: hsl(0,94%,66%)";
  dropDown1.style.cssText = "display: none;";
});

dropDown2.addEventListener("click", (e) => {
  e.preventDefault();
  para2.style.cssText = "display: block;";
  takeUp2.style.cssText = "display: block; color: hsl(0,94%,66%)";
  dropDown2.style.cssText = "display: none;";
});

dropDown3.addEventListener("click", (e) => {
  e.preventDefault();
  para3.style.cssText = "display: block;";
  takeUp3.style.cssText = "display: block; color: hsl(0,94%,66%)";
  dropDown3.style.cssText = "display: none;";
});

dropDown4.addEventListener("click", (e) => {
  e.preventDefault();
  para4.style.cssText = "display: block;";
  takeUp4.style.cssText = "display: block; color: hsl(0,94%,66%)";
  dropDown4.style.cssText = "display: none;";
});

takeUp1.addEventListener("click", (e) => {
  e.preventDefault();
  para1.style.cssText = "display: none;";
  takeUp1.style.cssText = "display: none;";
  dropDown1.style.cssText = "display: block;";
});

takeUp2.addEventListener("click", (e) => {
  e.preventDefault();
  para2.style.cssText = "display: none;";
  takeUp2.style.cssText = "display: none;";
  dropDown2.style.cssText = "display: block;";
});

takeUp3.addEventListener("click", (e) => {
  e.preventDefault();
  para3.style.cssText = "display: none;";
  takeUp3.style.cssText = "display: none;";
  dropDown3.style.cssText = "display: block;";
});

takeUp4.addEventListener("click", (e) => {
  e.preventDefault();
  para4.style.cssText = "display: none;";
  takeUp4.style.cssText = "display: none;";
  dropDown4.style.cssText = "display: block;";
});

const verifyBar = document.querySelector("#email");
const emailBox = document.querySelector("#email-box");
const error = document.querySelector(".error-img");
const submitEmail = document.querySelector("#contact-btn");
const errorMsg = document.querySelector(".error-msg");

submitEmail.addEventListener("click", (e) => {
  e.preventDefault();
  const emailVerify = verifyBar.checkValidity();
  if (verifyBar.value === "" || !emailVerify) {
    error.style.cssText = "display: block";
    errorMsg.style.cssText = "display: block";
    emailBox.style.cssText = "border: 3px solid hsl(0, 94%, 66%);";
    console.log("Nah If console log");
    setTimeout(() => {
      error.style.cssText = "display: none";
      errorMsg.style.cssText = "display: none";
      emailBox.style.cssText = "border: none";
    }, 3000);
  } else {
    verifyBar.value = "";
  }
});

const featureContent = document.querySelector("#features-content");
const tab1 = document.querySelector(".tab-1");
const tab2 = document.querySelector(".tab-2");
const tab3 = document.querySelector(".tab-3");

tab1.addEventListener("click", (e) => {
  tab1.style.cssText = "border-bottom: 3px solid hsl(0, 94%, 66%);";
  tab2.style.cssText = "border-bottom: none;";
  tab3.style.cssText = "border-bottom: none;";
  featureContent.innerHTML = ` 
  <div id="features-content">
    <div id="tab-img-1">
      <img src="illustration-features-tab-1.svg" alt="" />
    </div>
    <div id="second-text">
      <h2>Bookmark in one click</h2>
      <p>
        Organize your bookmarks however you like. Our simple drag-and-drop
        interface gives you complete control over how you manage your
        favourite sites.
      </p>
      <button class="info-btn">More Info</button>
    </div>
  </div>
  `;
});

tab2.addEventListener("click", (e) => {
  tab2.style.cssText = "border-bottom: 3px solid hsl(0, 94%, 66%);;";
  tab1.style.cssText = "border-bottom: none;";
  tab3.style.cssText = "border-bottom: none;";
  featureContent.innerHTML = ` 
  <div id="features-content">
    <div id="tab-img-1">
      <img src="illustration-features-tab-2.svg" alt="" />
    </div>
    <div id="second-text">
      <h2>Intelligent search</h2>
      <p>
        Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.
      </p>
      <button class="info-btn">More Info</button>
    </div>
  </div>
  `;
});

tab3.addEventListener("click", (e) => {
  tab3.style.cssText = "border-bottom: 3px solid hsl(0, 94%, 66%);";
  tab1.style.cssText = "border-bottom: none;";
  tab2.style.cssText = "border-bottom: none;";
  featureContent.innerHTML = ` 
  <div id="features-content">
    <div id="tab-img-1">
      <img src="illustration-features-tab-3.svg" alt="" />
    </div>
    <div id="second-text">
      <h2>Share your bookmarks</h2>
      <p>
        Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.
      </p>
      <button class="info-btn">More Info</button>
    </div>
  </div>
  `;
});
