const baseUrl = "https://restcountries.com/v3.1/alpha/";

export const getCorrdinates = async (countryCode) => {
  const url = `${baseUrl}${countryCode}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error();
    }

    const data = await response.json();
    return data[0].latlng;
  } catch (erorr) {
    console.log(erorr);
    return erorr;
  }
};
