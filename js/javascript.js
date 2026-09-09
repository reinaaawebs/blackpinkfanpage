// Audio elements
const audioElements = [
    document.getElementById('myAudio1'),
    document.getElementById('myAudio2'),
    document.getElementById('myAudio3'),
    document.getElementById('myAudio4'),
    document.getElementById('myAudio5')
  ];

  // Current audio index
  let currentAudioIndex = 0;

  // Function to shuffle the array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Shuffle the audio elements
  shuffleArray(audioElements);

  // Function to play the next audio
  function playNextAudio() {
    audioElements[currentAudioIndex].pause();
    currentAudioIndex = (currentAudioIndex + 1) % audioElements.length;
    audioElements[currentAudioIndex].play();
  }

  // Function to play audio
  function playAudio() {
    audioElements[currentAudioIndex].play();
  }

  // Event listeners for touch and mousemove
  document.addEventListener('touchstart', playAudio);
  document.addEventListener('mousemove', playAudio);

  // Event listener for visibility change
  document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
      playAudio();
    }
  });

  // Event listeners for ended audio
  audioElements.forEach(function(audioElement) {
    audioElement.addEventListener('ended', playNextAudio);
  });

  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  } 

  // Event listener for DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function () {
    // Query all sections
    const sections = document.querySelectorAll('.blackpink-member');

    // Function to fade in elements
    function fadeInElements() {
      sections.forEach(function (section) {
        const bounding = section.getBoundingClientRect();
        if (bounding.top < window.innerHeight && bounding.bottom >= 0) {
          section.classList.add('fade-in');
        } else {
          section.classList.remove('fade-in');
        }
      });
    }

    // Check on initial load
    fadeInElements(); 

    // Event listener for scroll
    window.addEventListener('scroll', fadeInElements);
  });

  function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'en,fr,ja,ko,zh-CN', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL}, 'google_translate_element');
    
}

  function translateTo(language) {
    google.translate.TranslateElement({ pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL }, 'google_translate_element');
    var selectElement = document.querySelector('.goog-te-combo');
    selectElement.value = language;
    selectElement.dispatchEvent(new Event('change'));
    
}








