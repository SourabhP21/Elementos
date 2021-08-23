speak = (str) => {
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en";
    speech.text = str;
    window.speechSynthesis.speak(speech);
    console.log("executed speak")
};


document.querySelector('#skp1')
    .addEventListener('click', function (event) {
        speak(" HYDROGEN  HELIUM ");
    });

document.querySelector('#skp2')
    .addEventListener('click', function (event) {
        speak(" LITHIUM BERYLLIUM BORON CARBON NITROGEN OXYGEN FLUORINE NEON ");
    });

document.querySelector('#skp3')
    .addEventListener('click', function (event) {
        speak(" SODIUM MAGNESIUM ALUMINUM SILICON PHOSPHORUS SULFUR CHLORINE ARGON ");
    });

document.querySelector('#skp4')
    .addEventListener('click', function (event) {
        speak(" POTASSIUM CALCIUM SCANDIUM TITANIUM VANADIUM CHROMIUM MANGANESE IRON COBALT NICKEL COPPER ZINC GALLIUM GERMANIUM ARSENIC SELENIUM BROMINE KRYPTON ");
    });
document.querySelector('#skp5')
    .addEventListener('click', function (event) {
        speak(" RUBIDIUM STRONTIUM YTTRIUM ZIRCONIUM NIOBIUM MOLYBDENUM TECHNETIUM RUTHENIUM RHODIUM PALLADIUM SILVER CADMIUM INDIUM TIN ANTIMONY TELLURIUM IODINE XENON ");
    });

document.querySelector('#skp6')
    .addEventListener('click', function (event) {
        speak(" CESIUM BARIUM. the Lanthanides");
        speak(" LANTHANUM CERIUM PRASEODYMIUM NEODYMIUM PROMETHIUM SAMARIUM EUROPIUM GADOLINIUM TERBIUM DYSPROSIUM HOLMIUM ERBIUM THULIUM YTTERBIUM LUTETIUM ");
        speak(" HAFNIUM TANTALUM TUNGSTEN RHENIUM OSMIUM IRIDIUM PLATINUM GOLD MERCURY THALLIUM LEAD BISMUTH POLONIUM ASTATINE RADON ");
    });

document.querySelector('#skp7')
    .addEventListener('click', function (event) {
        speak(" FRANCIUM RADIUM. the Actinides");
        speak(" ACTINIUM THORIUM PROTACTINIUM URANIUM NEPTUNIUM PLUTONIUM AMERICIUM CURIUM BERKELIUM CALIFORNIUM EINSTEINIUM FERMIUM MENDELEVIUM NOBELIUM LAWRENCIUM ");
        speak(" RUTHERFORDIUM DUBNIUM SEABORGIUM BOHRIUM HASSIUM MEITNERIUM DARMSTADTIUM ROENTGENIUM COPERNICIUM NIHONIUM FLEROVIUM MOSCOVIUM LIVERMORIUM TENNESSINE OGANESSON ");
    });
