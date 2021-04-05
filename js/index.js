const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

for(let i = 0; i<6;){
  let item = document.querySelectorAll('a')[i];
  item.textContent = siteContent["nav"][`nav-item-${++i}`];
}

let a1 = document.createElement("a");
a1.setAttribute("href","#");
a1.textContent = "Location"
document.querySelector("nav").appendChild(a1);

let a2 = document.createElement("a");
a2.setAttribute("href","#");
a2.textContent = "Apply";
document.querySelector("nav").prepend(a2);

document.querySelectorAll("a").forEach(link=>link.style.color="green");

{
  let section  = document.querySelector(".cta");
  
  let heading = section.querySelector("h1");
  heading.innerHTML = siteContent["cta"]["h1"].replaceAll(" ","<br>");

  let button = section.querySelector("button");
  button.textContent = siteContent["cta"]["button"];
  
  section.querySelector("#cta-img").setAttribute("src",siteContent["cta"]["img-src"]);
}

{
  let section = document.querySelector(".main-content");
  section.querySelector("#middle-img").setAttribute("src",siteContent["main-content"]["middle-img-src"]);
  for(let i =0;i<5;i++){
    switch(i){
      case 0:
        setContent(i,"features-h4","features-content",section);
        break;
      case 1:
        setContent(i,"about-h4","about-content",section);
        break;
      case 2:
        setContent(i,"services-h4","services-content",section);
        break;
      case 3:
        setContent(i,"product-h4","product-content",section);
        break;
      case 4:
        setContent(i,"vision-h4","vision-content",section);
        break;
      default: {
        console.log(`Something is wrong`);
      }  
    }
  }
  function setContent(index,key1,key2,section){
    let div = section.querySelectorAll(".text-content")[index];
    let h4 = div.querySelector("h4");
    h4.textContent = siteContent["main-content"][key1];
    let p = div.querySelector("p");
    p.textContent = siteContent["main-content"][key2];
  }
}

{
  let section = document.querySelector(".contact");
  let h4 = section.querySelector("h4");
  h4.textContent = siteContent["contact"]["contact-h4"];
  let address = section.querySelectorAll("p")[0];
  address.textContent = siteContent["contact"]["address"];
  let phone = section.querySelectorAll("p")[1];
  phone.textContent = siteContent["contact"]["phone"];
  let email = section.querySelectorAll("p")[2];
  email.textContent = siteContent["contact"]["email"];
}

let footer = document.querySelector("footer").querySelector("p");
footer.textContent = siteContent["footer"]["copyright"];

