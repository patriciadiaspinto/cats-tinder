import baseURL from './BaseAPI';

type VoteProps = {
  id: string;
  sub_id?: string;
  value: number;
};

export const getAllCatImages = () => {
  return baseURL
    .get(
      'images/search?limit=10&has_breeds=1&api_key=live_P6IDCedOe5EWOWI2ZOzXTY9zXc4zHTXJEKIBdvm2o54dGh7g1j5TKjsPFBKbvS5r',
    )
    .then(response => {
      return response.data;
    })
    .catch(function (error) {
      console.log('getAllCatImages error: ', error);
    });
};

export const postCatVote = (data: VoteProps) => {
  return baseURL
    .post(
      'votes',
      {
        image_id: data.id,
        value: data.value,
      },
      {
        headers: {
          'x-api-key':
            'live_P6IDCedOe5EWOWI2ZOzXTY9zXc4zHTXJEKIBdvm2o54dGh7g1j5TKjsPFBKbvS5r',
        },
      },
    )
    .then(
      response => {
        return response.data;
      },
      error => {
        console.log('postCatVote error: ', error);
      },
    );
};
