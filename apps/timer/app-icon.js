// app-icon.js
(function() {
  // Define the icon as a 24x24 pixel 1-bit image (black & white)
  const icon = E.toArrayBuffer(atob(`
    // Base64-encoded 24x24 1-bit BMP image data
    AAABAAMAEBAAAAEAIABoBAAAJgAAABACAAACAAAAAgIAAAAAAA
    MAAAAAAAAAAAAAAAA//8AAP//AAD//wAA/4YAAHiOAAAfzwAA
    H+gAAP/MAADz8wAA8/sAAP/7AAD//wAA//8AAP//AAD//wAA
    //8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==
  `));

  // Expose the icon globally for the app loader
  global.APP_ICON = icon;
})();
