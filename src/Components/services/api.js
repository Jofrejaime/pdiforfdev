import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:3001",
});
export const API_URL = "http://localhost:3001";
export const filesUrl = API_URL + '/files';

export function TOKEN_POST(body) {
  return {
    url: API_URL + "/session",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}
export function TOKEN_VALIDATE_POST(token){
 return {
    url: API_URL + "/userT",
    options: {
      method: "GET",
      headers: {
        authorization: 'Bearer ' + token,
      }
    },
  }
}
 export function GET_USERS(){
  return {
    url: API_URL + "/user",
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    },
  };

 }
export function USER_GET(token) {
  return {
    url: API_URL + "/userT",
    options: {
      method: "GET",
      headers: {
        authorization: 'Bearer ' + token,
      }
    },
  };
}

export function GET_AREAS(){
  return {
    url: API_URL + "/area",
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    },
  };
}
export function GET_LANGUAGES(){

  return {
    url: API_URL + "/language",
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    },
  };
}
export function GET_COUNTRIES(){

  return {
    url: API_URL + "/country",
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    },
  };
}
export function GET_TOOLS(){

  return {
    url: API_URL + "/tool",
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    },
  };
}
export function  USER_CREATE(body){
return{
  url: API_URL + "/user",
  options: {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }, body:body
  },
}; 
}

export function GET_PROJECTS({
  language,
  area,
  user,
  tool,
  limit,
}){
  return {
    url: API_URL + "/tool",
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    },
  };
}

export default api;
