describe('when running failing specs on IE11', function() {
  it('raises an error while capturing test output', function() {
    expect(true).toBe(false);
  });
});
