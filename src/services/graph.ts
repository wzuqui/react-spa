import { graphConfig } from '../authConfig';

export async function callMsGraph(accessToken: string) {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append('Authorization', bearer);

  const options = {
    method: 'GET',
    headers: headers,
  };

  return fetch(graphConfig.graphMeEndpoint, options)
    .then(
      response =>
        response.json() as any as GraphApi.MeResponse
    )
    .catch(error => console.log(error));
}

export async function callMsGraphPhoto(
  accessToken: string
) {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append('Authorization', bearer);
  headers.append('Content-Type', 'image/*');

  const options = {
    method: 'GET',
    headers: headers,
  };

  return fetch(graphConfig.graphPhotoEndpoint, options)
    .then(async response => await response.blob())
    .catch(error => console.log(error));
}
