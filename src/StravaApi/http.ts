export interface IHttpResponse<T> extends Response {
  Data?: T;
}

export const http = <T>(request: RequestInfo): Promise<IHttpResponse<T>> => {
  return new Promise((resolve, reject) => {
    let response: IHttpResponse<T>;
    fetch(request)
      .then(res => {
        response = res;
        let json = res.json();
        return json;
      })
      .then(body => {
        if (response.ok) {
          response.Data = body;
          resolve(response);
        }
        else {
          reject(response);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};
