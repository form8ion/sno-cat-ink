import groom from './groom';

suite('groom', () => {
  test('that the interactive UI for grooming notifications is rendered', async () => {
    await groom();
  });
});
