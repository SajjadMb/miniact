import FormData from 'form-data';

class DashboardApi {
  static async fetchDashboard(access_token) {
    var form = new FormData();
    form.append('access_token', access_token);
    const response = await fetch('https://apagh.venice.ir/mobile/services/information/get_dashboard/',{
            method:'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: form
    }).catch((error) => {
        console.log("error",error);
        return(error);
    });
  
    const json = await response.json();
    
    return json.get_dashboard;
  }
}

export default DashboardApi;