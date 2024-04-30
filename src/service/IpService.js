const baseUrl = "https://geo.ipify.org/api/v2/country?apiKey=";
const apiKey = process.env.REACT_APP_API_KEY;
const params = "&ipAddress=";

const ipAddressUrl = "https://api.ipify.org?format=json";

export const getIpAddressDetails = async (ipAddress) => {
  const url = `${baseUrl}${apiKey}${params}${ipAddress}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (error) {
    return error;
  }
};

export const getUserIpAddress = async () => {
  try {
    const response = await fetch(ipAddressUrl);

    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (erorr) {
    return erorr;
  }
};
