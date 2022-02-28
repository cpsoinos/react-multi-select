import MultiSelect from './components/MultiSelect';

function App() {
  const options = [
    {
      name: 'Connor',
      value: 'connor',
    },
    {
      name: 'Flash',
      value: 'flash',
    },
    {
      name: 'Vasha',
      value: 'vasha',
    },
    {
      name: 'Gienah',
      value: 'gienah',
    },
  ];

  return (
    <div className="p-8 flex justify-center">
      <MultiSelect
        options={options}
        className="w-full"
        legend="Pets"
        label="Active pets"
      />
    </div>
  );
}

export default App;
