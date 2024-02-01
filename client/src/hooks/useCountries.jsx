import countries from "world-countries"; 
import  "../../node_modules/flag-icon-css/css/flag-icons.css";
// import flagIconCss from "flag-icon-css"


// Format countries with flags
const formattedCountries = countries.map((country) => ({
  value: country.name.common,
  label: `${country.name.common} ${country.flag} `,
  // label: `${country.name.common} ${country.flag} `,
  latlng: country.latlng,
  region: country.region,

}));

const useCountries = () => {
  const getAll = () => formattedCountries;
  return { getAll };
};


export default useCountries

