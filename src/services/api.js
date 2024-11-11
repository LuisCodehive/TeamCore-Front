import axios from 'axios';


const apiClient = axios.create({
  baseURL: "https://us-central1-teamcore-retail.cloudfunctions.net/test_mobile/api",
  headers:{
    "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NzM0NzU4MTEsImV4cCI6MTcwNTAxMTgxMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.9wqriO_2Q8Xfwc9VcgMpr-2c4WVdLRJ5G6NcNaXdpuY"
  }
});

export const fetchQuestions = async () => {
  try {
    const response = await apiClient.get('/questions');
    return response.data.data;
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }
};

export const submitAnswers = async (answers) => {
  try {
    const payload = {
      date: new Date().toISOString(),
      data: answers,
    };
    console.log("payload",payload)
    await apiClient.post('/answer', payload);
  } catch (error) {
    console.error("Error submitting answers:", error);
    throw error;
  }
};
