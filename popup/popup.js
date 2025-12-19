document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const emojiGrid = document.getElementById('emoji-grid');
  const copyStatus = document.getElementById('copy-status');
  
  // Load emoji data
  fetch(chrome.runtime.getURL('emojis.json'))
    .then(response => response.json())
    .then(emojis => {
      // Display all emojis initially
      displayEmojis(emojis);
      
      // Search functionality
      searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredEmojis = emojis.filter(emoji => 
          emoji.name.toLowerCase().includes(searchTerm)
        );
        displayEmojis(filteredEmojis);
      });
    });

  function displayEmojis(emojis) {
    emojiGrid.innerHTML = '';
    
    emojis.forEach(emoji => {
      const emojiItem = document.createElement('div');
      emojiItem.className = 'emoji-item';
      emojiItem.textContent = emoji.emoji;
      emojiItem.title = emoji.name;
      
      emojiItem.addEventListener('click', function() {
        copyToClipboard(emoji.emoji);
        showCopyStatus(`Copied: ${emoji.emoji}`);
      });
      
      emojiGrid.appendChild(emojiItem);
    });
  }

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).catch(err => {
      console.error('Could not copy text: ', err);
    });
  }

  function showCopyStatus(message) {
    copyStatus.textContent = message;
    setTimeout(() => {
      copyStatus.textContent = '';
    }, 2000);
  }
});