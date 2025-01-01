// home.js

let currentIndex = 0;
const slides = document.querySelectorAll('.slide'); // सभी स्लाइड्स को सेलेक्ट करें
const totalSlides = slides.length;

function nextSlide() {
    // वर्तमान स्लाइड को हटाएं और अगली स्लाइड को दिखाएं
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalSlides; // अगले स्लाइड पर जाएं (यदि आखिरी पर हैं तो पहले पर जाएं)
    slides[currentIndex].classList.add('active');
}

// हर 3 सेकंड में स्लाइड बदलें
setInterval(nextSlide, 3000); // 3000ms = 3 seconds

// शुरुआत में पहली स्लाइड को एक्टिव करें
slides[currentIndex].classList.add('active');
