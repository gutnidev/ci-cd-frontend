const main = async () => {
  console.log('Unit test started');
  console.time('Unit test done in');
  await new Promise((resolve) => setTimeout(resolve, 1500));
  console.log('First unit test completed...');
  await new Promise((resolve) => setTimeout(resolve, 1500));
  console.log('Second unit test completed...');
  await new Promise((resolve) => setTimeout(resolve, 1500));
  console.timeEnd('Unit test done in');
};

void main();
