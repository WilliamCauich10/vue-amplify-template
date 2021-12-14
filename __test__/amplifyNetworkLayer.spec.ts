import HttpClient from '../src/network/HttpClient';
import ExampleRepository from '../src/data/repositories/ExampleRepository';

const httpClient = new HttpClient();
const repository = new ExampleRepository(httpClient);

describe('[AMPLIFY]: Check network layer works with different http methods', () => {
  it('GET: http request with amplify', async () => {
    const response = await repository.getAmplifyExamples();
    expect(response).toHaveProperty('data');
    expect(response).toHaveProperty('error');
    expect(response).toHaveProperty('warning');
    expect(response.error[0].code).toBe('500');
  });

  it('POST: http request with amplify', async () => {
    const response = await repository.postAmplifyExample({
      id: 1221,
      completed: true,
      userId: 3434,
      title: 'Hello world',
    });

    expect(response).toHaveProperty('data');
    expect(response).toHaveProperty('error');
    expect(response).toHaveProperty('warning');
    expect(response.error[0].code).toBe('500');
  });

  it('PUT: http request with amplify', async () => {
    const response = await repository.putAmplifyExample({
      id: 1221,
      completed: true,
      userId: 3434,
      title: 'Hello world',
    });

    expect(response).toHaveProperty('data');
    expect(response).toHaveProperty('error');
    expect(response).toHaveProperty('warning');
    expect(response.error[0].code).toBe('404');
  });

  it('DELETE: http request with amplify', async () => {
    const response = await repository.deleteAmplifyExample({
      id: 1221,
      completed: true,
      userId: 3434,
      title: 'Hello world',
    });

    expect(response).toHaveProperty('data');
    expect(response).toHaveProperty('error');
    expect(response).toHaveProperty('warning');
    expect(response.error[0].code).toBe('404');
  });
});
