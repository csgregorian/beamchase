(function(window, undefined) {
  var dictionary = {
    "862d1640-1e70-4bf2-8cf5-e1fe61952295": "Host Game",
    "c50b08c4-f1e4-4175-8185-92b4e811e4e9": "Menu",
    "d927292f-26b8-4e7f-84a6-da891adea2ce": "Sign Up",
    "1d125c10-f2f5-4faa-9671-ac5fd65e3fc0": "Play",
    "2b068585-8261-4c0b-a690-eaf953529ae1": "Scores",
    "70e2df30-7366-462e-ae29-2b7db5c41266": "About Us",
    "7d2b43ce-7d15-493a-b1a0-f3eafdd948d1": "Start Game",
    "02307f7e-77b5-49ac-a4d1-23c77c1916f1": "Join Game",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Intro",
    "a054fcef-1970-46fb-a7a7-87d12c3d2911": "Options",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);