function photoClicked(){
    console.log("Photo was clicked");
alert("This is my phone number: Daniel Dmitrzak 07958647324");
}
// ===== 🖼️ PUT YOUR IMAGE FILES HERE =====
const images = [
"C:\Users\Maurycy\Desktop\Portfolio\WhatsApp Image 2026-11-21 at 08.16.31 (5).jpeg",
"C:\Users\Maurycy\Desktop\Portfolio\WhatsApp Image 2026-11-21 at 08.16.31.jpeg",
"C:\Users\Maurycy\Desktop\Portfolio\WhatsApp Image 2026-11-21 at 08.16.31 (1).jpeg",
"C:\Users\Maurycy\Desktop\Portfolio\WhatsApp Image 2026-11-21 at 08.16.31 (4).jpeg",
"C:\Users\Maurycy\Desktop\Portfolio\WhatsApp Image 2026-11-21 at 08.16.31 (2).jpeg",
"C:\Users\Maurycy\Desktop\Portfolio\WhatsApp Image 2026-11-21 at 08.16.31 (3).jpeg"
];
let current = 0;
const box = document.getElementById("stack");

const style = document.createElement("style");
style.textContent = `
  #stack {
    width: 400px;
    max-width: 90vw;
    height: 500px;
    max-height: 75vh;
    position: relative;
    margin: 40px auto;
  }
  #stack img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 28px;
    color: white;
    background: rgba(0,0,0,0.5);
    border: none;
    padding: 10px 14px;
    cursor: pointer;
    z-index: 99;
    border-radius: 6px;
  }
  #prev { left: -60px; }
  #next { right: -60px; }
  @media (max-width: 600px) {
    #prev { left: 5px; }
    #next { right: 5px; }
  }
`;
document.head.appendChild(style);


images.forEach((src, i) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "Image " + (i + 1);
  box.appendChild(img);
});

const imgList = box.querySelectorAll("img");


const prevBtn = document.createElement("button");
prevBtn.className = "arrow";
prevBtn.id = "prev";
prevBtn.innerHTML = "&#10094;";
prevBtn.onclick = () => show(current - 1);
box.appendChild(prevBtn);

const nextBtn = document.createElement("button");
nextBtn.className = "arrow";
nextBtn.id = "next";
nextBtn.innerHTML = "&#10095;";
nextBtn.onclick = () => show(current + 1);
box.appendChild(nextBtn);


function show(n) {
  if (n < 0) n = images.length - 1;
  if (n >= images.length) n = 0;
  current = n;

  imgList.forEach((img, i) => {
    const distance = (i - current + images.length) % images.length;
    if (distance === 0) {
      
      img.style.transform = "translate(0, 0) scale(1)";
      img.style.opacity = "1";
      img.style.zIndex = 10;
    } else if (distance <= 3) {
      
      img.style.transform = `translate(${distance * 14}px, ${distance * 14}px) scale(${1 - distance * 0.06})`;
      img.style.opacity = 1 - distance * 0.25;
      img.style.zIndex = 10 - distance;
    } else {
      img.style.opacity = "0";
      img.style.zIndex = 0;
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") show(current - 1);
  if (e.key === "ArrowRight") show(current + 1);
});

show(0);