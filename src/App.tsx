const App = () => {
  return (
    <div>
      <h1 className='mb-3'>Hello</h1>

      {/* BUTTON */}
      <div className='mb-3'>
        <button id='my-button-id' name='my-button-name'>
          button
        </button>
      </div>

      {/* INPUT */}
      <div className='mb-3'>
        <input type='text' name='my-input-name' id='my-input-id' />
      </div>
    </div>
  );
};

export default App;
