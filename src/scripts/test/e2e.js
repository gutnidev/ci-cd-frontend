const main = async () => {
  console.log('e2e test started');
  console.time('e2e test done in');
  await new Promise((resolve) => setTimeout(resolve, 1500));
  console.log('First e2e test completed...');
  await new Promise((resolve) => setTimeout(resolve, 1500));
  console.log('Second e2e test completed...');
  await new Promise((resolve) => setTimeout(resolve, 1500));
  console.timeEnd('e2e test done in');
};

void main();
