// export interface ResponseData {
//   results?: any;
//   data?: any;
// }

// interface ErrorResponse {
//   data?: any;
// }

export const handleResponse = (response: Response): any => {
  // if (response.body) {
  //   return response.body;
  // }
  return response.json();
};

export const handleError = (error: any): any => {
  // if (error.data) {
  //   return error.data;
  // }
  return error.json();
};
