import axios from "axios";

export interface ApiCall {
  baseURL: string;
}

export const TOKEN_TYPE = "bearer";

const request = async (params: any) => {
  try {

    return axios({
      ...params,
      headers: {
        ...params?.headers,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

const apis = ({ baseURL }: ApiCall) => ({
  get: (props: any | {}) =>
    request({
      baseURL,
      ...props,
      method: "GET",
    }),
  post: (props: any) =>
    request({
      baseURL,
      ...props,
      method: "POST",
    }),
  put: (props: any) =>
    request({
      baseURL,
      ...props,
      method: "PUT",
    }),
  patch: (props: any) =>
    request({
      baseURL,
      ...props,
      method: "PATCH",
    }),
  delete: (props: any) =>
    request({
      baseURL,
      ...props,
      method: "DELETE",
    }),
});


export default apis;