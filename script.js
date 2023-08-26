document.addEventListener("DOMContentLoaded", function() {
  const facebookBtn = document.getElementById("facebookBtn");
  const googleBtn = document.getElementById("googleBtn");
  const facebookQuestions = document.getElementById("facebookQuestions");
  const googleQuestions = document.getElementById("googleQuestions");

  const campaignTitle = document.getElementById("campaignTitle");
  const adSetTitle = document.getElementById("adSetTitle");
  const adNameTitle = document.getElementById("adNameTitle");

  const campaignDropdowns = [
    document.getElementById("campaignDropdown1"),
    document.getElementById("campaignDropdown2"),
    document.getElementById("campaignDropdown3"),
    document.getElementById("campaignDropdown4"),
    document.getElementById("campaignDropdown5"),
    document.getElementById("campaignDropdown6"),
    document.getElementById("campaignDropdown7")
  ];

  var FacebookHideElements = document.getElementsByClassName("FacebookHide");

  var GoogleHideElements = document.getElementsByClassName("GoogleHide")

  const adSetDropdowns = [
    document.getElementById("adSetDropdown1"),
    document.getElementById("adSetDropdown2"),
    document.getElementById("adSetDropdown3"),
    document.getElementById("adSetDropdown4")
  ];

  const adNameDropdowns = [
    document.getElementById("adNameDropdown1"),
    document.getElementById("adNameDropdown2"),
    document.getElementById("adNameDropdown3"),
    document.getElementById("adNameDropdown4"),
    document.getElementById("adNameDropdown5")
  ];

  const GcampaignDropdowns = [
    document.getElementById("GcampaignDropdown1"),
    document.getElementById("GcampaignDropdown2"),
    document.getElementById("GcampaignDropdown3"),
    document.getElementById("GcampaignDropdown4"),
    document.getElementById("GcampaignDropdown5"),
    document.getElementById("GcampaignDropdown6"),
    document.getElementById("GcampaignDropdown7")
  ];

  const campaignResult = document.getElementById("campaignResult");
  const copyCampaignButton = document.getElementById("copyCampaignButton");

  const adSetResult = document.getElementById("adSetResult");
  const copyAdSetButton = document.getElementById("copyAdSetButton");

  const adNameResult = document.getElementById("adNameResult");
  const copyAdNameButton = document.getElementById("copyAdNameButton");

  const GcampaignResult = document.getElementById("GcampaignResult");
  const GcopyCampaignButton = document.getElementById("GcopyCampaignButton");

  // Hide section titles, dropdowns, results, and buttons initially
  campaignTitle.style.display = "none";
  adSetTitle.style.display = "none";
  adNameTitle.style.display = "none";
  campaignDropdowns.forEach(dropdown => dropdown.style.display = "none");
  campaignResult.style.display = "none";
  copyCampaignButton.style.display = "none";
  adSetDropdowns.forEach(dropdown => dropdown.style.display = "none");
  adSetResult.style.display = "none";
  copyAdSetButton.style.display = "none";
  adNameDropdowns.forEach(dropdown => dropdown.style.display = "none");
  adNameResult.style.display = "none";
  copyAdNameButton.style.display = "none";

  // Hide FacebookHideElements
  for (var i = 0; i < FacebookHideElements.length; i++) {
    FacebookHideElements[i].style.display = "none";
  }

  // Hide GoogleHideElements
  for (var i = 0; i < GoogleHideElements.length; i++) {
    GoogleHideElements[i].style.display = "none";
  }

  facebookBtn.addEventListener("click", function() {
    facebookQuestions.classList.remove("hidden");
    googleQuestions.classList.add("hidden");
    // Show the content for the Facebook Ads section
    campaignTitle.style.display = "block";
    campaignDropdowns.forEach(dropdown => dropdown.style.display = "block");
    campaignResult.style.display = "block";
    copyCampaignButton.style.display = "block";
    adSetTitle.style.display = "block";
    adSetDropdowns.forEach(dropdown => dropdown.style.display = "block");
    adSetResult.style.display = "block";
    copyAdSetButton.style.display = "block";
    adNameTitle.style.display = "block";
    adNameDropdowns.forEach(dropdown => dropdown.style.display = "block");
    adNameResult.style.display = "block";
    copyAdNameButton.style.display = "block";

    // Show FacebookHideElements
    for (var i = 0; i < FacebookHideElements.length; i++) {
      FacebookHideElements[i].style.display = "block";
    }

    // Hide GoogleHideElements
    for (var i = 0; i < GoogleHideElements.length; i++) {
      GoogleHideElements[i].style.display = "none";
    }
  });

  googleBtn.addEventListener("click", function() {
    googleQuestions.classList.remove("hidden");
    facebookQuestions.classList.add("hidden");
    // Hide the content for Google Ads
    campaignTitle.style.display = "none";
    campaignDropdowns.forEach(dropdown => dropdown.style.display = "none");
    campaignResult.style.display = "none";
    copyCampaignButton.style.display = "none";
    adSetTitle.style.display = "none";
    adSetDropdowns.forEach(dropdown => dropdown.style.display = "none");
    adSetResult.style.display = "none";
    copyAdSetButton.style.display = "none";
    adNameTitle.style.display = "none";
    adNameDropdowns.forEach(dropdown => dropdown.style.display = "none");
    adNameResult.style.display = "none";
    copyAdNameButton.style.display = "none";

    // Hide FacebookHideElements
    for (var i = 0; i < FacebookHideElements.length; i++) {
      FacebookHideElements[i].style.display = "none";
    }

    // Show GoogleHideElements
    for (var i = 0; i < GoogleHideElements.length; i++) {
      GoogleHideElements[i].style.display = "block";
    }


  });

  // Populate dropdown options and results
  const campaignOptions1 = [
      "AGENCESEPT24"
    ];
  const campaignOptions2 = [
      "FB",
      "GOOGLE",
      "LINKEDIN",
      "SNAPCHAT",
      "TIKTOK",
      "PINTEREST",
      "REDDIT"
    ];
  const campaignOptions3 = [
      "TOFU",
      "MOFU",
      "BOFU"
    ];
  const campaignOptions4 = [
      "CA",
      "US",
      "UK",
      "FR",
      "DE"
    ];
  const campaignOptions5 = [
      "FR",
      "EN",
      "FR & EN",
      "ESP",
      "ITALIAN"
    ];
  const campaignOptions6 = [
      "AWARENESS",
      "TRAFFIC",
      "ENGAGEMENT",
      "LEADS",
      "SALES",
      "APP PROMO"
    ];
  const campaignOptions7 = [
      "VIDEO VIEWS",
      "THRUPLAYS",
      "POST ENGAGEMENT",
      "REACH",
      "LEAD GEN",
      "LINK CLICK",
      "LPV",
      "CONV"
    ];
  
  const adSetOptions1 = [
      "INTEREST",
      "LOOKALIKE",
      "RETARGETING",
      "MIX",
      "BROAD"
    ];
  const adSetOptions2 = [
      "WRITE SOMETHING HERE"
    ];
  const adSetOptions3 = [
      "FR",
      "EN",
      "FR & EN",
      "ESP",
      "ITALIAN"
    ];
  const adSetOptions4 = [
      "ALL",
      "FEED",
      "STORY",
      "FEED & STORY"
    ];
  
  const adNameOptions1 = [
      "TOFU",
      "MOFU",
      "BOFU"
    ];
  const adNameOptions2 = [
      "WRITE SOMETHING HERE",
    ];
  const adNameOptions3 = [
      "STATIC",
      "VIDEO",
      "GIF",
      "CARROUSEL",
      "BOOSTED POST"
    ];
  const adNameOptions4 = [
      "LEARN MORE",
      "APPLY NOW",
      "SIGN UP",
      "SUBSCRIBE",
      "CONTACT US",
      "WATCH MORE"
    ];
    // Get taday's date
    let date = new Date().toLocaleDateString();

  const adNameOptions5 = [
      date
    ];


    // Google dropdowns
    
    const GcampaignOptions1 = [
      "AGENCESEPT24"
    ];
  const GcampaignOptions2 = [
      "GOOGLE",
      "BING"
    ];
  const GcampaignOptions3 = [
      "TOFU",
      "MOFU",
      "BOFU"
    ];
  const GcampaignOptions4 = [
      "NONE",
      "IMPRESSIONS",
      "LEADS",
      "SALES",
      "TRAFFIC"
    ];
  const GcampaignOptions5 = [
      "CA",
      "US",
      "UK",
      "FR",
      "DE"
    ];
  const GcampaignOptions6 = [
      "FR",
      "EN",
      "FR & EN",
      "ESP",
      "ITALIAN"
    ];
  const GcampaignOptions7 = [
      "LOCAL",
      "RLSA",
      "DSICOVERY",
      "YOUTUBE",
      "DSA",
      "DISPLAY",
      "SEARCH / NON BRANDED",
      "SEARCH / BRANDED"
    ];


    // Populate dropdowns
  populateDropdown(campaignDropdown1, campaignOptions1);
  populateDropdown(campaignDropdown2, campaignOptions2);
  populateDropdown(campaignDropdown3, campaignOptions3);
  populateDropdown(campaignDropdown4, campaignOptions4);
  populateDropdown(campaignDropdown5, campaignOptions5);
  populateDropdown(campaignDropdown6, campaignOptions6);
  populateDropdown(campaignDropdown7, campaignOptions7);

  populateDropdown(adSetDropdown1, adSetOptions1);
  populateDropdown(adSetDropdown2, adSetOptions2);
  populateDropdown(adSetDropdown3, adSetOptions3);
  populateDropdown(adSetDropdown4, adSetOptions4);

  populateDropdown(adNameDropdown1, adNameOptions1);
  populateDropdown(adNameDropdown2, adNameOptions2);
  populateDropdown(adNameDropdown3, adNameOptions3);
  populateDropdown(adNameDropdown4, adNameOptions4);
  populateDropdown(adNameDropdown5, adNameOptions5);

  populateDropdown(GcampaignDropdown1, GcampaignOptions1);
  populateDropdown(GcampaignDropdown2, GcampaignOptions2);
  populateDropdown(GcampaignDropdown3, GcampaignOptions3);
  populateDropdown(GcampaignDropdown4, GcampaignOptions4);
  populateDropdown(GcampaignDropdown5, GcampaignOptions5);
  populateDropdown(GcampaignDropdown6, GcampaignOptions6);
  populateDropdown(GcampaignDropdown7, GcampaignOptions7);
  // ... Rest of the code ...

  copyCampaignButton.addEventListener("click", function() {
    const campaignFreeText = document.getElementById("campaignFreeText1").value;
    const textToCopy = createFormattedString1(campaignDropdowns, campaignFreeText);
    campaignResult.textContent = textToCopy;
    copyTextToClipboard(textToCopy);
  });

  copyAdSetButton.addEventListener("click", function() {
    const textToCopy = createFormattedString(adSetDropdowns, adSetDropdown2.value);
    adSetResult.textContent = textToCopy;
    copyTextToClipboard(textToCopy);
  });
  

  copyAdNameButton.addEventListener("click", function() {
    const textToCopy = createFormattedString(adNameDropdowns, adNameDropdown2.value);
    adNameResult.textContent = textToCopy;
    copyTextToClipboard(textToCopy);
  });

  GcopyCampaignButton.addEventListener("click", function() {
    const GcampaignFreeText = document.getElementById("GcampaignFreeText1").value;
    const textToCopy = createFormattedString1(GcampaignDropdowns, GcampaignFreeText);
    GcampaignResult.textContent = textToCopy;
    copyTextToClipboard(textToCopy);
  });
  

  // ... Rest of the code ...
});

function populateDropdown(dropdown, options) {
  dropdown.innerHTML = ""; // Clear existing options
  options.forEach(option => {
    const optionElement = document.createElement("option");
    optionElement.textContent = option;
    dropdown.appendChild(optionElement);
  });
}

// Helper function to create a formatted string from dropdown selections
function createFormattedString(dropdowns, freeText) {
  const selections = dropdowns.map(dropdown => dropdown.value).filter(value => value !== "");
  
  if (freeText.trim() !== "") {
    selections.push(freeText); // Include the <textarea> value if not empty
  }

  if (freeText.trim() !== "")
  {
    selections.pop();
  }
  
  return selections.join(" - ");
}



// Helper function to copy text to clipboard
function copyTextToClipboard(text) {
  const tempInput = document.createElement("textarea");
  tempInput.style.position = "absolute";
  tempInput.style.left = "-9999px";
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

function createFormattedString1(dropdowns, freeText) {
  const selections = dropdowns.map(dropdown => dropdown.value).filter(value => value !== "");
  if (freeText.trim() !== "") {
    selections.push(freeText); // Include the <textarea> value if not empty
  }
  return selections.join(" - ");
}
