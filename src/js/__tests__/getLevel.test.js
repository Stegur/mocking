import getLevel from '../getLevel';
import { fetchData } from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should get user`s level', () => {
  fetchData.mockReturnValue({
    status: 'ok',
    level: 1,
  });

  const response = getLevel(1);
  expect(response).toBe('Ваш текущий уровень: 1');
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('should get error', () => {
  fetchData.mockReturnValue({ });

  const response = getLevel(1);
  expect(response).toBe('Информация об уровне временно недоступна');
  expect(fetchData).toBeCalledWith('https://server/user/1');
});
