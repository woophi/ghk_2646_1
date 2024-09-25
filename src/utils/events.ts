declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

type Payload = {
  credit_sum: number;
  credit_period: number;
};

export const sendDataToGA = async (payload: Payload) => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      'https://script.google.com/macros/s/AKfycbxcHgrbrpJDGqapkLM5baYBX40Q4CotD5cxxU-4_mdpm86bxbBXSESz1AkW_G-ubZWb/exec',
      {
        redirect: 'follow',
        method: 'POST',
        body: JSON.stringify({ date, ...payload, variant: 'var1' }),
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      },
    );
  } catch (error) {
    console.error('Error!', error);
  }
};
