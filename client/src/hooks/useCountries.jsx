import countries from "world-countries"; 
import  "../../node_modules/flag-icon-css/css/flag-icons.css";
// import flagIconCss from "flag-icon-css"

// Function to get flag class for a country
function getFlagClass(countryCode) {
  return `flag-icons flag-icons-${countryCode.toLowerCase()}`;
// label: `${country.name.common} 
//   <i class="${getFlagClass(country.cca2)}></i>
}

// Format countries with flags
const formattedCountries = countries.map((country) => ({
  value: country.name.common,
  label: `${country.name.common} ${country.flag} <i class="${getFlagClass(country.cca2)}></i>`,
  latlng: country.latlng,
  region: country.region,
//   flagIconClass: `flag-icons flag-icons-${country.cca2.toLowerCase()}`, // Class for flag-icon-css
//   flagImageUrl: flagIconCss(country.cca2, { squared: false }), // Get flag image URL

}));

const useCountries = () => {
  const getAll = () => formattedCountries;
  return { getAll };
};


export default useCountries

