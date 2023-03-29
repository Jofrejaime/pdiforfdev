import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:3001",
});
export const API_URL = "http://localhost:3001";
export const filesUrl = API_URL + "/files/";

export function TOKEN_POST(body) {
  return {
    url: API_URL + "/session",
    options: {
      method: "POST",
      headers: {
        
        "Content-Type": "application/json",
        cache: 'no-store',
      },
      body: JSON.stringify(body),
    },
  };
}
export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + "/userT",
    options: {
      method: "GET",
      headers: {
        authorization: "Bearer " + token,
      },
    },
  };
}
export function GET_USERS() {
  return {
    url: API_URL + "/user",
    options: {
      method: "GET",
      cache: 'no-store',
      headers: {
        "Content-Type": "application/json",
      },
    },
  };
}
export function USER_GET(token) {
  return {
    url: API_URL + "/userT",
    options: {
      method: "GET",
      cache: 'no-store',
      headers: {
        authorization: "Bearer " + token,
      },
    },
  };
}

export function GET_AREAS() {
  return {
    url: API_URL + "/area",
    options: {
      method: "GET",
      cache: 'no-store',
      headers: {
        "Content-Type": "application/json",
      },
    },
  };
}
export function GET_LANGUAGES() {
  return {
    url: API_URL + "/language",
    options: {
      method: "GET",
      cache: 'no-store',
      headers: {
        "Content-Type": "application/json",
      },
    },
  };
}
export function GET_COUNTRIES() {
  return {
    url: API_URL + "/country",
    options: {
      method: "GET",
      cache: 'no-store',
      
      headers: {
        "Content-Type": "application/json",
      },
    },
  };
}
export function GET_TOOLS() {
  return {
    url: API_URL + "/tool",
    options: {
      method: "GET",
      cache: 'no-store',
      headers: {
        "Content-Type": "application/json",
      },
    },
  };
}
export function USER_CREATE(body) {
  return {
    url: API_URL + "/user",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    },
  };
}
export function DELETE_PROJECT(id) {
  return {
    url: API_URL + "/project/" + id,
    options: {
      method: "DELETE",
      headers: {
        authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    },
  };
}
export function GET_PROJECT(id) {
  return {
    url: API_URL + "/project/" + id,
    options: {
      method: "GET",
      cache: 'no-store',
      headers: {
        "Content-Type": "application/json",
      },
    },
  };
}
export function STAR_ON_PROJECT(body) {
  return {
    url: API_URL + "/project/star/" + body.userId + "&" + body.id,
    options: {
      method: "PATCH",
      headers: {
        authorization: "Bearer " + window.localStorage.getItem("token"),
        
      },
      body: body,
    },
  };
}
export function COMMENT_ON_PROJECT(id, {comment}, userId) {
  return {
    url: API_URL + "/project/comment/" + id + "&" + userId+'&'+comment,
    options: {
      method: "POST",
      headers: {
        authorization: "Bearer " + window.localStorage.getItem("token"),
      },
      body: comment,
    },
  };
}
export function GET_PROJECTS(body) {
 
  return {
    url: API_URL + "/project/get",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(body)
    },
  };

}
export function CREATE_PROJECT({
  userId,
  title,
  description,
  repository,
  userName,
  tools,
  areas,
  languages,
}) {
  return {
    url: API_URL + "/project",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        title,
        description,
        repository,
        userName,
        LanguageOfProject: languages,
        AreaOfProject: areas,
        ToolOfProject: tools,
      }),
    },
  };
}
export function POST_VIEWS(body){
  return{
    url: API_URL + '/project/view/'+body.user+'&'+body.idProject,
    options:{
      method: 'POST',
      headers:{
        "Content-Type": "application/json",
        authorization: "Bearer " + window.localStorage.getItem("token")
      }
    }
  }
}
export default api;
